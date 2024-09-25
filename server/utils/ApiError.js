// Tạo class ApiError dựa trên Error

class ApiError extends Error {
  constructor(statusCode, message) {
    super(); //kế thừa thuộc tính của class Error
    this.statusCode = statusCode; //đặt giá trị cho statusCode
    this.message = message; //đặt giá trị cho message
  }
}

module.exports = ApiError;