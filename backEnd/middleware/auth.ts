import { Request, Response, NextFunction } from "express";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    next();
  } catch (error) {
    return res.status(403).json({ error: "Forbidden" });
  }
};

export default authMiddleware;
