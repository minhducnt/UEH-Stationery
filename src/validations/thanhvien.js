const { Op } = require("sequelize");
const { body } = require("express-validator");
const { User } = require("../models");
const ApiError = require('../utils/ApiError');

const validateCreateUserSchema = () => {
  return [
    body("TenTV")
      .trim()
      .notEmpty()
      .withMessage("Nhập họ tên")
      .isLength({ max: 50 })
      .withMessage("Họ tên không được vượt quá 50 kí tự"),
    body("Email")
      .trim()
      .notEmpty()
      .withMessage("Nhập họ tên")
      .isEmail()
      .withMessage("Email không hợp lệ")
      .isLength({ max: 20 })
      .withMessage("Email không được vượt quá 50 kí tự"),
    body("Diachi")
      .trim()
      .notEmpty()
      .withMessage("Nhập địa chỉ")
      .isLength({ max: 150 })
      .withMessage("Địa chỉ không được vượt quá 150 kí tự"),
    body("Gioitinh")
      .notEmpty()
      .withMessage("Nhập giới tính")
      .isIn("Nam", "Nữ")
      .withMessage("Giới tính không hợp lệ"),
    body("SDT")
      .trim()
      .notEmpty()
      .withMessage("Nhập số điện thoại")
      .isLength({ max: 10 })
      .withMessage("Số điện thoại không được vượt quá 10 kí tự"),
  ];
};

const validateUpdateUserSchema = () => {
  return [
    body("TenTV")
      .trim()
      .notEmpty()
      .withMessage("Nhập họ tên")
      .isLength({ max: 50 })
      .withMessage("Họ tên không được vượt quá 50 kí tự"),
    body("Email")
      .trim()
      .notEmpty()
      .withMessage("Nhập họ tên")
      .isEmail()
      .withMessage("Email không hợp lệ")
      .isLength({ max: 20 })
      .withMessage("Email không được vượt quá 50 kí tự"),
    body("Diachi")
      .trim()
      .notEmpty()
      .withMessage("Nhập địa chỉ")
      .isLength({ max: 150 })
      .withMessage("Địa chỉ không được vượt quá 150 kí tự"),
    body("Gioitinh")
      .notEmpty()
      .withMessage("Nhập giới tính")
      .isIn("Nam", "Nữ")
      .withMessage("Giới tính không hợp lệ"),
    body("SDT")
      .trim()
      .notEmpty()
      .withMessage("Nhập số điện thoại")
      .isLength({ max: 10 })
      .withMessage("Số điện thoại không được vượt quá 10 kí tự"),
  ];
};

const checkUserExistsByUsername = async (TenDangNhap) => {
	try {
		const count = await User.count({
			where: {
				TenDangNhap,
			},
		});

		return count > 0;
	} catch (error) {
		console.log(error);
		throw new ApiError(500, 'Internal server error');
	}
};

const checkUserExistsById = async (MaTV) => {
	try {
		const count = await User.count({
			where: {
				MaTV,
			},
		});

		return count > 0;
	} catch (error) {
		console.log(error);
		throw new ApiError(500, 'Internal server error');
	}
};

const createUser = async (data) => {
	try {
		const user = await User.create(data);

		return user;
	} catch (error) {
		console.log(error);
		throw new ApiError(500, 'Internal server error');
	}
};

const updateUser = async (data, MaTV) => {
	try {
		const isUpdated = await User.update(data, {
			where: {
				MaTV,
			},
		});

		return isUpdated[0] > 0;
	} catch (error) {
		console.log(error);
		throw new ApiError(500, 'Internal server error');
	}
};

const getUserByUsername = async (TenDangNhap) => {
  try {
    const user = await User.findOne({
      where: {
        TenDangNhap,
      },
    });

    return user;
  } catch (error) {
    console.log(error);
    throw new ApiError(500, "Internal server error");
  }
};

const getUsers = async (TenDangNhap) => {
	const condition = TenDangNhap ? { TenDangNhap: { [Op.like]: `%${TenDangNhap}%` } } : null;

	try {
		const users = await User.findAll({
			where: condition,
		});

		return users;
	} catch (error) {
		console.log(error);
		throw new ApiError(500, 'Internal server error');
	}
};

const getUserById = async (MaTV) => {
	try {
		const user = await User.findByPk(MaTV);

		return user;
	} catch (error) {
		console.log(error);
		throw new ApiError(500, 'Internal server error');
	}
};

const deleteUserById = async (MaTV) => {
	try {
		const isDeleted = await User.destroy({
			where: {
				MaTV,
			},
		});

		return isDeleted > 0;
	} catch (error) {
		console.log(error);
		throw new ApiError(500, 'Internal server error');
	}
};

module.exports = {
  validateCreateUserSchema,
  validateUpdateUserSchema,
  checkUserExistsByUsername,
  checkUserExistsById,
  createUser,
  getUserByUsername,
  updateUser,
  getUsers,
  getUserById,
  deleteUserById
};
