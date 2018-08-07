# Dependencies
#------------------------
from flask import Flask, jsonify, render_template
import sqlalchemy
from sqlalchemy.orm import Session
from sqlalchemy.ext.automap import automap_base
from sqlalchemy import create_engine
from sklearn.linear_model import SGDClassifier
import pickle

app = Flask(__name__)

#load the predictive model and text transformer models based on wine descriptions
text_predict_model = pickle.load(open('wine_text_model.sav', 'rb'))
vect_model = pickle.load(open('vect_model.sav', 'rb'))
tfidf_model = pickle.load(open('tfidf_model.sav', 'rb'))

# Flask Routes
#-------------------------------
@app.route("/")
def index():
    return render_template("index.html")

@app.route('/description_score/<text>')
def description_score(text):
    words_list = [text]
    words_count = vect_model.transform(words_list)
    words_tfidf = tfidf_model.transform(words_count)
    predict_score = text_predict_model.predict(words_tfidf)
    return jsonify(predict_score[0])

@app.route('choice_score')
def choice_score():
    variety = request.args.get('variety', None)

@app.route('wine_chooser')
def wine_chooser():
    price = request.args.get('price', None)


if __name__ == "__main__":
    app.run(debug=True)