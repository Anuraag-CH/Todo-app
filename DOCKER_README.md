# Todo App - Docker Setup

This project includes Docker configuration for easy deployment and development.

## Prerequisites

- Docker
- Docker Compose

## Quick Start

1. **Clone the repository and navigate to the project directory**

2. **Run the entire application stack:**
   ```bash
   docker-compose up --build
   ```

3. **Access the application:**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8000
   - MongoDB: localhost:27017

## Services

### Frontend (React + Vite)
- **Port**: 3000
- **Technology**: React 19, Vite
- **Container**: todo-frontend

### Backend (FastAPI)
- **Port**: 8000
- **Technology**: FastAPI, Python 3.11
- **Container**: todo-backend

### Database (MongoDB)
- **Port**: 27017
- **Technology**: MongoDB 6.0
- **Container**: todo-mongodb

## Environment Variables

### Backend (.env file in Backend directory)
```
MONGODB_DB_URI=mongodb://admin:password@mongodb:27017/todo_db?authSource=admin
MONGODB_DB_NAME=todo_db
```

### Frontend (.env file in Frontend directory)
```
VITE_API_URL=http://localhost:8000
```

## Docker Commands

### Start all services
```bash
docker-compose up
```

### Start in background
```bash
docker-compose up -d
```

### Rebuild and start
```bash
docker-compose up --build
```

### Stop all services
```bash
docker-compose down
```

### Stop and remove volumes
```bash
docker-compose down -v
```

### View logs
```bash
docker-compose logs -f
```

### View specific service logs
```bash
docker-compose logs -f backend
docker-compose logs -f frontend
docker-compose logs -f mongodb
```

## Development

### Running individual services

**Backend only:**
```bash
cd Backend
docker build -t todo-backend .
docker run -p 8000:8000 --env-file .env todo-backend
```

**Frontend only:**
```bash
cd Frontend
docker build -t todo-frontend .
docker run -p 3000:80 todo-frontend
```

## Troubleshooting

### Port conflicts
If ports 3000, 8000, or 27017 are already in use, modify the `docker-compose.yml` file to use different ports.

### Database connection issues
Ensure MongoDB is running and the connection string is correct in the backend environment variables.

### Frontend can't connect to backend
Check that the `VITE_API_URL` environment variable is set correctly in the frontend.

## Production Deployment

For production deployment, consider:
- Using environment-specific .env files
- Setting up proper SSL certificates
- Configuring MongoDB authentication
- Using a reverse proxy (nginx)
- Setting up monitoring and logging 