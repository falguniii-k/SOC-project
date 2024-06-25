const express = require('express');
const app = express();
const port = 3000;
const toDoList = require('./todolist');
app.use(express.json());
app.use(express.urlencoded());
app.get('/todos', (request, response) => {
    response.send(toDoList);
});
app.get('/todos/:id', (request, response) => {
    const { id } = request.params;
    const toDoId = toDoList.find((g) => g.id == id);
    response.send(toDoId);
});
app.post('/todos', (request, response) => {
    console.log(request.body);
    toDoList.push(request.body);
    response.send(201);
})
app.delete('/todos/:id', (request, response) => {
    const id = request.params.id;
    const index = toDoList.findIndex((todo) =>todo.id == id);
    const deletedObj = toDoList.find((d) => d.id == id);
    toDoList.splice(index, 1);
    response.send(deletedObj);
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  }); 