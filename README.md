# Members-Only Club 🔒

![Project Preview](replace-with-image-url)

A full-stack **exclusive message board** where only registered members can view message authors. Built using **Node.js, Express, MongoDB, and Handlebars**, this project implements authentication and authorization to differentiate between regular users and privileged members.

## 📖 About the Project
- Anyone can **view** public messages.
- Only logged-in users can **post messages**.
- Members with elevated privileges can **see message authors**.

It serves as a practical example of implementing **user authentication, role-based access control (RBAC), and database persistence** in a full-stack web application.

## 🚀 Features
- 👤 **User Authentication** – Signup, login, and logout with secure password hashing.
- 📝 **Post Messages** – Users can add new messages to the board.
- 🔒 **Role-Based Access** – Only "members" can see message authors.
- 🗑 **Delete Messages** – Admin users can delete inappropriate messages.
- 🎨 **Minimalist UI** – Clean and simple layout using Handlebars.
- 📦 **Persistent Storage** – Messages and user accounts are stored in MongoDB.

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js
- **Frontend:** Handlebars (templating engine)
- **Database:** MongoDB with Mongoose ORM
- **Authentication:** Passport.js (Local Strategy)
- **Styling:** CSS

## 📥 Installation & Setup

### 1️⃣ Clone the Repository

git clone https://github.com/lonis752/members-only.git
cd members-only

### 2️⃣ Install Dependencies

npm install

### 3️⃣ Configure Environment Variables

Create a **.env** file in the root directory and add the following:

MONGO_URI=your-mongodb-connection-string
SESSION_SECRET=your-secret-key

### 4️⃣ Run the Application

npm start

This will start the server on http://localhost:3000/.

## 🔮 Future Improvements
- ✅ Add a **"request membership"** feature for users.
- 🛑 Implement **moderation tools** for admins.
- 📧 Integrate **email verification** on signup.
- 🎨 Improve UI/UX with better styling.

## 🤝 Contributing
Contributions are welcome! If you'd like to enhance the project, feel free to:

1. **Fork** the repository.
2. **Create a new branch** (git checkout -b feature-branch).
3. **Commit your changes** (git commit -m "Added a cool feature").
4. **Push to GitHub** (git push origin feature-branch).
5. **Submit a pull request** 🚀

For suggestions or issues, open a **GitHub Issue**.

---

🚀 **Happy Coding & Welcome to the Club!** 🎯