import { IUser } from "../../models/User";
import { Request, Response } from "express";

export interface IUserController {
  createUser(req:Request, res:Response):void;
}