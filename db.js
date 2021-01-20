const { Sequelize, Model, DataTypes } = require("sequelize");

require('dotenv').config()

const sequelize = new Sequelize(
	process.env.VUE_APP_DB,
	process.env.VUE_APP_USERDB,
	process.env.VUE_APP_PASSDB,
	{
		host: process.env.VUE_APP_HOST,
		dialect: "mysql",
	}
);

async function datos(){
	try {
		await sequelize.authenticate();
		console.log("CONECCION CON DB ESTABLECIDA CORRECTAMENTE.");
	} catch (error) {
		console.error("NO SE LOGRO CONECCION:", error);
	}
};



module.exports = {
    sequelize,
    datos
}
  