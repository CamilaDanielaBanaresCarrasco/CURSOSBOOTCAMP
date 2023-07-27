import { DataTypes } from "sequelize";
import { sequelize } from "../cnn/cnn.js";

const User  = sequelize.define(
  'User ',
  {
    id: {
      type: DataTypes.INTEGER(),
      primaryKey: true,
      autoIncrement: true // Si deseas que el id se incremente automáticamente
    },
    firstName: {
      type: DataTypes.STRING(),
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING(),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: "El formato del correo electrónico no es válido."
        }
      }
    },
  },
  {
    tableName: 'users',
    timestamps: true, // Establece esto en true para habilitar createdAt y updatedAt
    createdAt: 'createdAtColumn', // Renombra la columna createdAt (opcional)
    updatedAt: 'updatedAtColumn', // Renombra la columna updatedAt (opcional)
  }
);

export {
  User 
};