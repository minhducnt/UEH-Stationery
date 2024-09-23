const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sanpham', {
    MaSP: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    TenSP: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    Maloai: {
      type: DataTypes.STRING(2),
      allowNull: false,
      references: {
        model: 'loaisanpham',
        key: 'Maloai'
      }
    },
    Giagoc: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    Giaban: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    GiaKM: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    MaKM: {
      type: DataTypes.STRING(3),
      allowNull: true,
      references: {
        model: 'khuyenmai',
        key: 'MaKM'
      }
    },
    Mota: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    TinhtrangTK: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    HotTrend: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    BestSeller: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    IsClick: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    IsLike: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Hinhanh: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    Ngaycapnhat: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'sanpham',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MaSP" },
        ]
      },
      {
        name: "FK1_SP",
        using: "BTREE",
        fields: [
          { name: "Maloai" },
        ]
      },
      {
        name: "FK2_SP",
        using: "BTREE",
        fields: [
          { name: "MaKM" },
        ]
      },
    ]
  });
};
