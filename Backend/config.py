from dotenv import load_dotenv
import os

load_dotenv()

class Config:
    MONGODB_DB_URI = os.getenv("MONGODB_DB_URI")
    MONGODB_DB_NAME = os.getenv("MONGODB_DB_NAME")

config = Config()




