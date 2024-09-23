const Sequelize = require('sequelize');


module.exports = function(sequelize, DataTypes) {
  return sequelize.define('taikhoan', { //tạo model tên 'taikhoan'
    MaTK: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    TenDangNhap: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    MatKhau: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    RoleID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'role',
        key: 'RoleID'
      }
    }
  }, {
    sequelize,
    tableName: 'taikhoan',
    timestamps: false,
    indexes: [
      { //tạo
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MaTK" },
        ]
      },
      {
        name: "FK1_TK",
        using: "BTREE",
        fields: [
          { name: "RoleID" },
        ]
      },
    ]
  });
};
