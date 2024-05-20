import { IUser } from "../models/User";
import UserService from "../services/userService";
import { IUserController } from "./interfaces/IUserControlles";
import { NextFunction, Request, Response } from "express";

export default class UserController implements IUserController {
  private _userService: UserService;
  constructor() {
    this._userService = new UserService();
  }

  async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, email, address, mobile, gender } = req.body;
      const existingUser = await this._userService.findUserByEmail(email);
      if (existingUser) {
        res.status(400).json({
          data: existingUser,
          message: "User already registerd",
        });
      }
      const data = { name, email, address, mobile, gender };
      const userData = await this._userService.createUser(data);
      if (userData) {
        res.status(200).json({
          userData,
        });
      }
    } catch (error) {
      next(error);
    }
  }

  async getAllUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const userData = await this._userService.getAllUsers();

      res.status(200).json({
        data: userData,
      });
    } catch (error) {
      next(error);
    }
  }

  async updateUser(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.params.id;
      const { name, email, address, mobile, gender } = req.body;
      const userData = { name, email, address, mobile, gender };
      const data = await this._userService.updateUser(userId, userData);

      res.status(200).json({
        data,
      });
    } catch (error) {
      next(error)
    }
  }
}