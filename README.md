# To-Do List Application

A full-stack To-Do List application with React/Redux frontend and Node.js/Express backend.

## Prerequisites
- Docker
- Docker Compose
- Git

## Setup Instructions
1. Clone the repository:
git clone https://github.com/sample-user/todo-app.git cd todo-app


2. Start the application:
docker-compose up --build


3. Access the application:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000/api/todos

## Development
- Backend dependencies: `cd backend && npm install`
- Frontend dependencies: `cd frontend && npm install`
- Run backend: `cd backend && npm start`
- Run frontend: `cd frontend && npm start`

## Features
- Add, edit, and delete todos
- Light/dark theme toggle
- State persistence in localStorage
- Real-time UI updates
- RESTful API