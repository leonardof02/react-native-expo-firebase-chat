import React from "react";
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableNativeFeedback,
} from "react-native";

import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";

export default function LoginRegisterScreen() {
  const [isSignUpMode, setSignUp] = React.useState<boolean>(false);

  return (
    <KeyboardAvoidingView style={styles.fullContainer}>
      <View style={styles.formContainer}>
        <View style={styles.credentialsModeContainer}>
          <TouchableNativeFeedback onPress={() => setSignUp(true)}>
            <View
              style={[
                styles.credentialsModeItem,
                isSignUpMode && styles.credentialsModeItemActive,
              ]}
            >
              <Text style={[isSignUpMode && styles.activeText,]}>Sign Up</Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={() => setSignUp(false)}>
            <View
              style={[
                styles.credentialsModeItem,
                !isSignUpMode && styles.credentialsModeItemActive,
              ]}
            >
              <Text style={[!isSignUpMode && styles.activeText,]}>Sign In</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
        {isSignUpMode && <SignUpForm />}
        {!isSignUpMode && <SignInForm />}
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  fullContainer: {
    backgroundColor: "#18181b",
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },

  formContainer: {
    display: "flex",
    backgroundColor: "white",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 10,
    width: "90%",
    padding: 20,
    borderRadius: 10,
    borderColor: "#eee",
    borderWidth: 1,
  },

  credentialsModeContainer: {
    backgroundColor: "#eee",
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },

  credentialsModeItem: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    padding: 10,
  },

  credentialsModeItemActive: {
    backgroundColor: "#007AFF",
    color: "white",
    borderRadius: 10,
  },

  activeText: {
    color: "white",
  },
});
