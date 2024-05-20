import { IUser } from "../../models/User";

export interface IUserService {
  createUser(userData: Partial<IUser>): Promise<IUser | null>;
  getAllUsers(): Promise<IUser[]>;
  findUserByEmail(email: string): Promise<IUser | null>;
  updateUser(userId: string, userData: Partial<IUser>): Promise<IUser | null>;
}