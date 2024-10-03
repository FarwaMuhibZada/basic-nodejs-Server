# basic-nodejs-Server
A basic web server built using Node.js and Express.js, handling multiple HTTP requests, serving static content, and supporting CRUD operations on a simple dataset (e.g., users).

## 🚀 Project Objective

By the end of this project, you'll be able to:
- Set up a simple Node.js server using Express.js.
- Handle different types of HTTP requests (GET, POST, PUT, DELETE).
- Serve static files (HTML, CSS, JavaScript).
- Send JSON responses and handle data via request bodies and query parameters.
- Implement basic error handling and routing.

## 🏗️ Project Structure

```bash
basic-nodejs-server/
│
├── public/            # Contains static files like HTML, CSS, JS
│   ├── index.html     # A simple homepage
│   ├── style.css      # Styling for the homepage
│   └── script.js      # Handles user data interaction
│
├── users.json         # Contains user data (stored separately)
│
├── server.js          # Main server file
│
└── package.json       # Dependencies and scripts

```
## ⚙️ Installation
To set up this project locally, follow these steps:

Clone the repository:

```bash
git clone https://github.com/your-username/my-node-server.git
cd my-node-server
```

Install dependencies:

``` bash
npm install
Run the server:
```
```bash
node server.js
```
The server will be running at http://localhost:3000.

## DEMO 📺
[Deployment Link](https://nextjs-advanced-app.vercel.app/)

## 📋 Features
 - Homepage: Serves a static HTML file as the homepage.
 - CRUD Operations: Implements basic CRUD operations for managing users.
 - Static Assets: Serves static CSS and JavaScript files from the public directory.
 - JSON Data Handling: Supports JSON request bodies for POST and PUT requests.
 - Routing: Organized routes using Express Router.

## 📁 Static Files
- Homepage: The homepage is a static HTML file located at /public/index.html.
- CSS: Basic styling is provided by the /public/style.css file.

## Users CRUD Operations
GET /users
Returns a list of all users.

POST /users
Creates a new user. Example request body:

```json
{
    "id": 2,
    "name": "Bob",
    "email": "bob@example.com",
    "age": 30
}
```
PUT /users/:id
Updates an existing user based on their ID. Example request body:

```json
{
    "id": 2,
    "name": "Bob",
    "email": "bob@example.com",
    "age": 30
}
```
DELETE /users/:id
Deletes a user by ID.

## Author

- **Farwa Muhibzada** - 

[GitHub Profile](https://github.com/FarwaMuhibZada)

[Linkdin](https://www.linkedin.com/in/farwamohibzada/)


### Contributing 🧑

Feel free to open issues or submit pull requests. Make sure to follow the project's code style and include tests for new features.