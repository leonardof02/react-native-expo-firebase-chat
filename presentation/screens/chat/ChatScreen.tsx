import React, { useEffect } from "react";

import { KeyboardAvoidingView } from "react-native";

import "react-native-get-random-values";
import MessageList from "./components/MessageList";
import { useAuthContext } from "../../common/context/AuthContext";
import { useRouter } from "expo-router";

export default function ChatScreen() {
  const { user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!user) {
        router.back();
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, [user, router]);

  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        alignItems: "center",
        paddingVertical: 10,
        justifyContent: "center",
        height: "100%",
        backgroundColor: "#18181b",
      }}
    >
      <MessageList />
    </KeyboardAvoidingView>
  );
}
