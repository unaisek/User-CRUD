import { IUser } from "../../models/User";
import { NextFunction, Request, Response } from "express";

export interface IUserController {
  createUser(req: Request, res: Response, next: NextFunction): void;
  getAllUsers(req: Request, res: Response, next: NextFunction): void;
  updateUser(req: Request, res: Response, next: NextFunction): void;
}