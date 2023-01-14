export type ForumData = ForumTheme[];

type ForumTheme = {
  id: string;
  title: string;
  content: string;
  date: string;
  author: Author;
  messages?: Message[];
};

type Author = {
  name: string;
  avatar?: string;
};

type Message = {
  id: string;
  date: string;
  content: string;
  author: Author;
};

export type ThemeHeaderProps = {
  title: string;
  date: string;
  author: Author;
  active: boolean;
};

export type MessagesProps = {
  messages: Message[] | undefined;
};

export type MessageProps = {
  message: Message;
};

export type FormThemeProps = {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
};

export type Theme = {
  title: string;
  content: string;
};

export type FormMessageProps = {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
  content?: string;
};
