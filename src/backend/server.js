const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());

app.use(bodyParser.json());

// to fetch all the todos from the databse
app.get("/todos", (req, res) => {
  fs.readFile("src/backend/database.json", "utf8", (err, data) => {
    if (err) throw err;
    var todos = JSON.parse(data);
    res.send(todos);
  });
});

// to add new todo into the databse
app.post("/todos", (req, res) => {
  const newTodo = {
    id: Math.floor(Math.random() * 10000),
    title: req.body.title,
    description: req.body.description,
  };
  fs.readFile("src/backend/database.json", "utf8", (err, data) => {
    if (err) throw err;
    const todos = JSON.parse(data);
    todos.push(newTodo);
    // to write file into database
    fs.writeFile("src/backend/database.json", JSON.stringify(todos), (err) => {
      if (err) throw err;
      res.status(201).send(newTodo);
    });
  });
});
// to delete the completed todos
function removeAtIndex(arr, index) {
  if (index >= 0 && index < arr.length) {
    arr.splice(index, 1);
  }
}
app.delete("/todos/:id", (req, res) => {
  fs.readFile("src/backend/database.json", "utf8", (err, data) => {
    if (err) throw err;
    const todos = JSON.parse(data);
    const idToFind = parseInt(req.params.id);
    const todoIndex = todos.findIndex((todo) => todo.id === idToFind);

    if (todoIndex === -1) {
      res.status(404).send();
    } else {
      removeAtIndex(todos, todoIndex);
      fs.writeFile(
        "src/backend/database.json",
        JSON.stringify(todos),
        (err) => {
          if (err) throw err;
          res.status(200).send();
        }
      );
    }
  });
});

app.listen(3000, "0.0.0.0", () => {
  console.log("listening");
});
