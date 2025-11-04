## 📘 **Academic Management System – Documentation Overview**

Welcome to the documentation hub for the **Academic Management System (AMS)**.
This section provides detailed resources for developers, administrators, faculty, and students involved in using or contributing to AMS.

---

## 🧭 **Table of Contents**

1. [📖 Introduction](#-introduction)
2. [🧱 System Overview](#-system-overview)
3. [🧑‍💻 Developer Documentation](#-developer-documentation)
4. [👥 User Guides](#-user-guides)
5. [🧩 API Documentation](#-api-documentation)
6. [⚙️ Architecture & Design](#️-architecture--design)
7. [🚀 Deployment & CI/CD](#-deployment--cicd)
8. [📈 Contribution & Feedback](#-contribution--feedback)

---

## 📖 **Introduction**

The **Academic Management System (AMS)** is a comprehensive web platform that simplifies and automates various academic and administrative processes in educational institutions.

It provides a unified interface for students, faculty, and administrators to manage:

- Attendance tracking (manual, QR, and future face recognition)
- Automatic timetable generation
- Student profiling and academic tracking
- Elective course suggestions
- Centralized dashboards and real-time analytics

> The project adheres to modern software practices — built using **React (Frontend)**, **Spring Boot (Backend)**, and **PostgreSQL (Database)**.

---

## 🧱 **System Overview**

| Layer                | Technology Stack                  | Description                                                    |
| -------------------- | --------------------------------- | -------------------------------------------------------------- |
| **Frontend**         | React.js, Axios, React Router     | Provides user interfaces for students, faculty, and admins     |
| **Backend**          | Spring Boot, Spring Security, JPA | Handles APIs, authentication (JWT & OAuth), and business logic |
| **Database**         | PostgreSQL                        | Stores attendance, user, and timetable data                    |
| **Cloud Deployment** | AWS Elastic Beanstalk + RDS       | Scalable deployment and managed database                       |
| **CI/CD**            | GitHub Actions                    | Automates testing, build, and deployment pipelines             |
| **Docs Deployment**  | GitHub Pages                      | Automatically deploys documentation site                       |

---

## 🧑‍💻 **Developer Documentation**

These resources help contributors and maintainers set up, build, and deploy the AMS system.

- 📄 [**Setup Guide**](developer/setup_guide.md) — Instructions for local environment setup (frontend, backend, DB).
- ⚙️ [**Environment Variables**](developer/environment_variables.md) — List of all environment configurations.
- 🚀 [**Deployment Guide**](developer/deployment_guide.md) — Steps to deploy the AMS system on AWS Elastic Beanstalk.
- 🧰 [**Troubleshooting Guide**](developer/troubleshooting.md) — Fixes for common setup and runtime issues.

---

## 👥 **User Guides**

Guides for all major user roles — each tailored to their workflows and permissions.

| User Type      | Documentation                                                                                               |
| -------------- | ----------------------------------------------------------------------------------------------------------- |
| 🎓 **Student** | [Student Guide](user-guides/student_guide.md) — Using dashboard, viewing attendance, elective preferences.  |
| 👩‍🏫 **Faculty** | [Faculty Guide](user-guides/faculty_guide.md) — Marking attendance, managing performance data.              |
| 🧑‍💼 **Admin**   | [Admin Guide](user-guides/admin_guide.md) — Generating timetables, managing users, and reviewing analytics. |

---

## 🧩 **API Documentation**

All REST APIs are documented and automatically updated through **Swagger / OpenAPI**.

- 🌐 **Live Swagger UI:**
  Once backend is running locally —
  [http://localhost:8080/swagger-ui/index.html](http://localhost:8080/swagger-ui/index.html)

- 📁 **Static OpenAPI Spec:**
  [openapi.yaml](api/openapi.yaml) — Full OpenAPI 3.0 specification file.
  _(Validated automatically through CI pipeline.)_

---

## ⚙️ **Architecture & Design**

Resources outlining system-level structure and design:

- 🧩 [**System Overview**](architecture/system_overview.md) — Explains modular architecture and data flow.
- 🗃️ [**Database Design**](architecture/database_design.md) — Includes ER diagrams and schema structure.
- 🖥️ API flow, authentication logic, and deployment topology (see included diagrams).

---

## 🚀 **Deployment & CI/CD**

AMS follows an automated DevOps workflow integrated via **GitHub Actions**:

| Stage              | Description                                                            |
| ------------------ | ---------------------------------------------------------------------- |
| 🧪 **Validation**  | Runs unit, integration, and documentation lint checks.                 |
| 🏗️ **Build**       | Builds frontend and backend Docker images.                             |
| ☁️ **Deploy**      | Deploys to AWS Elastic Beanstalk (staging or production).              |
| 📚 **Docs Deploy** | Publishes `/docs` to GitHub Pages (auto-generated documentation site). |

> See: `.github/workflows/ci-cd.yml` and `.github/workflows/docs-ci.yml`

---

## 📈 **Contribution & Feedback**

We welcome collaboration and feedback from both developers and users.

### 🧑‍💻 Contributing

1. Fork the repository.
2. Create a feature branch (`feature/<feature-name>`).
3. Commit and push changes.
4. Submit a pull request to `develop`.

### 🗣️ Feedback

If you encounter issues or have suggestions:

- Open an issue on GitHub (`Issues` tab).
- Or reach out via project communication channels.

---

## 🏁 **Acknowledgements**

Developed by:
**Team AMS** – _Techno International New Town_

- Sorbopriyo Roy
- Rima Raj
- Gulshan Kumar
- Aman Kumar Patwa
  **Mentor:** Dr. Satyabrata Maity

---

## 📜 **License**

This documentation and project are distributed under the **MIT License**.
See [LICENSE](../LICENSE) for details.

---
