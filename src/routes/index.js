const express = require("express");

const authRouter = require("./auth");
const userRouter = require("./thanhvien");

const rootRouter = express.Router();

rootRouter.use("/auth", authRouter);
rootRouter.use("/user", userRouter);

module.exports = rootRouter;
