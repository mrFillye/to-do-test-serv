import express from "express";
import router from "./api/todo/controller/todo.controller.js";

export const app = express();

app.use(router);

const port = process.env.PORT;

app.listen(port, () => console.log(`[server]: Server is running at http://localhost:${port}`));
