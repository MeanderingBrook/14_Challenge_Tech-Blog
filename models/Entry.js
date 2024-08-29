const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Entry extends Model {}

Entry.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    entry_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    entry_text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "entry",
  }
);

module.exports = Entry;
