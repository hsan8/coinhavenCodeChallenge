module.exports = class orderService {
  static async checking(req) {
    try {
      return req.body;
    } catch (error) {
      console.log(error);
    }
  }
};
