import React from "react";
import { useRouter } from "expo-router";

import { styles } from "./Forms.styles";

import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FirebaseAuthService } from "@/infrastructure/FirebaseAuthService";

import SignInFormSchema, { SignInFormData } from "./SignInForm.schema";
import Toast from "react-native-toast-message";
import { getFirebaseAuthErrorMessage } from "@/infrastructure/FirebaseErrors";

export default function LoginRegisterScreen() {
  const router = useRouter();

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(SignInFormSchema),
  });

  async function onSubmit(data: SignInFormData) {
    try {
      const user = await FirebaseAuthService.signInWithEmailAndPassword(
        data.email,
        data.password
      );
      router.push("/chat");
    } catch (error: any) {
      console.error(error);
      Toast.show({
        position: "top",
        type: "error",
        text1: getFirebaseAuthErrorMessage(error.code),
      });
    }
  }

  return (
    <React.Fragment>
      <Text>Email</Text>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Email"
            style={styles.textInput}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}
      <Text>Password</Text>
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Password"
            style={styles.textInput}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.password && (
        <Text style={styles.error}>{errors.password.message}</Text>
      )}
      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        style={{ width: "100%" }}
      >
        <View
          style={[
            styles.submitButton,
            isSubmitting && styles.submittingOpacity,
          ]}
        >
          {isSubmitting && <ActivityIndicator size="small" color="white" />}
          <Text style={styles.submitText}>Submit</Text>
        </View>
        <Toast />
      </TouchableOpacity>
    </React.Fragment>
  );
}
