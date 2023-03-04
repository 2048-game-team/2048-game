import { ForumData } from 'pages/forum/types';

export const mocForumData: ForumData = [
  {
    "id": '1',
    // "createdAt": "2023-03-04T13:15:56.494Z",
    "updatedAt": new Date("2023-03-04T13:15:56.494Z"),
    "title": "Первая тема",
    "content": "Текст раскрывающий первую тему форума.",
    // "userId": 1234,
    "user": {
      "id": 1234,
      "name": "vasya",
      "avatar": "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
    },
    "messages": [
      {
        "id": 1,
        // "createdAt": "2023-03-04T13:20:27.295Z",
        "updatedAt": new Date("2023-03-04T13:20:27.295Z"),
        "content": "Первый мессадж",
        // "userId": 1234,
        // "topicId": 1,
        // "exMessageId": null,
        "user": {
          "id": 1234,
          "name": "vasya",
          "avatar": "avatar"
        },
        "likes": [
          {
            "id": 1,
            // "userId": 134,
            // "messageId": 1,
            "user": {
              "id": 134,
              "name": "vasya",
              "avatar": "avatar"
            }
          },
          {
            "id": 2,
            // "userId": 134,
            // "messageId": 1,
            "user": {
              "id": 135,
              "name": "vadya",
              "avatar": "avatar"
            }
          }
        ],
        "exMessage": null
      },
      {
        "id": 2,
        // "createdAt": "2023-03-04T13:20:48.368Z",
        "updatedAt": new Date("2023-03-04T13:20:48.368Z"),
        "content": "Первый мессадж",
        // "userId": 1234,
        // "topicId": 1,
        // "exMessageId": 1,
        "user": {
          "id": 1234,
          "name": "vasya",
          "avatar": "avatar"
        },
        "likes": [],
        "exMessage": {
          "id": 1,
          // "createdAt": "2023-03-04T13:20:27.295Z",
          "updatedAt": new Date("2023-03-04T13:20:27.295Z"),
          "content": "Первый экс-мессадж",
          // "userId": 1234,
          // "topicId": 1,
          // "exMessageId": null
          "user": {
            "id": 1234,
            "name": "vasya",
            "avatar": "avatar"
          },
        }
      }
    ]
  }
]

/*
export const mocForumData: ForumData = [
  {
    id: '111',
    title: 'Первая тема форума',
    content: 'Текст раскрывающий первую тему форума. '.repeat(10),
    updatedAt: '2022-12-23T19:54:35.808Z',
    user: {
      id: 123,
      name: 'Ваня Иванов'
    },
    messages: [
      {
        id: 11,
        content: 'Первый комментарий',
        updatedAt: '2023-03-03T19:54:35.808Z',
        user: {
          id: 124,
          name: 'Ваня Иванов'
        },
        likes: [
          {
            id: 32,
            user: {
              id: 123,
              name: 'Ваня Иванов'
            }
          },
          {
            id: 33,
            user: {
              id: 125,
              name: 'Ваня Петров'
            }
          }
        ]
      },
      {
        id: 12,
        content: 'Второй комментарий',
        updatedAt: '2023-03-03T19:54:35.808Z',
        user: {
          id: 124,
          name: 'Ваня Иванов'
        },
      },
      {
        id: 13,
        content: 'Новый комментарий',
        updatedAt: '2023-03-03T19:54:35.808Z',
        user: {
          id: 125,
          name: 'Петр Евгеньевич',
          avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
        },
        exMessage: {
          id: 12,
          content: 'Второй комментарий',
          updatedAt: '2023-03-03T19:54:35.808Z',
          user: {
            id: 124,
            name: 'Ваня Иванов'
          },
        }
      },
    ],
  },
  {
    id: '222',
    title: 'Вторая тема форума',
    content: 'Текст раскрывающий вторую тему форума',
    updatedAt: '2023-03-03T19:54:35.808Z',
    user: {
      id: 125,
      name: 'Саша Александров',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
    },
  },
];
*/
