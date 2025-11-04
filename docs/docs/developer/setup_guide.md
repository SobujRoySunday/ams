# Developer Setup Guide

## 1. Prerequisites

- Node.js (v16+)
- Java 11
- Maven
- PostgreSQL (v14+)
- Docker (optional, for containerization)
- AWS CLI (for deployment)

## 2. Clone the Repository

```bash
git clone https://github.com/your-org/ams.git
cd ams
```

3. Environment Configuration

Create .env files:

Frontend (.env)

<!-- REACT_APP_API_BASE_URL=http://localhost:8080/api -->

REACT_APP_API_BASE_URL=yet to be added

Backend (application.properties)
spring.datasource.url=jdbc:postgresql://localhost:5432/amsdb
spring.datasource.username=postgres
spring.datasource.password=admin
spring.jpa.hibernate.ddl-auto=update
jwt.secret=YOUR_SECRET_KEY

4. Running the Backend
   cd backend
   mvn spring-boot:run

5. Running the Frontend
   cd frontend
   npm install
   npm start

6. API Documentation

Access Swagger at:
Yet to be added

<!-- http://localhost:8080/swagger-ui/index.html -->

7. Deployment

See deployment_guide.md
for AWS setup.

---
