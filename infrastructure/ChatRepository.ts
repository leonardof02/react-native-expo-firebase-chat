import { addDoc, collection, getDocs } from "firebase/firestore";
import { Message } from "../domain/entities/Message";
import { IMessageRepository } from "../domain/interfaces/IMessageRepository";
import { store } from "./FirebaseServices";

const messagesCollection = collection(store, "messages");

const ChatRepository: IMessageRepository = {
  getMessages: async (): Promise<Message[]> => {
    const query = await getDocs(messagesCollection);
    const messages: Message[] = query.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        text: data.text,
        createdAt: new Date(data.createdAt.seconds * 1000),
        user: {
          uid: data.user.uid,
          name: data.user.name,
          email: data.user.email,
        },
      };
    });
    return messages;
  },

  addMessage: async (message: Message) => {
    await addDoc(messagesCollection, message);
  },
};

export default ChatRepository;
