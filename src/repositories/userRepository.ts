import User, { IUser } from "../models/User";
import { IUserRepository } from "./interfaces/IUserRepository";

export default class UserRepository implements IUserRepository {
  async createUser(userData: Partial<IUser>): Promise<IUser | null> {
    return await User.create(userData);
  }

  async getAllUsers(): Promise<IUser[]> {
    try {
      const userData = await User.find();
      return userData;
    } catch (error) {
      throw error;
    }
  }
  async findUserByEmail(email: string): Promise<IUser | null> {
    return await User.findOne({ email }).exec();
  }

  async updateUser(
    userId: string,
    userData: Partial<IUser>
  ): Promise<IUser | null> {
    try {
      const result = await User.findByIdAndUpdate(userId, userData, {
        new: true,
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}