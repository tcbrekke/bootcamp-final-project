



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

seed = 7
np.random.seed(seed)

#flash and jasonify
from flask import Flask, jsonify, make_response, render_template, redirect, request

#################################################
# Flask Setup
#################################################
app = Flask(__name__, static_url_path='/static')

uid=[]


df = pd.read_csv("winemag-data-year_parsed.csv")
df.head()
df=df.drop( columns='Column1')
df=df.drop_duplicates()

selected_data=df[['country','description','points','price','province','region_1','title','variety','year','stars','description_len','winery']]
selected_dropna=selected_data.dropna()
selected_dropna=selected_dropna[selected_dropna['year'] >1944]

selected_data=selected_dropna[['country','price','region_1','variety','year','stars','description_len','winery']]

X = selected_data.select_dtypes(include=[object])

le = preprocessing.LabelEncoder()
X_2 = X.apply(le.fit_transform)

from sklearn.preprocessing import OneHotEncoder

gen_ohe = OneHotEncoder()
gen_feature_arr = gen_ohe.fit_transform(
                            selected_dropna[['stars']]).toarray()
y=gen_feature_arr

new_data=pd.DataFrame({
    'country': X_2['country'],
    'price': selected_dropna['price'],
    'region_1': X_2['region_1'],
    'variety': X_2['variety'],
    'year': selected_dropna['year'],
    'description_len': selected_dropna['description_len'],
    'winery':X_2['winery']
})

new_data=new_data[[
    'country',
    'price',
    'region_1',
    'variety',
    'year',
    'description_len',
    'winery'
]]

X=new_data.values

X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=1)
print(X_train.shape, y_train.shape)
X_train

X_scaler = StandardScaler().fit(X_train)
# y_scaler = StandardScaler().fit(y_train)

X_train_scaled = X_scaler.transform(X_train)
X_test_scaled = X_scaler.transform(X_test)

# y_train_scaled = y_scaler.transform(y_train)
# y_test_scaled = y_scaler.transform(y_test)

from keras.models import Sequential

model = Sequential()
from keras.layers import Dense
number_inputs = 7
number_hidden_nodes = 8
model.add(Dense(units=number_hidden_nodes,
                activation='relu', input_dim=number_inputs))
model.add(Dense(units=12, activation='relu'))
model.add(Dense(units=8, activation='relu'))
model.add(Dense(units=8, activation='relu'))
model.add(Dense(units=16, activation='relu'))

number_classes = 5
model.add(Dense(units=number_classes, activation='softmax'))

model.compile(optimizer='adam',
            loss='binary_crossentropy',
            metrics=['accuracy'])

model.fit(
    X_train_scaled,
    y_train,
    epochs=5,
    shuffle=True,
    verbose=2
)

model_loss, model_accuracy = model.evaluate(
    X_test_scaled, y_test, verbose=2)
print(f"Loss: {model_loss}, Accuracy: {model_accuracy}")
#################################################
# Flask Routes
#################################################

# Static HTML Pages
#################################################
@app.route("/")
def welcome():
    return render_template("activity.html")

# Interactive Routes 
#################################################

@app.route("/search", methods=["GET", "POST"])

def send():
    if request.method == 'POST':
        year = request.form['Year']
        variety = request.form['Variety']
        price = request.form['Price']
        region = request.form['Region']
        country=request.form['Country']
        winery=request.form['Winery']
        description_len=request.form['Decription_Len']
        print(year)
        global uid
        uid=[year,
            variety,
            price,
            region,
            country,
            winery, 
            description_len
        ] 
        # print(uid[0]) 
        # return (year)
      
        return render_template('activity.html'
                            ,Year=year, 
                            Veriaty=variety, 
                            Price=price,
                            Region=region, 
                            Country=country, 
                            Winery=winery,
                            Description_len=description_len)

    
    # return render_template("activity.html")

# @app.route("/test")
# def test():
    # uid = [user1_id, user2_id]
    # global uid
    print(uid)
    # user_dict={
        
    #     'price': uid[2],
    #     'region_1': uid[3],
    #     'variety': uid[1],
    #     'country':uid[4],
    #     'year': uid[0],
    #     'description_len': uid[6],
    #     'winery':uid[5]
    # }
    user_dict={
        
        'price': 19,
        'region_1': "Napa Valley",
        'variety': "Cabernet Sauvignon",
        'country':"US",
        'year': 2011,
        'description_len': 243,
        'winery':"Kirkland Signature"
    }
    user_input=pd.DataFrame(user_dict,index=[0])
    user_inputX = user_input.select_dtypes(include=[object])
    # 1. INSTANTIATE
    # encode labels with value between 0 and n_classes-1.
    le = preprocessing.LabelEncoder()
    # 2/3. FIT AND TRANSFORM
    # use df.apply() to apply le.fit_transform to all columns
    X_2 = user_inputX.apply(le.fit_transform)
    print(X_2.head())

    new_user_data=pd.DataFrame({
        'country': X_2['country'],
        'price': user_input['price'],
        'region_1': X_2['region_1'],
        'variety': X_2['variety'],
        'year': user_input['year'],
        'description_len': user_input['description_len'],
        'winery':X_2['winery']
        
    }).reset_index(drop=True)

    new_user_data=new_user_data[[
                                 'country',
                                'price',
                                'region_1',
                                'variety',
                                'year',
                                 'description_len',
                                 'winery'
                                ]]

    new_user_data_scalar=X_scaler.transform(new_user_data)
    new_user_data_scalar

    print(f"Predicted class: {model.predict_classes(new_user_data_scalar)}")
    x=model.predict_classes(new_user_data_scalar)
    print(x)
    return render_template('activity.html')



if __name__ == '__main__':
    app.run(debug=True)



