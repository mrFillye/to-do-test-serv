import { app } from "../../../index.js";
import { todoService } from "../service/todo.service.js";
import express from "express";

const router = express.Router();

router.get("/todo", (req, res) => {
  console.log(123);

  res.send();
});

export default router;
