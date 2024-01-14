import { Request, Response, NextFunction } from "express";
import { signIn } from "../service/auth.service";

export class AuthController {
  signin(req: Request, res: Response, next: NextFunction) {
    return signIn(req, res, next);
  }
}
