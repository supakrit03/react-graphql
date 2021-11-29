const { sequelize } = require("../config/database");
const { Sequelize, DataTypes, Model } = require("sequelize");

class Song extends Model {}

Song.init(
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "song",
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "Song", // We need to choose the model name
  }
);

module.exports = Song;
