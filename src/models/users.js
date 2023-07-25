import { DataTypes } from "sequelize";
import { sequelize } from "../cnn/cnn.js";

const Users = sequelize.define(
  'Users',
  {
    id: {
      type: DataTypes.INTEGER(),
      primaryKey: true
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
    createdAt: false,
    updatedAt: false
  }
);

export {
  Users
};