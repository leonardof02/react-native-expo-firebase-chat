import { User } from "@/domain/entities/User";
import { auth } from "@/infrastructure/FirebaseServices";
import { UserRepository } from "@/infrastructure/UserRepository";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

export function useUserData() {
  const [userData, setUserData] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [user] = useAuthState(auth);

  useEffect(() => {
    setIsLoading(true);
    async function fetchUserData() {
      if (!user) return;
      const userData = await UserRepository.getUserById(user.uid);
      setUserData(userData);
      setIsLoading(false);
    }
    fetchUserData();
  }, [user]);

  return { isLoading, userData };
}
