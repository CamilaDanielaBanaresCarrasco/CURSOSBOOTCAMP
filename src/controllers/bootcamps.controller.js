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

const create = async (req, res) => {
    try {
        const { title, cue, description } = req.body;
        console.log("Este es el título:", title);
        console.log("Este es el CUE:", cue);
        console.log("Esta es la descripción:", description);

        const newBootcamp = await Bootcamp.create({
            title,
            cue,
            description,
        });

        res.status(201).json(newBootcamp.toJSON());
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al crear el bootcamp." });
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