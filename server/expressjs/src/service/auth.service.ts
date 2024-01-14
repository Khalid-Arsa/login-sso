import { Request, Response, NextFunction } from "express";

export async function signIn(req: Request, res: Response, next: NextFunction) {
  console.log("Signin");
}
