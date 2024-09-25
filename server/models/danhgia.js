const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('danhgia', {
    MaDG: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    MaTV: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'thanhvien',
        key: 'MaTV'
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
    DiemDG: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Binhluan: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'danhgia',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MaDG" },
        ]
      },
      {
        name: "FK1_DG",
        using: "BTREE",
        fields: [
          { name: "MaTV" },
        ]
      },
      {
        name: "FK2_DG",
        using: "BTREE",
        fields: [
          { name: "MaSP" },
        ]
      },
    ]
  });
};
