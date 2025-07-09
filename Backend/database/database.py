from mongoengine import connect
from config import config

def connect_to_database():
    connect(host=config.MONGODB_DB_URI,db=config.MONGODB_DB_NAME)
    print("Connected to database")











