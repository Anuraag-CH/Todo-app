#Backend app

from fastapi import FastAPI
import uvicorn
from database.database import connect_to_database
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


connect_to_database()

#import routes
from routes.routes import router as todo_router

#add routes to app

app.include_router(todo_router)







if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
