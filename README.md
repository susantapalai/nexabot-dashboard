# 🚀 NexaBot Dashboard

<div align="center">

![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge\&logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?style=for-the-badge\&logo=javascript)
![Axios](https://img.shields.io/badge/Axios-API-purple?style=for-the-badge\&logo=axios)
![React Router](https://img.shields.io/badge/React_Router-v7-red?style=for-the-badge\&logo=reactrouter)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)

### ⚡ Modern Admin Dashboard for NexaBot Management

</div>

---

## 📌 Overview

NexaBot Dashboard is a modern React-based admin panel designed to manage chatbot operations, monitor business data, and track chat history efficiently.

The project follows a clean folder structure with reusable components, API service handling, and dedicated pages for scalability and maintainability.

---

# ✨ Features

✅ Responsive Dashboard UI
✅ Authentication/Login Page
✅ Business Management Editor
✅ Chat History Tracking
✅ Reusable React Components
✅ API Service Layer using Axios
✅ React Router Navigation
✅ Clean Project Architecture

---

# 🛠️ Tech Stack

| Technology       | Usage              |
| ---------------- | ------------------ |
| React 19         | Frontend Framework |
| React Router DOM | Routing            |
| Axios            | API Requests       |
| Lucide React     | Icons              |
| CSS              | Styling            |

---

# 📂 Project Structure

```bash
nexabot-dashboard-main/
│
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   └── StatCard.jsx
│   │
│   ├── pages/
│   │   ├── BusinessEditor.jsx
│   │   ├── ChatHistory.jsx
│   │   ├── Dashboard.jsx
│   │   └── Login.jsx
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── index.js
│
├── .env
├── .env.production
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

# ⚙️ Installation

## 1️⃣ Clone Repository

```bash
git clone <your-repository-url>
cd nexabot-dashboard-main
```

## 2️⃣ Install Dependencies

```bash
npm install
```

## 3️⃣ Start Development Server

```bash
npm start
```

Application will run on:

```bash
http://localhost:3000
```

---

# 📦 Available Scripts

| Command       | Description             |
| ------------- | ----------------------- |
| npm start     | Run development server  |
| npm run build | Create production build |
| npm test      | Run test suite          |
| npm run eject | Eject CRA configuration |

---

# 🧩 Core Modules

## 📊 Dashboard

Displays analytics, statistics, and overview cards.

## 💬 Chat History

Manage and review chatbot conversations.

## 🏢 Business Editor

Edit and configure business-related information.

## 🔐 Authentication

Handles user login and access control.

---

# 🔗 API Layer

The project uses a dedicated service layer:

```bash
src/services/api.js
```

This helps keep API logic separate from UI components.

---

# 🎨 UI Components

Reusable UI components are located inside:

```bash
src/components/
```

### Included Components

* Navbar
* Sidebar
* StatCard

---

# 🌍 Environment Variables

Example:

```env
REACT_APP_API_URL=your_api_url
```

Production variables can be configured inside:

```bash
.env.production
```

---

# 🚀 Build for Production

```bash
npm run build
```

Production-ready files will be generated inside:

```bash
/build
```

---

# 📈 Future Improvements

* Add JWT Authentication
* Add Role-Based Access
* Improve Analytics Charts
* Add Dark Mode
* Add Real-Time Notifications
* Docker Support
* Unit & Integration Testing

---

# 🤝 Contributing

1. Fork the repository
2. Create a new branch
3. Commit your changes
4. Push to your branch
5. Open a Pull Request

---

# 📜 License

This project is licensed under the MIT License.

---

<div align="center">

### ⭐ If you like this project, give it a star ⭐

Made with ❤️ using React

</div>
