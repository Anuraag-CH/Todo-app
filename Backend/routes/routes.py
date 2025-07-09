from fastapi import APIRouter, HTTPException
from models.todo import Todo
from schemas.todo import Todo as TodoSchema
from datetime import datetime
router = APIRouter()


@router.get("/todos")
def get_todos():
    todos = Todo.objects.all()
    todos_list = []
    for todo in todos:
        todos_list.append({
            "todo_id": todo.todo_id,
            "title": todo.title,
            "description": todo.description,
            "completed": todo.completed
        })
    return todos_list

@router.post("/todos")
def create_todo(todo: TodoSchema):
    todo = Todo(title=todo.title, description=todo.description, completed=todo.completed)
    todo.save()
    return {"message": "Todo created successfully", "todo_id": todo.todo_id}

@router.put("/todos/{todo_id}")
def update_todo(todo_id: str, todo: TodoSchema):
    todo_object = Todo.objects.get(todo_id=todo_id)
    if not todo_object:
        raise HTTPException(status_code=404, detail="Todo not found")
    todo_object.title = todo.title
    todo_object.description = todo.description
    todo_object.completed = todo.completed
    todo_object.updated_at = datetime.now()
    todo_object.save()
    return {"message": "Todo updated successfully"}

@router.delete("/todos/{todo_id}")
def delete_todo(todo_id: str):
    todo_object = Todo.objects.get(todo_id=todo_id)
    if not todo_object:
        raise HTTPException(status_code=404, detail="Todo not found")
    todo_object.delete()
    return {"message": "Todo deleted successfully"}




