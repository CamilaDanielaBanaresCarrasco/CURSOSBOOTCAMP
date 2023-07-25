import { DataTypes } from "sequelize";
import { sequelize } from "../cnn/cnn.js";

const UserBootcamp = sequelize.define('UserBootcamp', {
    clave_primaria:{
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    idUser:{
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    idBootcamp:{
        type: DataTypes.INTEGER,
        primaryKey: true
    },
},{
    tableName: 'userBootcamp',
    createdAt: false,
    updatedAt: false
}
);

export{
    UserBootcamp
}