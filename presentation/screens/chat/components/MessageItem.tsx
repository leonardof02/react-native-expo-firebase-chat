import { Message } from "@/domain/entities/Message";
import { StyleSheet, Text, View } from "react-native";
import { useAuthContext } from "../../../common/context/AuthContext";
import { styles } from "./MessageItem.styles";

type Props = {
  message: Message;
};

export default function MessageItem({ message }: Props) {
  const { user } = useAuthContext();

  return (
    <View
      style={[
        styles.messageContainer,
        user?.uid === message.user.uid && styles.messageFromMe,
      ]}
      key={message.id}
    >
      <View
        style={[
          styles.messageBubbleContainer,
          user?.uid === message.user.uid && styles.messageBubbleContainerFromMe,
        ]}
      >
        <Text
          style={[
            styles.username,
            user?.uid === message.user.uid && styles.usernameFromMe,
          ]}
        >
          {message.user.name}
        </Text>
        <Text>{message.text}</Text>
        <Text style={styles.timestampText}>{message.createdAt.toLocaleString()}</Text>
      </View>
    </View>
  );
}
