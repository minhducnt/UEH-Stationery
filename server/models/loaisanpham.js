const Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('loaisanpham', {
    Maloai: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    TenLoai: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Mota: {
      type: DataTypes.STRING(350),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'loaisanpham',
    timestamps: false,
    indexes: [{
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [{
        name: "Maloai"
      }, ]
    }, ]
  });
};