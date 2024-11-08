import { User } from "firebase/auth";

export interface IAuthService {
  signInWithEmailAndPassword: (
    email: string,
    password: string
  ) => Promise<User>;
  signUpWithEmailAndPassword: (
    email: string,
    password: string
  ) => Promise<User>;
  signOut: () => Promise<void>;
}
