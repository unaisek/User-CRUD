import { IUser } from "../models/User";
import UserRepository from "../repositories/userRepository";
import { IUserService } from "./interfaces/IUserService";

export default class UserService implements IUserService {
  private _userRepository: UserRepository;

  constructor() {
    this._userRepository = new UserRepository();
  }
  async createUser(userData: Partial<IUser>): Promise<IUser | null> {
    try {
      return await this._userRepository.createUser(userData);
    } catch (error) {
      throw error;
    }
  }
  async findUserByEmail(email: string): Promise<IUser | null> {
    try {
      return await this._userRepository.findUserByEmail(email);
    } catch (error) {
      throw error;
    }
  }

  async getAllUsers(): Promise<IUser[]> {
    try {
      return await this._userRepository.getAllUsers();
    } catch (error) {
      throw error;
    }
  }

  async updateUser(
    userId: string,
    userData: Partial<IUser>
  ): Promise<IUser | null> {
    try {
      return await this._userRepository.updateUser(userId, userData);
    } catch (error) {
      throw error;
    }
  }
} 