import { IAuthService } from "@/domain/interfaces/IAuthService";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";

import { auth } from "./FirebaseServices";

export const FirebaseAuthService: IAuthService = {
  async signInWithEmailAndPassword(email: string, password: string) {
    const res = await signInWithEmailAndPassword(auth, email, password);
    return res.user;
  },

  async signUpWithEmailAndPassword(email: string, password: string) {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    return res.user;
  },

  async signOut() {
    await signOut(auth);
  },
};
