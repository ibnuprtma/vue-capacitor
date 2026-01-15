# Netflix Clone (Vue + Capacitor)

A modern, mobile-first movie application built with **Vue 3**, **Tailwind CSS**, and **Ionic Framework**. This project replicates the Netflix UI/UX and includes simulated authentication, biometric login support, and mobile native capabilities using **Capacitor**.

## 🚀 Features

- **Netflix-like UI**: Dark theme, immersive hero banners, and horizontal scrolling movie lists.
- **Authentication**: 
  - JWT-based Login (mocked via `json-server-auth`).
  - Secure Storage implementation for tokens.
  - Biometric Login UI (TouchID/FaceID ready).
- **Mobile First**: 
  - Native Bottom Tab Navigation (Ionic).
  - Responsive design for Web and Android/iOS.
- **Dynamic Data**: Real-time TV show data fetched from the [TVMaze API](https://api.tvmaze.com).
- **State Management**: Robust state handling with **Pinia**.

## 🛠️ Tech Stack

- **Framework**: Vue 3 (Vite)
- **UI**: Tailwind CSS, Ionic Framework (@ionic/vue)
- **State**: Pinia
- **Mobile Runtime**: Capacitor JS
- **HTTP Client**: Axios
- **Backend (Mock)**: json-server, json-server-auth

## 📦 Installation

1. **Clone the repository** (if applicable) or navigate to project folder.
2. **Install dependencies**:
   ```bash
   npm install
   ```

## ▶️ How to Run

### 1. Start the Backend Server
This project uses a local JSON server to mock authentication.
```bash
npm run server
```
*Port: 3000 (Proxy mapped)*

### 2. Start the Application (Web)
Run the development server:
```bash
npm run dev
```
Access the app at `http://localhost:5173`.
- **Username**: `admin`
- **Password**: `1234`

### 3. Run on Android
Ensure you have **Android Studio** installed.
```bash
npm run build
npx cap sync
npx cap open android
```

## 🏗️ Project Structure

- `src/views/`: Page components (Login, Home, Profile, Tabs).
- `src/components/`: Reusable UI components (Navbar, Hero, MovieRow).
- `src/stores/`: Pinia stores (Auth).
- `src/services/`: API services (MovieService).
- `src/router/`: Ionic Router configuration.

## 📱 Screenshots
*(Add screenshots here if available)*

## 📄 License
MIT
