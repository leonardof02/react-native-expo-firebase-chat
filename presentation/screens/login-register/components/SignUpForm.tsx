import React from "react";
import { useRouter } from "expo-router";

import { styles } from "./Forms.styles";

import { Text, View, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FirebaseAuthService } from "@/infrastructure/FirebaseAuthService";

import { UserRepository } from "@/infrastructure/UserRepository";
import SignUpFormSchema, { SignUpFormData } from "./SignUpForm.schema";
import { getFirebaseAuthErrorMessage } from "@/infrastructure/FirebaseErrors";
import Toast from "react-native-toast-message";

export default function LoginRegisterScreen() {
  const router = useRouter();

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(SignUpFormSchema),
  });

  async function onSubmit(data: SignUpFormData) {
    try {
      const user = await FirebaseAuthService.signUpWithEmailAndPassword(
        data.email,
        data.password
      );
      await UserRepository.createUser({
        uid: user.uid,
        name: data.name,
        email: data.email,
      });
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
      <Text>Name</Text>

      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Name"
            style={styles.textInput}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.name && <Text style={styles.error}>{errors.name.message}</Text>}
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
      <Toast />
    </React.Fragment>
  );
}
