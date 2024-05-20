import User, { IUser } from "../models/User";
import { IUserRepository } from "./interfaces/IUserRepository";

export default class UserRepository implements IUserRepository {
  async  createUser(userData: Partial<IUser>): Promise<IUser | null> {
    return await User.create(userData)
  }
}