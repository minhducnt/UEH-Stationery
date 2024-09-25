const Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('admin', {
    MaAD: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    MaTK: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'taikhoan',
        key: 'MaTK'
      }
    },
    TenAD: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Email: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'admin',
    timestamps: false,
    indexes: [{
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{
          name: "MaAD"
        }, ]
      },
      {
        name: "FK1_AD",
        using: "BTREE",
        fields: [{
          name: "MaTK"
        }, ]
      },
    ]
  });
};