import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  username: {
    fontWeight: "bold",
    color: "#007AFF",
  },

  messageContainer: {
    width: "100%",
    marginVertical: 3,
    paddingHorizontal: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },

  messageFromMe: {
    justifyContent: "flex-end",
  },

  timestampText: {
    color: "#aaa",
    fontSize: 10,
  },

  messageBubbleContainer: {
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#eee",
    flexShrink: 1,
  },

  messageBubbleContainerFromMe: {
    backgroundColor: "#007AFF",
    color: "white",
    borderRadius: 5,
    padding: 10,
  },

  usernameFromMe: {
    color: "white",
    fontWeight: "bold",
  },
});
