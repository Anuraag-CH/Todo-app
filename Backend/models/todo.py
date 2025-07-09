from mongoengine import Document,DynamicDocument, StringField, BooleanField, DateTimeField
from datetime import datetime
from uuid import uuid4

class Todo(DynamicDocument):
    title = StringField(required=True, unique=False)
    description = StringField(required=True, unique=False)
    completed = BooleanField(default=False)
    todo_id = StringField(default=lambda: str(uuid4()), required=True, unique=True)
    created_at = DateTimeField(default=datetime.now)
    updated_at = DateTimeField(default=datetime.now)

    meta = {
        "collection": "todos",
        "indexes": ["created_at"]
    }



