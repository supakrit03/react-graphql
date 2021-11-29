const { sequelize } = require("../config/database");
const { Sequelize, DataTypes, Model } = require("sequelize");

class Lyric extends Model {}

Lyric.init(
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    song_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "lyric",
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "Lyric", // We need to choose the model name
  }
);

module.exports = Lyric;
