const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('Product', {
        product_id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            unique: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        images: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}