const express = require("express");
const {
  validateCreateUserSchema,
  validateUpdateUserSchema,
  checkUserExistsByUsername,
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUserById,
} = require("../../src/validations/thanhvien");
const { hashPassword } = require("../../src/validations/auth");
//const { validatePagingQueries } = require("../../services/pagination");
const ApiError = require("../../src/utils/ApiError");
//const { authenticate } = require("../../middlewares/auth");
//const { catchRequestError } = require("../../middlewares/validator");

const userRouter = express.Router();

userRouter.post("/", validateCreateUserSchema(), async (req, res, next) => {
  let {
    TenDangNhap,
    MatKhau,
    TenTV,
    Email,
    Diachi,
    Gioitinh,
    SDT,
    Hang,
    Role,
  } = req.body;

  // check if logged in user is admin
  if (Role !== "Admin" || (Role === "Admin" && req.user.Role !== "Admin")) {
    Role = "Thành viên";
  }

  try {
    const isExist = await checkUserExistsByUsername(TenDangNhap);
    if (isExist) {
      throw new ApiError(400, "Người dùng đã tồn tại");
    }

    const hashedPassword = hashPassword(MatKhau);

    const user = await createUser({
      TenDangNhap,
      MatKhau: hashedPassword,
      TenTV,
      Email,
      Diachi,
      Gioitinh,
      SDT,
      Hang,
      Role,
    });

    if (!user) {
      throw new ApiError(500, "Có lỗi xảy ra khi tạo tài khoản");
    }

    res.status(201).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (error) {
    next(error);
  }
});

userRouter.get("/all", async (req, res, next) => {
  const { TenDangNhap } = req.query;

  try {
    const users = await getUsers(TenDangNhap);
    if (!users) {
      throw new ApiError(500, "Có lỗi xảy ra khi lấy thông tin tài khoản");
    }

    res.json({
      status: "success",
      data: {
        users,
      },
    });
  } catch (error) {
    next(error);
  }
});

userRouter.get("/:MaTV", async (req, res, next) => {
  const { MaTV } = req.params;

  try {
    const user = await getUserById(MaTV);

    if (!user) {
      throw new ApiError(404, "Tài khoản không tồn tại");
    }

    res.json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (error) {
    next(error);
  }
});

userRouter.put("/:MaTV", validateUpdateUserSchema(), async (req, res, next) => {
  const { MaTV } = req.params;
  const updates = {
    TenDangNhap: req.body.TenDangNhap,
    MatKhau: req.body.MatKhau,
    TenTV: req.body.TenTV,
    Email: req.body.Email,
    Diachi: req.body.Diachi,
    Gioitinh: req.body.Gioitinh,
    SDT: req.body.SDT,
    Hang: req.body.Hang,
    Role: req.body.Role,
  };

  try {
    const user = await getUserById(MaTV);
    if (!user) {
      throw new ApiError(404, "Tài khoản không tồn tại");
    }

    if (req.user.Role === "Thành viên" && user.Role === "Admin") {
      throw new ApiError(
        403,
        "Bạn không có quyền cập nhật thông tin của Admin"
      );
    }

    if (
      req.user.Role === "Thành viên" &&
      user.Role === "Thành viên" &&
      updates.Role === "Admin"
    ) {
      throw new ApiError(
        403,
        "Bạn không có quyền cập nhật thành viên này thành Admin"
      );
    }

    if (updates.TenDangNhap) {
      const isExist = await checkUserExistsByUsername(updates.TenDangNhap);

      if (user.TenDangNhap !== updates.TenDangNhap && isExist) {
        throw new ApiError(400, "Tên đăng nhập mới đã tồn tại");
      }
    } else {
      delete updates.TenDangNhap;
    }

    if (!updates.MatKhau) {
      delete updates.MatKhau;
    } else {
      updates.MatKhau = hashPassword(updates.MatKhau);
    }

    const isUpdated = await updateUser(updates, MaTV);
    if (!isUpdated) {
    }
    throw new ApiError(500, "Có lỗi xảy ra khi cập nhật thông tin tài khoản");

  } catch (error) {
    next(error);
  }
});

userRouter.delete("/:MaTV", async (req, res, next) => {
  const { MaTV } = req.params;

  try {
    const user = await getUserById(MaTV);
    if (!user) {
      throw new ApiError(404, "Tài khoản không tồn tại");
    }

    if (req.user.MaTV === user.MaTV) {
      throw new ApiError(
        400,
        "Bạn không thể tự xóa tài khoản của mình"
      );
    }

    if (req.user.Role === "Thành viên" && user.Role === "Admin") {
      throw new ApiError(403, "Bạn không có quyền xóa tài khoản này");
    }

    const isDeleted = await deleteUserById(MaTV);
    if (!isDeleted) {
      throw new ApiError(500, "Có lỗi xảy ra khi xóa tài khoản này");
    }

    res.json({
      status: "success",
      message: "Xóa tài khoản thành công",
    });
  } catch (error) {
    next(error);
  }
});

module.exports = userRouter;
