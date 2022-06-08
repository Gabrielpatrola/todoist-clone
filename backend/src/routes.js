import { Router } from "express";
import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import TodoController from "./app/controllers/TodoController";

import authMiddleware from "./app/middlewares/auth";

const routes = new Router();

routes.post("/users", UserController.store);
routes.post("/sessions", SessionController.store);

routes.use(authMiddleware);

routes.get("/todos", TodoController.index);
routes.post("/todos", TodoController.store);
routes.put("/todos/:id", TodoController.update);
routes.patch("/todos/:id", TodoController.toggleCompleted);
routes.delete("/todos/:id", TodoController.delete);

export default routes;
