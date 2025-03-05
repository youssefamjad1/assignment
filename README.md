# Simple REST API with User Authentication

## Overview
This project is a simple REST API built with **Node.js** and **Express.js** for user registration and authentication. It uses **MySQL** as the database and **JWT** for authentication. Additionally, a simple frontend using **React.js** has been created to interact with the API.

## Features
- **User Registration** (`POST /register`)
  - Stores user name, email, and hashed password in MySQL.
- **User Authentication** (`POST /login`)
  - Verifies user credentials and returns a JWT token.
- **Secure API** with **JWT authentication**.
- Hosted on **Render.com** for live testing.

## Tech Stack
### Backend:
- **Node.js**
- **Express.js**
- **MySQL** (via Sequelize ORM)
- **JWT for authentication**
- **bcrypt for password hashing**

### Frontend (Optional):
- **React.js**
- **Axios for API calls**
- **Bootstrap for styling**

## API Endpoints
| Method | Endpoint  | Description |
|--------|----------|-------------|
| POST   | `/api/auth/register` | Register a new user (stores name, email, and hashed password). |
| POST   | `/api/auth/login` | Authenticate user and return JWT token. |

## Deployment
The backend is hosted on **Render.com** for live testing.

### Hosted API URL:
