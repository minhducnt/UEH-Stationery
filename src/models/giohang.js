const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('giohang', {
    MaGH: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    MaTV: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    Ngaytao: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    Tong: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    TinhTrang: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'giohang',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MaGH" },
        ]
      },
    ]
  });
};
