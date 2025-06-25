# Freaky Fashion Project

## Overview
Freaky Fashion is a full-stack web application featuring an Angular frontend and a Node.js backend. The project provides a platform for browsing and managing fashion products with a responsive and modern user interface.

## Technologies Used
- Frontend: Angular 19, Bootstrap 5, FontAwesome
- Backend: Node.js, Express.js
- Database: SQLite (better-sqlite3 and sqlite3)
- Development tools: Nodemon for backend auto-reloading

## Project Structure
- `client/` - Angular frontend application
- `server/` - Node.js backend server with Express and SQLite database

## Getting Started

### Prerequisites
- Node.js and npm installed on your machine

### Running the Frontend (Client)
1. Navigate to the client directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open your browser and go to `http://localhost:4200`

### Running the Backend (Server)
1. Navigate to the server directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server in development mode (with auto-reload):
   ```bash
   npm run dev
   ```
4. The server will run on the default port (check `server/src/server.js` for details)

## Building the Frontend for Production
From the `client` directory, run:
```bash
npm run build
```
The build artifacts will be stored in the `client/dist/` directory.

## Notes
- The backend uses SQLite database located at `server/db/products.db`.
- The frontend uses Angular routing and several components for product display, navigation, and user interaction.

## License
This project is licensed under the MIT License.
