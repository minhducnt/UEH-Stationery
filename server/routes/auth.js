const express = require("express");

const {
  getUserByUsername,
  validateCreateUserSchema,
  checkUserExistsByUsername,
  createUser,
  updateUser,
  validateUpdateUserSchema,
  getUserByUsername,
} = require("../validations/thanhvien");

const {
  comparePassword,
  generateAccessToken,
  validateSignInSchema,
  hashPassword,
} = require("../validations/auth");

const ApiError = require("../utils/ApiError");
//const { authenticate } = require('../../middlewares/auth');
//const { catchRequestError } = require('../../middlewares/validator');

const authRouter = express.Router();

//đăng nhập
authRouter.post("/sign-in", validateSignInSchema(), async (req, res, next) => {
  const { TenDangNhap, MatKhau } = req.body;

  try {
    const user = await getUserByUsername(TenDangNhap);
    if (!user) {
      throw new ApiError(400, "Tên đăng nhập hoặc mật khẩu không hợp lệ");
    }

    const isMatch = comparePassword(MatKhau, user.MatKhau);
    if (!isMatch) {
      throw new ApiError(400, "Tên đăng nhập hoặc mật khẩu không hợp lệ");
    }

    const accessToken = generateAccessToken(user.MaTV);
    if (!accessToken) {
      throw new ApiError(
        500,
        "An error occurred while generating the access token"
      );
    }

    let redirectUrl;
    if (user.Role === "Admin") {
      redirectUrl = "/admin"; 
    } else {
      redirectUrl = "/"; 
    }

    res.json({
      status: "success",
      data: {
        user,
        accessToken,
      },
    });
  } catch (error) {
    next(error);
  }
});

//đăng ký
authRouter.post(
  "/sign-up",
  validateCreateUserSchema(),
  async (req, res, next) => {
    let { TenDangNhap, MatKhau, TenTV, Email, Diachi, Gioitinh, SDT } =
      req.body;

    try {
      const isExist = await checkUserExistsByUsername(TenDangNhap);
      if (isExist) {
        throw new ApiError(400, "Tên đăng nhập đã tồn tại");
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
      });

      if (!user) {
        throw new ApiError(500, "Có lỗi xảy ra khi đăng ký tài khoản");
      }

      await user.reload();

      res.status(201).json({
        status: "success",
        data: {
          user,
        },
      });
    } catch (error) {
      next(error);
    }
  }
);

//lấy thông tin đăng nhập
authRouter.get("/my-profile", (req, res, next) => {
  try {
    res.json({
      status: "success",
      data: {
        user: req.user,
      },
    });
  } catch (error) {
    next(error);
  }
});

//cập nhật thông tin
authRouter.put(
  "/update-profile",
  validateUpdateUserSchema(),
  async (req, res, next) => {
    const updates = {
      TenDangNhap: req.body.TenDangNhap,
      MatKhau: req.body.MatKhau,
      TenTV: req.body.TenTV,
      Email: req.body.Email,
      Diachi: req.body.Diachi,
      Gioitinh: req.body.Gioitinh,
      SDT: req.body.SDT,
    };
    const { user } = req;

    try {
      if (updates.TenDangNhap) {
        const isExist = await checkUserExistsByUsername(updates.TenDangNhap);
        
        if (user.TenDangNhap !== updates.TenDangNhap && isExist) {
          throw new ApiError(
            400,
            "Tên đăng nhập mới đã tồn tại"
          );
        }
      }

      if (updates.MatKhau) {
        if (comparePassword(updates.MatKhau, user.MatKhau)) {
          delete updates.MatKhau;
        } else {
          updates.MatKhau = hashPassword(updates.MatKhau);
        }
      }

      // kiểm tra tài khoản có phải Admin không
      if (
        updates.Role !== "Admin" ||
        (updates.Role === "Admin" && user.Role !== "Admin")
      ) {
        delete updates.Role;
      }

      const isUpdated = await updateUser(updates, user.MaTV);
      if (!isUpdated) {
        throw new ApiError(500, "Có lỗi xảy ra khi cập nhật thông tin");
      }

      await user.reload();

      res.json({
        status: "success",
        data: {
          user,
        },
      });
    } catch (error) {
      next(error);
    }
  }
);

authRouter.get("/", async (req, res, next) => {
  const { user } = req;

  try {
    const orders = await user.getOrders();

    if (!orders) {
      throw new ApiError(500, "Có lỗi xảy ra khi lấy thông tin đơn hàng");
    }

    res.json({
      status: "success",
      data: {
        user,
        orders,
      },
    });
  } catch (error) {
    next(error);
  }
});

module.exports = authRouter;
