export type ForumData = ForumTopic[];

type ForumTopic = {
  id: string;
  title: string;
  content: string;
  updatedAt: string;
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
  updatedAt: string;
  topicId: number;
  user: User;
  likes?: Like[];
  exMessage?: Message | null;
};

type Like = {
  id: number;
  user: User;
};

export type NewTopic = {
  title: string;
  content: string;
  userId: number;
  userName: string;
  userAvatar?: string;
};

export type NewMessage = {
  topicId: number;
  exMessageId: number;
  content: string;
  userId: number;
  userName: string;
  userAvatar?: string;
};

export type NewLike = {
  messageId: number;
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
  messages: Message[] | undefined;
};

export type MessageProps = {
  message: Message;
};

export type FormTopicProps = {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
};

export type FormMessageProps = {
  topicId: number;
  exMessageId?: number;
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
};

export type FormReMessageProps = {
  topicId: number;
  exMessageId: number;
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
};

export type FormEmojiProps = {
  callback: (emoji: string) => void;
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
};
