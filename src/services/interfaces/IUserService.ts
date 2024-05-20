import { IUser } from "../../models/User";

export interface IUserService {
  createUser(userData: Partial<IUser>): Promise<IUser | null>;
  getAllUsers(): Promise<IUser[]>;
  updateUser(userId: string, userData: Partial<IUser>): Promise<IUser | null>;
}