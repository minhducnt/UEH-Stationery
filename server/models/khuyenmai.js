const Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('khuyenmai', {
    MaKM: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    TenCT: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    DieuKien: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PhamtramKM: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    NgayBD: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    NgayKT: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'khuyenmai',
    timestamps: false,
    indexes: [{
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [{
        name: "MaKM"
      }, ]
    }, ]
  });
};