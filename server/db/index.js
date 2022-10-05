import dotenv from 'dotenv'
dotenv.config({ path: "./.env/.env" })
import { Sequelize} from 'sequelize';


 const sequelize = new Sequelize(process.env.database, process.env.owner,process.env.password,{
    host: 'localhost',
    dialect: "postgres",
    protocol: 'postgres',
    dialectOption: {
        ssl: true,
        native: true,
    }

})

export default sequelize;

