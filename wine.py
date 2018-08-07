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

app = Flask(__name__)



#load the predictive model and text transformer models based on wine descriptions
text_predict_model = pickle.load(open('wine_text_model.sav', 'rb'))
vect_model = pickle.load(open('vect_model.sav', 'rb'))
tfidf_model = pickle.load(open('tfidf_model.sav', 'rb'))

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
@app.route('/choice_score')
def choice_score():
    year = request.args.get('year_input', None)
    variety  = request.args.get('variety_input', None)
    price  = request.args.get('price_input', None)
    region  = request.args.get('region_input', None)
    description_len  = request.args.get('description_len_input', None)
    country  = request.args.get('country', None)

'''
this route will take the same input as choice_score and will run a SQL query
based on the input, and then will output 3 recommended wines from the DB
that fit the user's parameters
'''
@app.route('/wine_chooser')
def wine_chooser():
    variety  = request.args.get('variety_input', None)
    price  = request.args.get('price_input', None)

    results = connection.execute(f"SELECT * FROM wine_table WHERE variety = {variety} AND price < {price} ORDER BY score DESC LIMIT 3").fetchall()


if __name__ == "__main__":
    app.run(debug=True)