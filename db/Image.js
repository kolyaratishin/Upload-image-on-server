const Sequilize = require("sequelize");

module.exports = function (sequilize) {
    return sequilize.define("images", {
        id: {
            type: Sequilize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        image_name: {
            type: Sequilize.STRING,
            allowNull: false
        },
        file_name: {
            type: Sequilize.STRING,
            allowNull: false
        },
        username: {
            type: Sequilize.STRING,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: "image"
    });
}