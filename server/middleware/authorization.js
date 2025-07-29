import jwt from "jsonwebtoken";
import "dotenv/config";

const authorization = async (req, res, next) => {
  try {
    const jwtToken = req.header("token");

    if (!jwtToken) {
      return res.status(403).json("Not Authorized");
    }

    const token = jwt.verify(jwtToken, process.env.jwtSecret);

    req.user = token.user;
    next();
  } catch (error) {
    console.error(error.message);
    return res.status(401).json({ msg: "Token is not valid" });
  }
};

export default authorization;
