import { FirebaseAuthService } from "@/infrastructure/FirebaseAuthService";
import AuthContextProvider from "@/presentation/common/context/AuthContext";
import { router, Stack } from "expo-router";
import { Button } from "react-native";

export default function RootLayout() {
  return (
    <AuthContextProvider>
      <Stack
        initialRouteName="chat"
        screenOptions={{
          title: "Login or Register",
          statusBarColor: "#18181b",
          headerTintColor: "#eee",
          headerStyle: {
            backgroundColor: "#18181b",
          },
        }}
      >
        <Stack.Screen name="index" options={{ title: "Sign Up or Sign In" }} />
        <Stack.Screen
          name="chat/index"
          options={{
            title: "Chat",
            headerRight: () => (
              <Button
                title="SignOut"
                color={"#cc0000"}
                onPress={async () => {
                  await FirebaseAuthService.signOut();
                  router.back();
                }}
              />
            ),
          }}
        />
      </Stack>
    </AuthContextProvider>
  );
}
