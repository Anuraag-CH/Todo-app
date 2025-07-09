# 📝 Todo App

A modern, full-stack todo application built with **React**, **FastAPI**, and **MongoDB**. Features a beautiful UI with light green theme, complete CRUD operations, and Docker support for easy deployment.

## 🚀 Features

### Frontend (React + Vite)
- ✨ Modern, responsive UI with light green theme
- 🎨 Beautiful CSS styling with hover effects and animations
- 📱 Mobile-friendly design
- ⚡ Fast development with Vite
- 🔄 Real-time updates after CRUD operations

### Backend (FastAPI)
- 🚀 RESTful API for todo management
- 📚 Automatic Swagger documentation
- 🔒 CORS enabled for frontend integration
- 🗄️ MongoDB integration with MongoEngine

### Database (MongoDB)
- 📊 NoSQL document storage
- 🔄 Persistent data with Docker volumes
- 🔐 Secure authentication setup

## 🧰 Tech Stack

### Frontend
- **React 19** – Modern UI library
- **Vite** – Fast build tool and dev server
- **CSS3** – Custom styling with modern features

### Backend
- **FastAPI** – Python web framework for building APIs
- **MongoDB** – NoSQL document database
- **MongoEngine** – ODM for MongoDB in Python
- **Uvicorn** – ASGI server

### DevOps
- **Docker** – Containerization
- **Docker Compose** – Multi-container orchestration
- **Nginx** – Web server (optional, using serve for development)

---

## ✅ Prerequisites

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

---

## 🚀 Quick Start

### Using Docker (Recommended)

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd Todo-app
   ```

2. **Run the entire application:**
   ```bash
   docker-compose up --build
   ```

3. **Access the application:**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8000
   - API Docs: http://localhost:8000/docs

### Manual Setup

#### Backend Setup
```bash
cd Backend
pip install -r requirements.txt
python main.py
```

#### Frontend Setup
```bash
cd Frontend
npm install
npm run dev
```

---

## 🔧 Environment Variables

### Backend (.env file in Backend directory)
```env
MONGODB_DB_URI=mongodb://admin:password@mongodb:27017/todo_db?authSource=admin
MONGODB_DB_NAME=todo_db
```

### Frontend (.env file in Frontend directory)
```env
VITE_API_URL=http://localhost:8000


## 📁 Project Structure

```
Todo-app/
├── Frontend/                 # React frontend
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── App.jsx         # Main app component
│   │   └── App.css         # Styling
│   ├── Dockerfile          # Frontend container
│   └── package.json        # Dependencies
├── Backend/                 # FastAPI backend
│   ├── routes/             # API routes
│   ├── models/             # Database models
│   ├── schemas/            # Pydantic schemas
│   ├── database/           # Database connection
│   ├── main.py            # FastAPI app
│   ├── requirements.txt   # Python dependencies
│   └── Dockerfile         # Backend container
├── docker-compose.yml      # Multi-container setup
└── DOCKER_README.md        # Docker documentation
```

---

## 🎯 API Endpoints

- `GET /todos` - Get all todos
- `POST /todos` - Create a new todo
- `PUT /todos/{todo_id}` - Update a todo
- `DELETE /todos/{todo_id}` - Delete a todo

---

## 🐳 Docker Commands

```bash
# Start all services
docker-compose up

# Start in background
docker-compose up -d

# Rebuild and start
docker-compose up --build

# Stop all services
docker-compose down

# View logs
docker-compose logs -f
```

---

## 🎨 Features

- ✅ **Create** new todos with title and description
- ✅ **Read** all todos with status indicators
- ✅ **Update** todo completion status
- ✅ **Delete** todos
- ✅ **Real-time UI updates** after operations
- ✅ **Responsive design** for all devices
- ✅ **Beautiful animations** and hover effects
- ✅ **Empty state** handling
- ✅ **Error handling** for API calls

---

## 🔧 Development

For detailed Docker setup and troubleshooting, see [DOCKER_README.md](./DOCKER_README.md).

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).


