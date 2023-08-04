import { render, screen } from '@testing-library/react';
import UserList from './UserList';

describe('UserList test', () => {
  const users = ['Tom', 'Jane', 'Mike'];

  test('ul이 있다.', () => {
    render(<UserList users={users} />);
    const ulElement = screen.getByRole('list');
    expect(ulElement).toBeInTheDocument();
  });

  test('li는 3개가 있다.', () => {
    render(<UserList users={users} />);
    const liElement = screen.getAllByRole('listitem'); // 없으면 에러
    // expect(liElement).toBeInTheDocument(); // error : value must be an HTMLElement or an SVGElement. (array 형식)
    expect(liElement).toHaveLength(users.length); //toHaveLength(3)
  });

  test('textbox는 없다.', () => {
    render(<UserList users={[]} />);
    // const textElement = screen.getAllByRole('textbox'); // 없어서 에러
    const textElement = screen.queryAllByRole('textbox');
    expect(textElement).toHaveLength(0); //toHaveLength(3)
  });

  // promise : findByRole : 기본 1초
  test('잠시 후 제목이 나타납니다.', async () => {
    render(<UserList users={users} />);
    const titleElement = await screen.findByRole(
      'heading',
      {
        name: 'UserList',
      },
      {
        timeout: 2000,
      }
    );
    expect(titleElement).toBeInTheDocument();
  });
});
