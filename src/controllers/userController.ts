import { IUser } from "../models/User";
import UserService from "../services/userService";
import { IUserController } from "./interfaces/IUserControlles";
import { Request, Response } from "express";

export default class UserController implements IUserController {
  private _userService:UserService
  constructor() {
    this._userService = new UserService()
  }

  async createUser(req: Request, res: Response){
    try {

      const { name, email, address, mobile , gender } = req.body;
      const data = { name, email, address, mobile, gender };

      const userData = await this._userService.createUser(data);
      if(userData){
        res.status(200).json({
          userData
        })
      }
    } catch (error) {
      throw error
    }
  }
}