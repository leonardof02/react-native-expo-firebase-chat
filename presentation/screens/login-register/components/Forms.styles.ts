import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  textInput: {
    borderColor: "#eee",
    borderWidth: 1,
    padding: 10,
    width: "100%",
    maxWidth: "100%",
  },

  submitButton: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    padding: 15,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222",
    borderRadius: 10,
  },

  submitText: {
    color: "white",
    fontSize: 15,
  },

  error: {
    color: "red",
  },

  submittingOpacity: {
    opacity: 0.5,
  },
});
