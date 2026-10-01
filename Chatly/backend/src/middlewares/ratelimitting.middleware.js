import jwt from "jsonwebtoken";

const ratelimiting= (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token is not found",
      });
    }

    const verifyToken = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    req.user = verifyToken;

    next();
  } catch (error) {
    console.log("Auth Middleware Error:", error);
    console.log(error);
    console.log("kuch ni ")

    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};

export default ratelimiting;