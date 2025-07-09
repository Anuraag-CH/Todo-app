from pydantic import BaseModel
from typing import Optional

class TodoSchema(BaseModel):
    title: str
    description: str
    completed: Optional[bool] = False

