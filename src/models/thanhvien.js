const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('thanhvien', {
    MaTV: {
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
    TenTV: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Email: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    Diachi: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    Gioitinh: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    SDT: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    Hang: {
      type: DataTypes.STRING(4),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'thanhvien',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MaTV" },
        ]
      },
      {
        name: "FK1_TV",
        using: "BTREE",
        fields: [
          { name: "MaTK" },
        ]
      },
    ]
  });
};
