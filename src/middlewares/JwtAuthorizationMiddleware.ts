import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import properties from "../config/Properties";

const secretKey = properties.JWT_SECRET;
if (!secretKey) {
  throw new Error("JWT secret key is not defined in environment variables.");
}

interface CustomRequest extends Request {
  user?: any;
}

export const jwtAuthorization = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader =
    req.headers["authorization"] || req.headers["Authorization"];

  if (!authHeader) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  const splitAuthHeader = authHeader.toString().split(" ");
  if (splitAuthHeader[0] !== "Bearer" || !splitAuthHeader[1]) {
    return res
      .status(401)
      .json({ message: "Access denied. Invalid token format." });
  }

  const token = splitAuthHeader[1];

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded; // Attach decoded token to request object
    next();
  } catch (err) {
    res.status(400).json({ message: "Invalid token." });
  }
};
