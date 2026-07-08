#  SafeSight - Backend

Backend REST API for the **SafeSight Eye Care Clinic Management System**.

This backend is built using **Node.js**, **Express.js**, and **MongoDB**. It manages patient appointments, admin authentication, and serves as the backend for
the SafeSight Eye Care web application.

---

## 🚀 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- dotenv
- CORS

---

## 📂 Project Structure

```
Backend/
│
├── Controller/
│   ├── admin_login.js
│   └── appointment.js
│
├── Middlewares/
│   └── Auth.js
│
├── Models/
│   └── Appointment.js
│
├── Routers/
│   ├── admin_login.js
│   └── appointment.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── server.js
```

---

## ✨ Features

- 🔐 Admin Login Authentication
- 📅 Appointment Management
- ➕ Create Appointment
- ✏️ Update Appointment
- ❌ Delete Appointment
- 📋 Get All Appointments
- 🔒 Protected Routes using JWT
- 🌐 CORS Enabled
- 🗄️ MongoDB Database Integration

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/safesight-backend.git
```

### 2. Go to the Project Folder

```bash
cd safesight-backend
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Create a `.env` File

```env
PORT=3000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Example:

```env
PORT=3000
MONGODB_URL=mongodb://127.0.0.1:27017/safesight
JWT_SECRET=mysecretkey
```

---

## ▶️ Run the Server

Development

```bash
npm run dev
```

Production

```bash
npm start
```

Server will run on

```
http://localhost:3000
```

---

## 📡 API Endpoints

### Admin

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/admin/login` | Admin Login |

---

### Appointment

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/appointment` | Create Appointment |
| GET | `/api/appointment` | Get All Appointments |
| GET | `/api/appointment/:id` | Get Appointment by ID |
| PUT | `/api/appointment/:id` | Update Appointment |
| DELETE | `/api/appointment/:id` | Delete Appointment |

> Endpoints may vary depending on your router configuration.

---

## 🔐 Authentication

Protected routes require a JWT token.

Example:

```http
Authorization: Bearer <your_token>
```

---

## 📁 Environment Variables

| Variable | Description |
|----------|-------------|
| PORT | Server Port |
| MONGODB_URL | MongoDB Connection URL |
| JWT_SECRET | Secret Key for JWT |

---

## 📌 Future Improvements

- OTP Login
- Email Notifications
- Patient Management
- Electronic Medical Records (EMR)
- Doctor Dashboard
- Reception Dashboard
- Billing Module
- AI Assistant Integration
- Analytics Dashboard

---

## 👨‍💻 Developer

**Avinash Mutum**

Electronics and Communication Engineering  
National Institute of Technology (NIT) Manipur

### Skills

- Node.js
- Express.js
- MongoDB
- JavaScript
- REST API
- JWT Authentication
- LangChain
- LangGraph
- RAG
- Vector Database
- AI Agents
- MCP

---

## 📄 License

This project is developed for educational and portfolio purposes.

---

## ⭐ Support

If you found this project useful, consider giving it a **⭐ Star** on GitHub.
