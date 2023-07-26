import { Router } from "express";
import { addUserToBootcamp } from "../controllers/userBootcamps.controller.js";

const userBootcamp = Router();

// Ruta para agregar usuarios a los bootcamps
userBootcamp.post("/", addUserToBootcamp);


export{
    userBootcamp
}