import { ForumData } from 'pages/forum/types';

export const mocForumData: ForumData = [
  {
    id: '1',
    title: 'Первая тема форума',
    content: 'Текст раскрывающий первую тему форума. '.repeat(10),
    updatedAt: '25.01.2022',
    userName: 'Ваня Иванов',
    messages: [
      {
        id: '11',
        content: 'Первый комментарий',
        updatedAt: '27.01.2022',
        userName: 'Ваня Иванов',
      },
      {
        id: '12',
        content: 'Второй комментарий',
        updatedAt: '28.01.2022',
        userName: 'Ваня Иванов',
      },
      {
        id: '13',
        content: 'Новый комментарий',
        updatedAt: '28.01.2022',
        userName: 'Петр Евгеньевич',
        userAvatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      },
    ],
  },
  {
    id: '2',
    title: 'Вторая тема форума',
    content: 'Текст раскрывающий вторую тему форума',
    updatedAt: '24.01.2022',
    userName: 'Саша Александров',
    userAvatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
  },
];
