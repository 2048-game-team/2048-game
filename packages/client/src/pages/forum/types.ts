export type ForumData = ForumTopic[];

type ForumTopic = {
  id: string;
  title: string;
  content: string;
  updatedAt: Date;
  user: User;
  messages?: Message[];
};

type User = {
  id: number;
  name: string;
  avatar?: string;
};

type Message = {
  id: number;
  content: string;
  updatedAt: Date;
  user: User;
  likes?: Like[];
  exMessage?: Message | null;
};

// type ExMessage = {
//   id: number;
//   content: string;
//   updatedAt: Date;
//   user: User;
// }

type Like = {
  id: number;
  user: User;
};

export type NewMessage = {
  topicId: number;
  content: string;
  userId: number;
  userName: string;
  userAvatar?: string;
};

export type NewTopic = {
  title: string;
  content: string;
  userId: number;
  userName: string;
  userAvatar?: string;
};

export type TopicHeaderProps = {
  title: string;
  date: string;
  authorName: string;
  authorAvatar?: string;
  active: boolean;
};

export type MessagesProps = {
  topicId: number;
  messages: Message[] | undefined;
};

export type MessageProps = {
  topicId: number;
  message: Message;
};

export type FormTopicProps = {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
};

export type FormMessageProps = {
  topicId: number;
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
  content?: string;
};
