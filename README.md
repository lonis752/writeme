# Todo PERN Application

![Project Preview](./preview-image.png)

## 📖 Project Overview

The Todo PERN project is a full-stack application that allows users to create, read, update, and delete todo items. Built using the PERN stack (PostgreSQL, Express, React, and Node.js), this project serves as a practical demonstration of how to implement CRUD operations through a modern web application. Leveraging the power of RESTful APIs and a PostgreSQL database, the application provides a smooth user experience with a self-contained architecture.

## ✨ Features

- User authentication and authorization for secure access.
- CRUD functionality for todo items: Create, Read, Update, and Delete.
- Responsive design for seamless use across devices.
- Real-time updates using React's state management.
- Comprehensive error handling and validation.

## 🛠️ Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL with Sequelize ORM
- **Authentication**: JSON Web Tokens (JWT)
- **Styling**: Custom CSS and Bootstrap
- **Middleware**: Custom middleware for error handling and validation

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/lonis752/todo-PERN.git
cd todo-PERN
```

### 2️⃣ Install Dependencies

Navigate to both the client and server directories and install the dependencies:

```sh
cd client && npm install
cd ../server && npm install
```

### 3️⃣ Set Up Environment Variables

Create a `.env` file in the server directory and add:

```ini
DATABASE_URL=your_postgresql_connection_string
JWT_SECRET=your_jwt_secret_key
```

### 4️⃣ Start the Development Server

In separate terminal windows, start both the client and server:

```sh
cd server && npm start
cd client && npm start
```

The app will be running on `http://localhost:3000` for the client and `http://localhost:5000` for the server.

## 🔮 Future Improvements

- Implementing a more robust state management solution (e.g., Redux).
- Adding unit and integration tests for better reliability.
- Expanding the application to support collaborative todo lists.
- Adding filtering and sorting functionalities for todo items.

## 🤝 Contributing

Contributions are welcome! If you have ideas for improvements, feel free to fork the repo, make changes, and submit a pull request. Let's build something awesome together! 🚀

---

Made with ❤️ by [lonis752](https://github.com/lonis752)