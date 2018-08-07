import psycopg2
import pandas as pd
import os
from sqlalchemy import create_engine

#Set DATABASE_URL to the database URL served by Heroku Postgres
DATABASE_URL = os.environ['DATABASE_URL']

engine = create_engine(DATABASE_URL)
connection = engine.connect()

year = 2008

wines = connection.execute(f"SELECT * FROM wine_table WHERE year = {year}")

wines_df = pd.DataFrame(wines)

print(wines.first())
print(wines_df)

