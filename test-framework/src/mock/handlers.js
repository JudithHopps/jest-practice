import { rest } from 'msw';
import 'whatwg-fetch';

export const handlers = [
  // Match a GET request to a third-party server.
  rest.get('https://jsonplaceholder.typicode.com/todos', (req, res, ctx) => {
    return res(
      ctx.status(200), //500 : 서버 에러
      ctx.json([
        {
          id: 1,
          title: '청소',
          completed: true,
        },
        {
          id: 2,
          title: '설거지',
          completed: false,
        },
        {
          id: 3,
          title: '빨래',
          completed: true,
        },
      ])
    );
  }),
];
