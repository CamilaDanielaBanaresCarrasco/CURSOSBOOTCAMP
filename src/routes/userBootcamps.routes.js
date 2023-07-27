import { Router } from "express";
import { addUserToBootcamp,  
    getBootcampByIdWithUsers,
    getAllBootcampsWithUsers,
    getUserByIdWithBootcamps,
    getAllUsersWithBootcamps,
    updateUserById,
    deleteUserById, } from "../controllers/userBootcamps.controller.js";

const userBootcamp = Router();

// Ruta para agregar usuarios a los bootcamps
userBootcamp.post("/", addUserToBootcamp);

// Consultando el Bootcamp por id, incluyendo los usuarios.
userBootcamp.get("/bootcamps/:bootcampId", getBootcampByIdWithUsers);

// Listar todos los Bootcamp con sus usuarios.
userBootcamp.get("/bootcamps", getAllBootcampsWithUsers);

// Consultar un usuario por id, incluyendo los Bootcamp.
userBootcamp.get("/users/:userId", getUserByIdWithBootcamps);

// Listar los usuarios con sus Bootcamp.
userBootcamp.get("/users", getAllUsersWithBootcamps);

// Actualizar el usuario según su id.
userBootcamp.put("/users/:userId", updateUserById);

// Eliminar un usuario por id.
userBootcamp.delete("/users/:userId", deleteUserById);

export {
    userBootcamp
}