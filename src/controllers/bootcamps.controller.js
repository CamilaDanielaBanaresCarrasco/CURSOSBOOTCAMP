import { Bootcamp } from "../models/bootcamps.js";


const findAll = (req, res) => {
    res.json("find all");
}

const findById = async (req, res) => {
    const id = req.params.id;
    const bootcamps = await Bootcamp.findByPk(id, {
    });
    res.json(bootcamps);
}

const create = (req, res) => {
    res.json("create");
}

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