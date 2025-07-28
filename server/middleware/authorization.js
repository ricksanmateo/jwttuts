import jwt from "jsonwebtoken";
import "dotenv/config";

const authorization = async (req, res, next) => {
  try {
    const jwtToken = req.header("token");

    if (!jwtToken) {
      return res.status(403).json("Not Authorized");
    }

    const payload = jwt.verify(jwtToken, process.env.jwtSecret);

    req.user = payload.user;
  } catch (error) {
    console.error(error.message);
    return res.status(403).json("Not Authorized");
  }
};

export default authorization;
