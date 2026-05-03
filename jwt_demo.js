const jwt = require("jsonwebtoken");

const token = jwt.sign(
  { role: "student", id: 123 },
  "supersecret",
  { expiresIn: "30m" }
);

console.log(token);