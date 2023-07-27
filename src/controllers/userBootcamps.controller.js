import { UserBootcamp } from "../models/userBootcamp.js";
import { Bootcamp } from "../models/bootcamps.js";
import { User } from "../models/users.js";


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

async function getBootcampByIdWithUsers(req, res) {
  const { bootcampId } = req.params;

  try {
    const bootcamp = await Bootcamp.findByPk(bootcampId, {
      include: {
        model: User,
        through: { attributes: [] }, 
      },
    });

    if (!bootcamp) {
      return res.status(404).json({ message: "Bootcamp no encontrado." });
    }

    return res.status(200).json(bootcamp);
  } catch (error) {
    console.error("Error al obtener el bootcamp:", error);
    return res.status(500).json({ message: "Error del servidor al obtener el bootcamp." });
  }
}

async function getAllBootcampsWithUsers(req, res) {
  try {
    const bootcamps = await Bootcamp.findAll({
      include: {
        model: User,
        through: { attributes: [] }, 
      },
    });

    return res.status(200).json(bootcamps);
  } catch (error) {
    console.error("Error al obtener los bootcamps:", error);
    return res.status(500).json({ message: "Error del servidor al obtener los bootcamps." });
  }
}

async function getUserByIdWithBootcamps(req, res) {
  const { userId } = req.params;

  try {
    const user = await User.findByPk(userId, {
      include: {
        model: Bootcamp,
        through: { attributes: [] }, 
      },
    });

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado." });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error("Error al obtener el usuario:", error);
    return res.status(500).json({ message: "Error del servidor al obtener el usuario." });
  }
}

async function getAllUsersWithBootcamps(req, res) {
  try {
    const users = await User.findAll({
      include: {
        model: Bootcamp,
        through: { attributes: [] }, 
      },
    });

    return res.status(200).json(users);
  } catch (error) {
    console.error("Error al obtener los usuarios:", error);
    return res.status(500).json({ message: "Error del servidor al obtener los usuarios." });
  }
}

async function updateUserById(req, res) {
  const { userId } = req.params;
  const { name } = req.body;

  try {
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado." });
    }

    user.name = name; // Actualizar el nombre del usuario con el nuevo valor

    await user.save(); // Guardar los cambios en la base de datos

    return res.status(200).json({ message: "Usuario actualizado correctamente." });
  } catch (error) {
    console.error("Error al actualizar el usuario:", error);
    return res.status(500).json({ message: "Error del servidor al actualizar el usuario." });
  }
}

async function deleteUserById(req, res) {
  const { userId } = req.params;

  try {
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado." });
    }

    await user.destroy(); // Eliminar el usuario de la base de datos

    return res.status(200).json({ message: "Usuario eliminado correctamente." });
  } catch (error) {
    console.error("Error al eliminar el usuario:", error);
    return res.status(500).json({ message: "Error del servidor al eliminar el usuario." });
  }
}

export { 
  addUserToBootcamp,
  getBootcampByIdWithUsers,
  getAllBootcampsWithUsers,
  getUserByIdWithBootcamps,
  getAllUsersWithBootcamps,
  updateUserById,
  deleteUserById };