import jwt from "jsonwebtoken";
import "dotenv/config";

export function jwtGenerator(user_id) {
  const payload = {
    user: user_id,
  };

  return jwt.sign(payload, process.env.jwtSecret, { expiresIn: "1d" });
}
