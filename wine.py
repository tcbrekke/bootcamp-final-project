# Dependencies
#------------------------
from flask import Flask, jsonify, render_template
import sqlalchemy
from sqlalchemy.orm import Session
from sqlalchemy.ext.automap import automap_base
from sqlalchemy import create_engine
import pandas as pd
import pickle
import os
from keras.models import load_model
import datetime 
from sklearn import preprocessing
import sklearn
from numpy.random import seed
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

app = Flask(__name__)



#load the predictive model and text transformer models based on wine descriptions
text_predict_model = pickle.load(open('models/wine_text_model.sav', 'rb'))
vect_model = pickle.load(open('models/vect_model.sav', 'rb'))
tfidf_model = pickle.load(open('models/tfidf_model.sav', 'rb'))

#load the predictive model based on region, year, varietal
'''
CODE HERE
'''


# commenting out the database code for now as I don't have the database
#connect to the database and set up variables for relevant columns
DATABASE_URL = os.environ['DATABASE_URL']
engine = create_engine(DATABASE_URL)
conn = engine.connect()

Base = automap_base()
Base.prepare(engine, reflect=True)
session = Session(engine)



# Flask Routes
#-------------------------------
@app.route("/")
def index():
    return render_template("index.html")

'''
this route takes text input and will return a predicted wine score based on the text
'''
@app.route('/description_score/<text>')
def description_score(text):
    words_list = [text]
    words_count = vect_model.transform(words_list)
    words_tfidf = tfidf_model.transform(words_count)
    predict_score = int(list(text_predict_model.predict(words_tfidf))[0])
    return jsonify(predict_score)

''' 
this route will get input from the dropdowns and will feed this into the Keras
model to return a predicted wine score
'''
# @app.route('/choice_score')
# def choice_score():
#     year = request.args.get('year_input', None)
#     variety  = request.args.get('variety_input', None)
#     price  = request.args.get('price_input', None)
#     region  = request.args.get('region_input', None)
#     description_len  = request.args.get('description_len_input', None)
#     country  = request.args.get('country', None)

@app.route('/choice_score/<variety>/<price>/<region>/<year>/<country>/', methods=['GET'])
def choice_score(variety, price, region, year, country):
    user_dict={ 'year': year,'variety': variety,'price':price,'region_1': region,'country': country}
    # user_dict={ 'year': 2011,'variety': "Pinot Noir",'price':13,'region_1': "Napa",'country': "Us"}
    print(user_dict)
    user_input=pd.DataFrame(user_dict,index=[0])
    user_inputX = user_input.select_dtypes(include=[object])
    le = preprocessing.LabelEncoder()
    X_2 = user_inputX.apply(le.fit_transform)
    print("The X_2 output is: ", X_2.head())

    new_user_data=pd.DataFrame({
        'country': X_2['country'],
        'price': user_input['price'],
        'region_1': X_2['region_1'],
        'variety': X_2['variety'],
        'year': user_input['year'],
        }).reset_index(drop=True)

    new_user_data=new_user_data[[
                                 'country',
                                'price',
                                'region_1',
                                'variety',
                                'year',
                                ]]
    infile = open('X_scaled','rb')
    X_scaled = pickle.load(infile)
    new_user_data_scalar=X_scaled.transform(new_user_data)
    new_user_data_scalar

    model = load_model('models/wine_rating_model')

    print(f"Predicted class: {model.predict_classes(new_user_data_scalar)}")
    x=model.predict_classes(new_user_data_scalar)
    print(x)
    return jsonify(int((x)))

'''
this route will take the same input as choice_score and will run a SQL query
based on the input, and then will output 3 recommended wines from the DB
that fit the user's parameters
'''
@app.route('/wine_chooser/<variety>/<price>')
def wine_chooser(variety, price):

    results = conn.execute(f"SELECT * FROM wine_table WHERE variety = '{variety}' AND price < {price} ORDER BY points DESC LIMIT 3").fetchall()

    results_df = pd.DataFrame(results)

    return results_df.to_html()

if __name__ == "__main__":
    app.run(debug=True)