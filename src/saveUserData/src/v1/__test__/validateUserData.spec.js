const request = require("supertest");
const app = require("../../../app");
describe("User data", () => {
  it("return 200 when the user data is valid", (done) => {
    request(app)
      .post("/")
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
