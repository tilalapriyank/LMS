const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/Database");
const User = require("./User");

const UserMeta = sequelize.define(
  "UserMeta",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
      onDelete: "CASCADE",
    },
    metaKey: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    metaValue: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    timestamps: false, 
  }
);

UserMeta.belongsTo(User, { foreignKey: "userId" });
User.hasMany(UserMeta, { foreignKey: "userId" });

module.exports = UserMeta;
