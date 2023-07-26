import { Router } from "express";
import { create, deleteById, findAll, findById, update } from "../controllers/bootcamps.controller.js";


const bootcampRouter = Router();

bootcampRouter.get("/", findAll)

bootcampRouter.get("/:id", findById)

bootcampRouter.post("/", create)

bootcampRouter.put("/", update)

bootcampRouter.delete("/:id", deleteById);

export{
    bootcampRouter
}