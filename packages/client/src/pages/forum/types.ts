export type ForumData = ForumTopic[];

type ForumTopic = {
  id: string;
  title: string;
  content: string;
  updatedAt: string;
  userName: string;
  userAvatar?: string;
  likes?: number;
  messages?: Message[];
};

type Message = {
  id: string;
  content: string;
  updatedAt: string;
  userName: string;
  userAvatar?: string;
  likes?: number;
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
