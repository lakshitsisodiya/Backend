# 📦 Dependencies vs DevDependencies in Node.js

When working with Node.js projects, you will often install packages. These packages are stored in your `package.json` file under either **dependencies** or **devDependencies**.

---

## 🔹 Dependencies
- These are the packages required for your application to **run in production**.
- Without them, your app will not function.
- Installed with:
  ```bash
  npm install package-name

## 🔹 DevDependencies

-These are the packages required only in development **(not in production)**.

- Used for testing, debugging, compiling, or development tools.

- Installed with:
    ```bash
npm install package-name --save-dev

# 📜 npm Scripts in Node.js

In Node.js, scripts are defined inside the `package.json` file under the `"scripts"` section.  
They let you run custom commands with `npm run <script-name>`.

---

## 🔹 What are npm Scripts?
- Shortcuts to run commands (like starting the server, testing, or building).  
- They can run shell commands or Node.js commands.  
- Helps automate tasks in your project.

---

## 🔹 Default Scripts
Some script names have special meaning in npm:
- `"start"` → Run with `npm start` (no `run` keyword needed).  
- `"test"` → Run with `npm test`.  
- `"dev"` → Usually used for development (custom, but common convention).

---

## 🔹 Example
```json
{
  "name": "example-app",
  "version": "1.0.0",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "lint": "eslint .",
    "test": "jest",
    "build": "tsc"
  }
}
 