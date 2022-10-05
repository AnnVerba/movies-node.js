import { Model, DataTypes } from 'sequelize';

import sequelize from "../db/index.js";

let Movie= Model.init( {
        name: {type: DataTypes.TEXT, required: true},
        time: {type: DataTypes.TEXT, required: true},
        rating: {type: DataTypes.FLOAT, required: false},
    },
    {sequelize,modelName: "movies",timestamps: false})

export default Movie
