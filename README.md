# ⚙️ Portfolio Backend API

This is a RESTful backend API built with **Express.js** and **Firebase Firestore**, designed to manage my portfolio projects for my personal developer portfolio site.

---

## 🚀 Features

- 🔄 CRUD operations for portfolio projects
- 🔥 Firebase Firestore as the backend database
- 🛡️ Secure project structure with modular controllers and routes
- 🌐 CORS & middleware handled
- 🧪 Test route for deployment check

---

## 📦 Technologies Used

- Node.js
- Express.js
- Firebase Admin SDK
- Firestore
- Dotenv
- Morgan (optional)

---

## 📁 Folder Structure

portfolio-backend/
├── config/
│ └── firebase.js
├── controllers/
│ └── projectController.js
├── routes/
│ └── projectRoutes.js
├── public/
├── .env
├── .gitignore
├── app.js
├── package.json
└── serviceAccountKey.json (ignored)




---

## 🔌 API Endpoints

| Method | Endpoint           | Description              |
|--------|--------------------|--------------------------|
| GET    | `/projects`        | Get all projects         |
| POST   | `/projects`        | Add a new project        |
| PUT    | `/projects/:id`    | Update existing project  |
| DELETE | `/projects/:id`    | Delete a project         |
| GET    | `/test`            | Test API response        |

---

## 🚀 How to Run Locally

```bash
git clone https://github.com/shivam97d/portfolio-backend.git
cd portfolio-backend
npm install
node app.js



```
---

## 👨‍💻 Author

Made with ❤️ by Shivam Dahifale

---