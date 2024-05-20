import { IUser } from "../models/User";
import UserRepository from "../repositories/userRepository";
import { IUserService } from "./interfaces/IUserService";

export default class UserService implements IUserService {

  private _userRepository:UserRepository;

  constructor() {
    this._userRepository = new UserRepository()
  }
  async createUser(userData: Partial<IUser>): Promise<IUser | null> {
    try {
      return await this._userRepository.createUser(userData)
      
    } catch (error) {
      throw error
    }
  }
} 