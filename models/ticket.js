import { DataTypes } from "sequelize";
import sequelize from "../lib/db";

const Ticket = sequelize.define(
  "Ticket",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    daftarEvent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    detailEvent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imgPath: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tempat: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    harga: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tanggal: {
      type: DataTypes.DATE,
      allowNull: false
    },
    waktu: {
      type: DataTypes.TIME,
      allowNull: false
    },
  },
  {
    tableName: "ticket",
    timestamps: false,
  }
);

export default Ticket;