import { User } from "../entities/User";

export interface IUserRepository {
  getUserById(id: string): Promise<User | null>;
  createUser(user: User): Promise<void>;
}
