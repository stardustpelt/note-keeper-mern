# Note Keeper MERN

A modular, full-stack note-taking application built with MongoDB, Express.js, React, and Node.js. Designed with a strict separation of concerns, modern styling via Tailwind CSS, and a streamlined developer workflow.

---

## 🌐 Live Demo

- **Frontend Application**: [https://note-keeper-mern.vercel.app](https://note-keeper-mern.vercel.app) *(Replace with your exact Vercel URL)*
- **Backend API**: [https://note-keeper-mern.onrender.com](https://note-keeper-mern.onrender.com)

---

## ✨ Features

- **Full CRUD Operations**: Create, read, and delete notes seamlessly with real-time UI updates.
- **Split-Stack Cloud Architecture**: Decoupled backend hosted on Render and frontend deployed on Vercel.
- **Modern UI / UX**: Styled with Tailwind CSS v4, featuring a dark mode dashboard and responsive grid layout.
- **Centralized API Client**: Pre-configured Axios instance using environment-based base URLs (`VITE_API_URL`).
- **Clean Architecture**: Clear separation of routes, models, components, and services.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 18 (via Vite)
- **Styling**: Tailwind CSS v4
- **HTTP Client**: Axios
- **Tooling**: ESLint, Prettier, absolute path aliases (`@/`)

### Backend
- **Runtime**: Node.js & Express.js
- **Database**: MongoDB Atlas & Mongoose ODM
- **Middlewares**: CORS, Express JSON parser, Dotenv

---

## 📁 Project Structure

```text
note-keeper-mern/
├── backend/
│   ├── config/        # Database configuration (db.js)
│   ├── models/        # Mongoose schemas (Note.js)
│   ├── routes/        # Express API endpoints (notes.js)
│   └── server.js      # Server entry point & DB connection
├── frontend/
│   ├── src/
│   │   ├── services/  # Centralized API client (api.js)
│   │   ├── App.jsx    # Main application dashboard
│   │   ├── index.css  # Global Tailwind styles
│   │   └── main.jsx   # React DOM render entry
│   ├── .env.example   # Frontend environment variable blueprint
│   ├── jsconfig.json  # Path mapping configuration
│   └── vite.config.js # Vite build setup
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) (v18 or higher)
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) database or local MongoDB instance

---

### 1. Local Development Setup

#### Clone the Repository

```bash
git clone [https://github.com/stardustpelt/note-keeper-mern.git](https://github.com/stardustpelt/note-keeper-mern.git)
cd note-keeper-mern

```

#### Backend Setup

```bash
cd backend
npm install

```

Create a `.env` file in the `backend/` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string

```

Start the backend development server:

```bash
node server.js

```

#### Frontend Setup

Open a new terminal tab and navigate to `frontend/`:

```bash
cd frontend
npm install

```

Create a `.env` file in the `frontend/` directory:

```env
VITE_API_URL=http://localhost:5000/api
VITE_APP_NAME=Note Keeper MERN

```

Start the frontend development server:

```bash
npm run dev

```

Access the app locally at `http://localhost:5173` or given localhost.

---

## ☁️ Deployment Configuration

| Service | Platform | Environment Variables |
| --- | --- | --- |
| **Backend** | Render | `MONGO_URI`, `PORT` |
| **Frontend** | Vercel | `VITE_API_URL=https://note-keeper-mern.onrender.com/api` |

---

## 📄 License

This project is open-source and available under the [MIT License](https://www.google.com/search?q=LICENSE).