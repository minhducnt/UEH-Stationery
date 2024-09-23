const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('thanhtoan', {
    MaTT: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    Thanhtien: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Phivanchuyen: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Pttt: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    TinhtrangTT: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'thanhtoan',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MaTT" },
        ]
      },
    ]
  });
};
