# 🍕 Fast React Pizza Co.

A modern, fully functional web application for ordering pizzas. This project demonstrates advanced frontend development techniques, including state management, asynchronous data fetching, and native browser APIs integration.

🌐 [Live Demo](https://fast-pizza-co-one.vercel.app/)

---

## ✨ Features

- **Dynamic Menu:** Fetches real-time pizza menus from a REST API with loading states and error handling.
- **Advanced Cart Management:** Users can add, remove, and update pizza quantities in their cart with Redux state management.
- **Smart Geolocation:** Automatically detects the user's current location using the browser's Geolocation API and reverse-geocodes it into a readable address to streamline the ordering process.
- **Seamless Order Creation & Updating:** Users can place new orders and update existing ones (e.g., adding priority) using modern data mutation techniques with React Router actions.

---

## 🛠️ Tech Stack

| Technology                  | Purpose                                                 |
| --------------------------- | ------------------------------------------------------- |
| **React 19**                | Frontend framework with hooks and functional components |
| **React Router DOM v7.13+** | Routing with loaders and actions for data fetching      |
| **Redux Toolkit**           | State management for cart and user data                 |
| **Tailwind CSS**            | Utility-first CSS for rapid UI development              |
| **Vite**                    | Fast build tool and development server                  |
| **ESLint & Prettier**       | Code linting and formatting                             |
| **Fast Pizza API**          | Menu and order data                                     |
| **BigDataCloud API**        | Reverse geocoding service                               |

---

## 📂 Project Structure

```
src/
├── features/
│   ├── cart/
│   ├── menu/
│   ├── order/
│   └── user/
├── services/
│   ├── apiGeocoding.js
│   └── apiRestaurant.js
├── UI/
│   ├── AppLayout.jsx
│   ├── Error.jsx
│   ├── Header.jsx
│   ├── Home.jsx
│   ├── Loader.jsx
│   └── ...
├── utils/
│   └── helpers.js
├── App.jsx
├── main.jsx
├── store.js
└── index.css
```

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps:

### Prerequisites

- Node.js (v18 or higher) installed on your machine.
- npm or yarn package manager.

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/shefo72/Fast-Pizza-Co.git
   ```

2. Navigate to the project directory:

   ```sh
   cd Fast-Pizza-Co
   ```

3. Install dependencies:

   ```sh
   npm install
   ```

4. Start the development server:

   ```sh
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🙏 Acknowledgments

- Built as part of [The Ultimate React Course](https://www.udemy.com/course/the-ultimate-react-course/) by Jonas Schmedtmann.
- Pizza data provided by the Fast Pizza API.
- Geocoding service by BigDataCloud.

---

Made with ❤️ and lots of 🍕
