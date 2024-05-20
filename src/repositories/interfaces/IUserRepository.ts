import { IUser } from "../../models/User";

export interface IUserRepository {
  createUser(userData: Partial<IUser>): Promise<IUser | null>;
  getAllUsers(): Promise<IUser[]>;
  updateUser(userId: string, userData: Partial<IUser>): Promise<IUser | null>;
  findUserByEmail(email: string): Promise<IUser | null>;
}