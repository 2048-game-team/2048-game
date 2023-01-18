import { ForumData } from 'pages/forum/types';

export const mocForumData: ForumData = [
  {
    id: '1',
    title: 'Первая тема форума',
    content: 'Текст раскрывающий первую тему форума. '.repeat(10),
    date: '25.01.2022',
    author: {
      name: 'Ваня Иванов',
    },
    messages: [
      {
        id: '11',
        content: 'Первый комментарий',
        date: '27.01.2022',
        author: {
          name: 'Ваня Иванов',
        },
      },
      {
        id: '12',
        content: 'Второй комментарий',
        date: '28.01.2022',
        author: {
          name: 'Ваня Иванов',
        },
      },
      {
        id: '13',
        content: 'Новый комментарий',
        date: '28.01.2022',
        author: {
          name: 'Петр Евгеньевич',
          avatar:
            'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        },
      },
    ],
  },
  {
    id: '2',
    title: 'Вторая тема форума',
    content: 'Текст раскрывающий вторую тему форума',
    date: '24.01.2022',
    author: {
      name: 'Саша Александров',
      avatar:
        'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    },
  },
];
