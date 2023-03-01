const express = require("express");

const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PRODUCTS = [
  { name: "Gitara", price: 100 },
  { name: "Smuikas", price: 300 },
];

const TASKS = [
  { id: 1, name: "Nuvalyti langus", isComplete: false },
  { id: 2, name: "Issiurbti namus", isComplete: true },
];

const USERS = [
  { id: 1, name: "petras", email: "petras123@gmail.com" },
  { id: 2, name: "Antanas", email: "antanas@gmail.com" },
];

app.get("/products", (req, res) => {
  res.json(PRODUCTS);
});

app.post("/products", (req, res) => {
  const newProduct = req.body;
  PRODUCTS.push(newProduct);
  res.json(PRODUCTS);
});

app.get("/users", (req, res) => {
  res.json(USERS);
});

app.get("/users/:name", (req, res) => {
  console.log(req.params);
  res.json(
    USERS.find(
      (user) => user.name.toLowerCase() === req.params.name.toLowerCase()
    )
  );
});

app.get("/tasks", (req, res) => {
  res.json(TASKS);
});

app.get("/tasks/:id", (req, res) => {
  // const id = req.params.id;
  const { id } = req.params;

  const task = TASKS.find((tasks) => tasks.id.toString() === id.toString());

  if (!task) {
    res.status(404);
    res.json({ message: "Task not found" });
  }

  res.json(task);
});

app.get("*", (req, res) => {
  res.json({
    message: "Sis endpont neegzistuoja",
  });
});

app.listen(3000, () => {
  console.log("Server started");
});
