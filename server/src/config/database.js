const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize("react-graphql", "root", "root", {
  host: "localhost",
  port: 8889,
  dialect: "mysql" /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
});

exports.sequelize = sequelize;

exports.connectDB = async () => {
  try {
    await sequelize.sync({
      alter: true,
      logging: false,
    });
    await sequelize.authenticate();

    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
