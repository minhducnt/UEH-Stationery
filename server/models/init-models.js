var DataTypes = require("sequelize").DataTypes;

//import model files
var _admin = require("./admin");
var _chitietdonhang = require("./chitietdonhang");
var _chitietgiohang = require("./chitietgiohang");
var _danhgia = require("./danhgia");
var _donhang = require("./donhang");
var _giohang = require("./giohang");
var _khuyenmai = require("./khuyenmai");
var _loaisanpham = require("./loaisanpham");
var _role = require("./role");
var _sanpham = require("./sanpham");
var _taikhoan = require("./taikhoan");
var _thanhtoan = require("./thanhtoan");
var _thanhvien = require("./thanhvien");

//initialize models
function initModels(sequelize) {
  var admin = _admin(sequelize, DataTypes);
  var chitietdonhang = _chitietdonhang(sequelize, DataTypes);
  var chitietgiohang = _chitietgiohang(sequelize, DataTypes);
  var danhgia = _danhgia(sequelize, DataTypes);
  var donhang = _donhang(sequelize, DataTypes);
  var giohang = _giohang(sequelize, DataTypes);
  var khuyenmai = _khuyenmai(sequelize, DataTypes);
  var loaisanpham = _loaisanpham(sequelize, DataTypes);
  var role = _role(sequelize, DataTypes);
  var sanpham = _sanpham(sequelize, DataTypes);
  var taikhoan = _taikhoan(sequelize, DataTypes);
  var thanhtoan = _thanhtoan(sequelize, DataTypes);
  var thanhvien = _thanhvien(sequelize, DataTypes);

  chitietdonhang.belongsTo(donhang, {
    as: "MaHD_donhang",
    foreignKey: "MaHD"
  });
  donhang.hasMany(chitietdonhang, {
    as: "chitietdonhangs",
    foreignKey: "MaHD"
  });
  chitietgiohang.belongsTo(giohang, {
    as: "MaGH_giohang",
    foreignKey: "MaGH"
  });
  giohang.hasMany(chitietgiohang, {
    as: "chitietgiohangs",
    foreignKey: "MaGH"
  });
  donhang.belongsTo(khuyenmai, {
    as: "MaKM_khuyenmai",
    foreignKey: "MaKM"
  });
  khuyenmai.hasMany(donhang, {
    as: "donhangs",
    foreignKey: "MaKM"
  });
  sanpham.belongsTo(khuyenmai, {
    as: "MaKM_khuyenmai",
    foreignKey: "MaKM"
  });
  khuyenmai.hasMany(sanpham, {
    as: "sanphams",
    foreignKey: "MaKM"
  });
  sanpham.belongsTo(loaisanpham, {
    as: "Maloai_loaisanpham",
    foreignKey: "Maloai"
  });
  loaisanpham.hasMany(sanpham, {
    as: "sanphams",
    foreignKey: "Maloai"
  });
  taikhoan.belongsTo(role, {
    as: "Role",
    foreignKey: "RoleID"
  });
  role.hasMany(taikhoan, {
    as: "taikhoans",
    foreignKey: "RoleID"
  });
  chitietdonhang.belongsTo(sanpham, {
    as: "MaSP_sanpham",
    foreignKey: "MaSP"
  });
  sanpham.hasMany(chitietdonhang, {
    as: "chitietdonhangs",
    foreignKey: "MaSP"
  });
  chitietgiohang.belongsTo(sanpham, {
    as: "MaSP_sanpham",
    foreignKey: "MaSP"
  });
  sanpham.hasMany(chitietgiohang, {
    as: "chitietgiohangs",
    foreignKey: "MaSP"
  });
  danhgia.belongsTo(sanpham, {
    as: "MaSP_sanpham",
    foreignKey: "MaSP"
  });
  sanpham.hasMany(danhgia, {
    as: "danhgia",
    foreignKey: "MaSP"
  });
  admin.belongsTo(taikhoan, {
    as: "MaTK_taikhoan",
    foreignKey: "MaTK"
  });
  taikhoan.hasMany(admin, {
    as: "admins",
    foreignKey: "MaTK"
  });
  thanhvien.belongsTo(taikhoan, {
    as: "MaTK_taikhoan",
    foreignKey: "MaTK"
  });
  taikhoan.hasMany(thanhvien, {
    as: "thanhviens",
    foreignKey: "MaTK"
  });
  donhang.belongsTo(thanhtoan, {
    as: "MaTT_thanhtoan",
    foreignKey: "MaTT"
  });
  thanhtoan.hasMany(donhang, {
    as: "donhangs",
    foreignKey: "MaTT"
  });
  danhgia.belongsTo(thanhvien, {
    as: "MaTV_thanhvien",
    foreignKey: "MaTV"
  });
  thanhvien.hasMany(danhgia, {
    as: "danhgia",
    foreignKey: "MaTV"
  });
  donhang.belongsTo(thanhvien, {
    as: "MaTV_thanhvien",
    foreignKey: "MaTV"
  });
  thanhvien.hasMany(donhang, {
    as: "donhangs",
    foreignKey: "MaTV"
  });

  return {
    admin,
    chitietdonhang,
    chitietgiohang,
    danhgia,
    donhang,
    giohang,
    khuyenmai,
    loaisanpham,
    role,
    sanpham,
    taikhoan,
    thanhtoan,
    thanhvien,
  };
}

module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;