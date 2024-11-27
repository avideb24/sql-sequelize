const { DataTypes, TEXT } = require("sequelize");
const sequelize = require("../config/db");


const User = sequelize.define('User', 
    {
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        fullname: {
            type: DataTypes.VIRTUAL,
            get(){
                return `${this.name} Added`
            }
        },
        userName: {
            type: DataTypes.STRING(15),
            allowNull: false,
            unique: true,
            get(){
                const rawValue = this.getDataValue('userName');
                return rawValue.toUpperCase();
            }
        },
        birthDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        address: {
            type: DataTypes.JSON,
        }
    }
);

module.exports = User;