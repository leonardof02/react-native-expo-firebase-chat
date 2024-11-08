import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  chatFormContainer: {
    backgroundColor: "#222",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderColor: "#333",
    borderTopWidth: 1,
  },

  messageInput: {
    backgroundColor: "white",
    borderColor: "#eee",
    borderWidth: 1,
    padding: 10,
    maxWidth: "100%",
    borderRadius: 10,
    flexGrow: 1,
  },

  submitButton: {
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4500ff",
    borderRadius: 10,
    flexShrink: 1,
  },

  submitText: {
    fontWeight: "black",
    color: "white",
    fontSize: 15,
  },
});
