const jwt = require("jsonwebtoken");

async function authToken(req, res, next) {
  try {
    const token = req.header("Authorization");
    console.log("Token is", token);
    if (!token) {
      const error = new Error(message);
      error.status = 401;
      error.message = "please login!!";
      next(error);
    }

    let verifydata = jwt.verify(
      token,
      process.env.JWT_SECRET_KEY
      // function (err, decoded) {
      //   if (err) {
      //     console.log("authentication error", err);
      //   }
      //   req.userId = decoded?._id;
      //   next();
      // }
    );
    console.log(verifydata);
    req.userId = verifydata.userId;
    req.email = verifydata.email;
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = authToken;
