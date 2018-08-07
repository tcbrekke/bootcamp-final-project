import psycopg2
import pandas as pd
import os
from sqlalchemy import create_engine

#Set DATABASE_URL to the database URL served by Heroku Postgres
DATABASE_URL = os.environ['DATABASE_URL']

wine_csv = os.path.join("resources", "winemag-data-year-parsed.csv")

engine = create_engine(DATABASE_URL)
connection = engine.connect()

wine_df = pd.read_csv(wine_csv)

wine_df.to_sql('wine_table', engine, if_exists = 'replace')
connection.execute("ALTER TABLE wine_table ADD PRIMARY KEY (index);")