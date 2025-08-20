# 🚀 Express.js

**Express.js** (or just **Express**) is a **backend web framework for Node.js**.  
It simplifies building web servers and APIs.
**It basically a NPM package**

---

## 🔹 Why Express?
Without Express, you’d have to use Node’s built-in `http` module, which means writing a lot of boilerplate code.  
Express provides an easy-to-use API for:


- Handling **routes** (URLs like `/home`, `/about`)
- Handling **HTTP requests** (GET, POST, PUT, DELETE, etc.)
- Serving **static files** (HTML, CSS, JS, images)
- Using **middleware** (functions that run before sending a response — for logging, authentication, etc.)

---
# 🚏 Routes in Express.js

## 🔹 What is a Route?

A **route** defines how an Express.js application responds to a particular **URL path** and **HTTP method** (GET, POST, PUT, DELETE).

---

## 🔹 Syntax
```js
app.METHOD(PATH, HANDLER)

METHOD → HTTP method (GET, POST, PUT, DELETE, etc.)

PATH → The URL (like /, /about, /users)

HANDLER → A function (req, res) that runs when the route is matched

---

# 🛠️ Middleware in Express.js

## 🔹 What is Middleware?
In **Express.js**, **middleware** is a function that sits between the **request (req)** and the **response (res)**.  

It can:  
- Inspect or modify the **request object (req)**  
- Inspect or modify the **response object (res)**  
- Decide whether to end the request-response cycle OR pass control to the next middleware using `next()`  

---

## ✅ Middleware Function Signature
```js
function (req, res, next) {
   // do something
   next()   // pass control to the next middleware
}
