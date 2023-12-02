const { expressjwt: jwt } = require("express-jwt");
const secret = process.env.SECRET_KEY;

function getTokenFromHeaders(req) {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    return req.headers.authorization.split(" ")[1];
  }
  return null;
}

const auth = {
  required: jwt({
    secret,
    algorithms: ["sha2", "RS256", "HS256"],
    userProperty: "payload",
    getToken: getTokenFromHeaders,
  }),
  optional: jwt({
    secret,
    algorithms: ["sha2", "RS256", "HS256"],
    userProperty: "payload",
    credentialsRequired: false,
    getToken: getTokenFromHeaders,
  }),
};

module.exports = auth;
