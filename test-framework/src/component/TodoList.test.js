import { render, screen } from '@testing-library/react';
import TodoList from './TodoList';
import { rest } from 'msw';
import { server } from '../mock/server';

describe('TodoList', () => {
  test('TodoList 라는 제목이 있다.', () => {
    render(<TodoList />);
    const titleElement = screen.getByRole('heading', {
      name: 'TodoList',
    });
    // const titleElement = screen.getByText("TodoList")
    expect(titleElement).toBeInTheDocument();
  });

  test('에러가 났을 때 에러 메세지를 보여준다.', async () => {
    server.use(
      rest.get(
        'https://jsonplaceholder.typicode.com/todos',
        (req, res, ctx) => {
          return res(
            ctx.status(500) //500 : 서버 에러
            // ctx.json([
            //   {
            //     id: 1,
            //     title: '청소',
            //     completed: true,
            //   },
            //   {
            //     id: 2,
            //     title: '설거지',
            //     completed: false,
            //   },
            //   {
            //     id: 3,
            //     title: '빨래',
            //     completed: true,
            //   },
            // ])
          );
        }
      )
    );

    render(<TodoList />);
    const errorElement = await screen.findByText('에러 발생...');
    expect(errorElement).toBeInTheDocument();
  });
  test('리스트 3개가 잘 나온다.', async () => {
    render(<TodoList />);
    const listElement = await screen.findAllByRole('listitem');
    expect(listElement).toHaveLength(3);
  });
});
