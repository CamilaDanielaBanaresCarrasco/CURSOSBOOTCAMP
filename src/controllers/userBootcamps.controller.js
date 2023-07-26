import { UserBootcamp } from "../models/userBootcamp.js";

// Controlador para agregar usuarios a los bootcamps
async function addUserToBootcamp(req, res) {
  try {
    const { bootcampId, userIds } = req.body;
    
    const records = userIds.map((userId) => ({ idUser: userId, idBootcamp: bootcampId }));
    await UserBootcamp.bulkCreate(records);

    return res.status(201).json({ message: "Usuarios agregados al bootcamp correctamente." });
  } catch (error) {
    console.error("Error al agregar usuarios al bootcamp:", error);
    return res.status(500).json({ message: "Hubo un error al agregar usuarios al bootcamp." });
  }
}

export { addUserToBootcamp };