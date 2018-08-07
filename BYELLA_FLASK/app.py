



# Pandas
import pandas as pd
import os
import numpy as np
import datetime 
from sklearn import preprocessing
import sklearn
from numpy.random import seed
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
import pickle
from keras.models import load_model

seed = 7
np.random.seed(seed)

#flash and jasonify
from flask import Flask, jsonify, make_response, render_template, redirect, request

#################################################
# Flask Setup
#################################################
app = Flask(__name__, static_url_path='/static')

# Static HTML Pages
#################################################
@app.route("/")
def welcome():
    return render_template("activity.html")

# Interactive Routes 
#################################################

@app.route("/search", methods=["GET", "POST"])

def send():
    year = request.args.get('year_input')
    variety  = request.args.get('variety_input')
    price  = request.args.get('price_input')
    region  = request.args.get('region_input')
    country  = request.args.get('country')
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

    model = load_model('wine_rating_model')

    print(f"Predicted class: {model.predict_classes(new_user_data_scalar)}")
    x=model.predict_classes(new_user_data_scalar)
    print(x)
    return x
    # return render_template('activity.html', output=x)

@app.route("/d3")
def calld3():
    return render_template("d3.html")

if __name__ == '__main__':
    app.run(debug=True)



