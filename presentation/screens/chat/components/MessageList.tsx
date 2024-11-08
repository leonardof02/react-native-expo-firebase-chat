import { ActivityIndicator, FlatList, View } from "react-native";
import useMessages from "../hooks/useMessages";
import MessageItem from "./MessageItem";

import { styles } from "./MessageList.styles";
import React, { useRef } from "react";
import ChatForm from "./ChatForm";
import { useAuthContext } from "../../../common/context/AuthContext";

export default function MessageList() {
  const messages = useMessages();
  const { isLoading } = useAuthContext();

  const ref = useRef<FlatList | null>(null);

  function handleMessageSend() {
    ref.current?.scrollToIndex({ animated: true, index: 0 });
  }

  return (
    <React.Fragment>
      {isLoading && <ActivityIndicator size={"large"} />}
      {!isLoading && (
        <React.Fragment>
          <FlatList
            inverted
            style={styles.chatList}
            data={messages}
            keyExtractor={(message, index) => message.id ?? index.toString()}
            renderItem={({ item: message }) => (
              <MessageItem message={message} />
            )}
            ref={ref}
          />
          <View style={{ height: 20 }} />
          <ChatForm onMessageSend={handleMessageSend} />
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
