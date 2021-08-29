const request = require("supertest");
const app = require("../app");
describe("user registration", () => {
  it("return 200 when the registration is OK", (done) => {
    request(app)
      .post("/register")
      .send({
        fullName: "Full Name Test",
        email: "test@email.com",
        password: "password",
      })
      .then((response) => {
        expect(response.status).toBe(200);
        done();
      });
  });
});
