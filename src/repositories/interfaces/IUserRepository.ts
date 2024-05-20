import { IUser } from "../../models/User";

export interface IUserRepository{
  createUser(userData: Partial<IUser>):Promise < IUser | null >
}