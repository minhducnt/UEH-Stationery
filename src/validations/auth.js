const { body } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//kiểm tra thông tin đăng nhập
const validateSignInSchema = () => {
  return [
  body("TenDangNhap")
    .trim()
    .notEmpty()
    .withMessage("Nhập tên đăng nhập")
    .isLength({ max: 20 })
    .withMessage("Tên đăng nhập không được vượt quá 20 kí tự"),
  body("MatKhau")
    .trim()
    .notEmpty()
    .withMessage("Nhập mật khẩu")
    .isLength({ max: 255 })
    .withMessage("Mật khẩu không được vượt quá 255 kí tự"),
]};

//mã hóa mật khẩu
const hashPassword = (MatKhau) => {
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(MatKhau, salt);

  return hashedPassword;
};

//so sánh mật khẩu thường và mật khẩu đã mã hóa
const comparePassword = (MatKhau, hashedPassword) => {
  const isMatch = bcrypt.compareSync(MatKhau, hashedPassword);

  return isMatch;
};

const generateAccessToken = (MaTK) => {
  const token = jwt.sign({ MaTK }, {
    expiresIn: +authConfig.tokenExpiration,
  });

  return token;
};

module.exports = {
  validateSignInSchema,
  hashPassword,
  comparePassword,
  generateAccessToken
};

/*connection.query(
  "SELECT TenDangNhap FROM taikhoan WHERE TenDangNhap = ?",
  [username],
  async (error, results) => {
    if (error) {
      console.log(error);
    }
    if (results.length > 0) {
      console.log("Tên đăng nhập đã tồn tại");
    } else if (password !== passwordConfirm) {
      console.log("Mật khẩu không khớp");
    }

    let hashedPassword = await bcrypt.hash(password, 8);
    console.log(hashedPassword);

    connection.query(
      "INSERT INTO taikhoan SET ? ",
      { TenDangNhap: username, MatKhau: hashedPassword },
      (error, results) => {
        if (error) {
          console.log(error);
        } else {
          console.log("Đăng ký tài khoản thành công");
        }
      }
    );
  }
);*/
