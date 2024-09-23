const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chitietgiohang', {
    MaCTGH: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    MaGH: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'giohang',
        key: 'MaGH'
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
    SoLuong: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Thanhtien: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'chitietgiohang',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MaCTGH" },
        ]
      },
      {
        name: "FK1_CTGH",
        using: "BTREE",
        fields: [
          { name: "MaSP" },
        ]
      },
      {
        name: "FK2_CTGH",
        using: "BTREE",
        fields: [
          { name: "MaGH" },
        ]
      },
    ]
  });
};
