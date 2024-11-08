import React from "react";
import {
  ActivityIndicator,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import { styles } from "./ChatForm.styles";
import { useAuthContext } from "../../../common/context/AuthContext";
import ChatRepository from "@/infrastructure/ChatRepository";

import { v4 as uuidv4 } from "uuid";

type Props = {
  onMessageSend: () => void;
};

export default function ChatForm({ onMessageSend }: Props) {
  const { user } = useAuthContext();

  const [messageToSend, setMessageToSend] = React.useState<string>("");

  async function sendMessage() {
    console.log(user);
    const messageText = messageToSend.trim();
    if (!user || messageText === "") return;

    try {
      setMessageToSend("");
      await ChatRepository.addMessage({
        id: uuidv4(),
        text: messageToSend,
        createdAt: new Date(),
        user: {
          uid: user.uid,
          email: user?.email ?? "",
          name: user?.name ?? "",
        },
      });
      onMessageSend();
    } catch (error) {
      console.error(error);
      setMessageToSend(messageText);
    }
  }

  return (
    <React.Fragment>
      <View style={styles.chatFormContainer}>
        <TextInput
          placeholder="Type your message"
          style={styles.messageInput}
          value={messageToSend}
          onChangeText={setMessageToSend}
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={async () => sendMessage()}
        >
          <Text style={styles.submitText}>Send</Text>
        </TouchableOpacity>
      </View>
    </React.Fragment>
  );
}
