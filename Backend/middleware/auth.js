 // middleware/auth.js
import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  const token = req.header("authorization");

  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  const key = process.env.JWT_SECRET_KEY;
  if (!key) {
    return res.status(500).json({ msg: "Internal server error" });
  }

  try {
    const decoded = jwt.verify(token, key);
    req.user = { _id: decoded.userid };  
    next();
  } catch (err) {
    return res.status(401).json({ msg: "Token is not valid" });
  }
};
