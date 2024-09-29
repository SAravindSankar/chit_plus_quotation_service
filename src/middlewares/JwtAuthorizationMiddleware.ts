import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import properties from "../config/Properties";

const secretKey = properties.JWT_SECRET || "CHIT_PLUS"; // Use environment variable for secret key
console.log("secretKey:", secretKey);
//Sample: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.ycJ8-YkyQBgsWUh8GxwN_v0IOMgd9aD9bN2PBOW8n90

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
  const token = splitAuthHeader[1]; // Extract token from Authorization header
  console.log("token:", token);

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    console.log("decoded:", decoded);
    req.user = decoded; // Attach decoded token to request object
    next();
  } catch (err) {
    res.status(400).json({ message: "Invalid token." });
  }
};
