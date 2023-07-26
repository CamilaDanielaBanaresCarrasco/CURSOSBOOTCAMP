import { DataTypes } from "sequelize";
import { sequelize } from "../cnn/cnn.js";
import { Users } from "./users.js";
import { UserBootcamp } from "./userBootcamp.js";

const Bootcamp = sequelize.define('Bootcamp',{
    id: {
        type: DataTypes.INTEGER(),
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING(),
        allowNull: false, // Campo obligatorio
    },
    cue: {
        type: DataTypes.INTEGER(),
        allowNull: false, // Campo obligatorio
        validate: {
            isInt: { msg: "El valor debe ser un número entero." }, // Validación de tipo entero
            min: { args: [5], msg: "El valor mínimo permitido es 5 CUE." }, // Límite mínimo
            max: { args: [10], msg: "El valor máximo permitido es 10 CUE." }, // Límite máximo
        },
    },
    description: {
        type: DataTypes.STRING(),
        allowNull: false, // Campo obligatorio
    },
},{
    tableName: 'bootcamp',
    createdAt: true,
    updatedAt: true
});


Bootcamp.belongsToMany(Users, {
    through: UserBootcamp, // Nombre de la tabla intermedia
    foreignKey: 'bootcampId', // Nombre de la foreign key en la tabla intermedia que hace referencia al modelo Bootcamp
});

Users.belongsToMany(Bootcamp, {
    through: UserBootcamp, // Nombre de la tabla intermedia
    foreignKey: 'userId', // Nombre de la foreign key en la tabla intermedia que hace referencia al modelo Users
});



sequelize.sync()


export {
    Bootcamp,
    Users,
    UserBootcamp // Exportamos la tabla intermedia para futuras referencias, si es necesario
};