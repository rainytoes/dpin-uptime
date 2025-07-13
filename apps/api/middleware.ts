import type { Request, Response, NextFunction } from "express";

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    // Authentication logic
    //For api endpoints which need to be authorized before being used
    // Otherwise we have to add authentication in each endpoint separately
    // Q. What is middleware?
    // Q. Why added type?

    const authHeader = req.headers['authorization'];

    req.userId = "1";
    next();
}