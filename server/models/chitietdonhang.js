const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chitietdonhang', {
    MaCTHD: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    MaHD: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'donhang',
        key: 'MaHD'
      }
    },
    MaSP: {
      type: DataTypes.STRING(4),
      allowNull: false,
      references: {
        model: 'sanpham',
        key: 'MaSP'
      }
    },
    SLuong: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'chitietdonhang',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MaCTHD" },
        ]
      },
      {
        name: "FK1_CTDH",
        using: "BTREE",
        fields: [
          { name: "MaHD" },
        ]
      },
      {
        name: "FK2_CTDH",
        using: "BTREE",
        fields: [
          { name: "MaSP" },
        ]
      },
    ]
  });
};
