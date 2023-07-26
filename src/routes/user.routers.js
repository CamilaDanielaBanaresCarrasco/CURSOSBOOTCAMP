import { Router } from "express";
import { create, deleteById, findAll, findById, update } from "../controllers/user.controller.js";


const cursoRouter = Router();

cursoRouter.get("/", findAll)

cursoRouter.get("/:id", findById)

cursoRouter.post("/", create)

cursoRouter.put("/", update)

cursoRouter.delete("/:id", deleteById);

export{
    cursoRouter
}