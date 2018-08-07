import psycopg2
import pandas as pd
import os
from sqlalchemy import create_engine

#Set DATABASE_URL to the database URL served by Heroku Postgres
DATABASE_URL = os.environ['DATABASE_URL']

engine = create_engine(DATABASE_URL)
connection = engine.connect()

connection.execute("SELECT * FROM wine_table")