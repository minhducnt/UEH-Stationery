const Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('donhang', {
    MaHD: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    Trigia: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    NgayHD: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    MaTT: {
      type: DataTypes.STRING(3),
      allowNull: true,
      references: {
        model: 'thanhtoan',
        key: 'MaTT'
      }
    },
    MaTV: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'thanhvien',
        key: 'MaTV'
      }
    },
    MaKM: {
      type: DataTypes.STRING(3),
      allowNull: true,
      references: {
        model: 'khuyenmai',
        key: 'MaKM'
      }
    },
    Trangthai: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'donhang',
    timestamps: false,
    indexes: [{
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{
          name: "MaHD"
        }, ]
      },
      {
        name: "FK1_DH",
        using: "BTREE",
        fields: [{
          name: "MaTT"
        }, ]
      },
      {
        name: "FK2_DH",
        using: "BTREE",
        fields: [{
          name: "MaTV"
        }, ]
      },
      {
        name: "FK3_DH",
        using: "BTREE",
        fields: [{
          name: "MaKM"
        }, ]
      },
    ]
  });
};