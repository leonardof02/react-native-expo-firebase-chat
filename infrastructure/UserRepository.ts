import { IUserRepository } from "@/domain/interfaces/IUserRepository";

import { store } from "./FirebaseServices";
import { setDoc, collection, doc, getDoc } from "firebase/firestore";
import { User } from "../domain/entities/User";

const usersCollection = collection(store, "users");

export const UserRepository: IUserRepository = {
  async getUserById(id: string) {
    const docRef = doc(usersCollection, id);
    const response = await getDoc(docRef);
    const data = response.data();
    if (!data) return null;
    return {
      uid: data.uid,
      name: data.name,
      email: data.email,
    };
  },

  async createUser(user: User) {
    const newUserRef = doc(store, "users", user.uid);
    await setDoc(newUserRef, user);
    console.info("User created successfully");
  },
};
