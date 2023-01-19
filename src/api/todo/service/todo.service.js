import { Todo } from "../../../models/todo/index.js";

export const todoService = () => {
  const createTodo = (req, res) => {
    console.log("req", req.body);
  };

  const getToDoList = (res) => {};

  return { createTodo, getToDoList };
};
