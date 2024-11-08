import { Message } from "@/domain/entities/Message";
import { store } from "@/infrastructure/FirebaseServices";
import { collection, limit, orderBy, query } from "firebase/firestore";
import { useMemo } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";

export default function useMessages(count: number = 25) {
  const getMessagesQuery = query(
    collection(store, "messages"),
    orderBy("createdAt", "desc"),
    limit(count)
  );

  const [messagesData] = useCollectionData(getMessagesQuery, {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  const messages: Message[] = useMemo(() => {
    if (!messagesData) return [];
    return messagesData.map((doc) => {
      return {
        id: doc.id,
        text: doc.text,
        createdAt: new Date(doc.createdAt.seconds * 1000),
        user: {
          uid: doc.user.uid,
          name: doc.user.name,
          email: doc.user.email,
        },
      };
    });
  }, [messagesData]);

  return messages;
}
