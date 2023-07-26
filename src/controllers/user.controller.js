import { Bootcamp } from "../models/bootcamps.js";
import { Users } from "../models/users.js";


const findAll = (req, res) => {
    res.json("find all");
}

const findById = async (req, res) => {
    const id = req.params.id;
    const users = await Users.findByPk(id, {
        include: Bootcamp
    });
    res.json(users);
}

const create = async (req, res) => {
    try {
        const { firstName, lastName, email } = req.body;
        console.log("este es el nombre"+ firstName )
        console.log("este es el apellido"+ lastName )
        console.log("este es el email"+ email )


        const newUser = await Users.create({
            firstName,
            lastName,
            email,
        });

        res.status(201).json(newUser.toJSON());
    } catch (error) {
        console.error(error);
        
        res.status(500).json({ error: "Error al crear el usuario." });
    }
};

const update = (req, res) => {
    res.json("update");
}

const deleteById = (req, res) => {
    res.json("delete");
}


export{
    findAll,
    findById,
    create,
    update,
    deleteById
}