"# Employee Management System

A full-stack CRUD application for managing employee records with a Spring Boot backend and React frontend.

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Configuration](#configuration)

## 📌 Project Overview

This Employee Management System allows users to:
- Create new employee records with auto-generated IDs
- Search for employees by their ID
- View detailed employee information
- Persist data in a MySQL database

## 🛠 Tech Stack

### Backend
- **Java 17** with Spring Boot 4.0.1
- **Spring Data JPA** for database operations
- **MySQL 8** for data persistence
- **Lombok** for reducing boilerplate code
- **Maven** for dependency management

### Frontend
- **React 18** with Vite
- **JavaScript (ES6+)**
- **CSS3** for styling
- **Fetch API** for HTTP requests

## ✨ Features

### Backend Features
- Auto-generated Employee IDs
- RESTful API endpoints for CRUD operations
- CORS enabled for frontend communication
- Input validation and error handling
- JPA/Hibernate ORM for database operations

### Frontend Features
- **Create Employee Tab**: Form to add new employees
  - Fields: Name, Email, Phone, Department, Salary
  - Auto-generated ID displayed after creation
  
- **Search Employee Tab**: Find employees by ID
  - Real-time search functionality
  - Displays complete employee details
  
- Responsive design with modern UI
- Error/success message notifications
- Loading states during API calls

## 📋 Prerequisites

- **Java 17+** (JDK installed and configured)
- **Maven 3.6+** for building the backend
- **Node.js 18+** and npm for the frontend
- **MySQL 8.0+** installed and running
- Git for version control

## 🚀 Installation & Setup

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend/demo
```

2. Configure MySQL:
   - Create a database named `trishivax_db`:
   ```sql
   CREATE DATABASE trishivax_db;
   ```
   - Update credentials in `src/main/resources/application.properties`

3. Install dependencies:
```bash
mvn clean install
```

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend/myfrontend
```

2. Install dependencies:
```bash
npm install
```

## 🏃 Running the Application

### Start MySQL Server
```bash
# Make sure MySQL is running on localhost:3306
```

### Start Backend
```bash
cd backend/demo
mvn spring-boot:run
```
Backend will be available at: `http://localhost:8081`

### Start Frontend
```bash
cd frontend/myfrontend
npm run dev
```
Frontend will be available at: `http://localhost:5173`

## 🔗 API Endpoints

### Create Employee
- **Endpoint**: `POST /employee/submit`
- **Request Body**:
```json
{
  "empName": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "department": "Engineering",
  "salary": 75000.00
}
```
- **Response**:
```json
{
  "employeeId": 1,
  "empName": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "department": "Engineering",
  "salary": 75000.00
}
```

### Get Employee by ID
- **Endpoint**: `GET /employee/get?id={employeeId}`
- **Response**:
```json
{
  "employeeId": 1,
  "empName": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "department": "Engineering",
  "salary": 75000.00
}
```

## 📁 Project Structure

```
TrishivaX-Homework/
├── backend/
│   └── demo/
│       ├── src/
│       │   ├── main/
│       │   │   ├── java/com/trishivax/hw1/
│       │   │   │   ├── controller/
│       │   │   │   │   └── EmployeeController.java
│       │   │   │   ├── model/
│       │   │   │   │   └── Employee.java
│       │   │   │   ├── service/
│       │   │   │   │   └── EmployeeService.java
│       │   │   │   ├── repository/
│       │   │   │   │   └── EmployeeRepository.java
│       │   │   │   └── Hw1Application.java
│       │   │   └── resources/
│       │   │       └── application.properties
│       │   └── test/
│       └── pom.xml
├── frontend/
│   └── myfrontend/
│       ├── src/
│       │   ├── components/
│       │   │   ├── EmployeeForm.jsx
│       │   │   └── EmployeeSearch.jsx
│       │   ├── styles/
│       │   │   ├── EmployeeForm.css
│       │   │   └── EmployeeSearch.css
│       │   ├── App.jsx
│       │   ├── App.css
│       │   └── main.jsx
│       ├── package.json
│       └── vite.config.js
└── README.md
```

## ⚙️ Configuration

### Backend Configuration (application.properties)

```properties
spring.application.name=hw-1

# MySQL Database Configuration
spring.datasource.url=jdbc:mysql://localhost:3306/trishivax_db
spring.datasource.username=root
spring.datasource.password=your_password
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

# JPA/Hibernate Configuration
spring.jpa.database-platform=org.hibernate.dialect.MySQLDialect
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
```

### Employee Model Fields

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| employeeId | Integer | Auto | Auto-generated primary key |
| empName | String | Yes | Employee's full name |
| email | String | Yes | Email address |
| phone | String | Yes | Phone number |
| department | String | Yes | Department name |
| salary | Double | Yes | Salary amount |

## 🧪 Testing

### Backend Test
```bash
cd backend/demo
mvn test
```

## 🐛 Troubleshooting

### MySQL Connection Error
- Ensure MySQL is running
- Check credentials in `application.properties`
- Verify database `trishivax_db` exists

### CORS Error
- Backend has `@CrossOrigin` annotation enabled
- Frontend must use correct backend URL (http://localhost:8081)

### Port Already in Use
- Backend: Change port in `application.properties` with `server.port=8082` (or any available port)
- Frontend: Change port in `vite.config.js`

## 📝 License

This project is part of TrishivaX Homework assignments.

## 👨‍💼 Author

Created as part of TrishivaX-Homework project

---

" 

