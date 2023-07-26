import { DataTypes } from "sequelize";
import { sequelize } from "../cnn/cnn.js";

const UserBootcamp = sequelize.define(
  "UserBootcamp",
  {
    clave_primaria: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idBootcamp: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "userBootcamp",
    createdAt: "createdAt",
    updatedAt: "updatedAt",
  }
);

export { UserBootcamp };