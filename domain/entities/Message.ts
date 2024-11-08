import { User } from "./User";
import { v4 as uuidv4 } from "uuid";

export type Message = {
  id?: string;
  text: string;
  createdAt: Date;
  user: User;
};

export function createMessage(message: Message): Message {
  return {
    ...message,
    id: uuidv4(),
  };
}
