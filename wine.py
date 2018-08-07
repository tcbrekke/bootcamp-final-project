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

#load the predictive model based on wine descriptions
text_predict_model = pickle.load(open(filename, 'rb'))

# Flask Routes
#-------------------------------
@app.route("/")
def index():
    return render_template("index.html")

@app.route('/description_score/<text>')
def description_score(text):
    words_list = [text]
    words_count = vect.transform(words_list)
    words_tfidf = tfidf_transformer.transform(words_count)
    predict_score = sgdc.predict(words_tfidf)
    return jsonify(predict_score[0])

@app.route('choice_score/<choice>')
def choice_score(text):


if __name__ == "__main__":
    app.run(debug=True)