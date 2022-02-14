const { Model, DataTypes } = require('sequelize');
// use bcrypt for password hashing
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
    checkPassword(loginPassword) {
        return bcrypt.compareSync(loginPassword, this.password);
    }
}

User.init(
    {
        id: {
            // define the data type
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
                }
            },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8],
            },
        },
    },
    {
        hooks: {
            // set up beforeCreate lifecycle "hook" functionality
            beforeCreate: async (newUserData) => {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
            
            // set up beforeUpdate lifecycle "hook" functionality
            beforeUpdate: async (updatedUserData) => {
                updatedUserData.password = await bcrypt.hash(newUserData.password, 10);
                return updatedUserData;
              },
        },
        sequelize,
        // do not automatically create createdAt/updatedAt timestamp fields
        timestamps: false,
        // do not pluralize name of database table
        freezeTableName: true,
        // use underscores instead of camel-casing (i.e. `post_id` and not `postId`)
        underscored: true,
        modelName: 'user',
    }
);

module.exports = User;