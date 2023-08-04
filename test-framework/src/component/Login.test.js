import Login from './Login';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Login test', () => {
  test('처음에는 Login 버튼이 있다.', () => {
    render(<Login />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveTextContent('Login');
  });

  const user = userEvent.setup();
  test('한 번 클릭하면 Logout으로 변한다.', async () => {
    render(<Login />);
    const buttonElement = screen.getByRole('button');

    await user.click(buttonElement);
    expect(buttonElement).toHaveTextContent('Logout');
  });

  test('tab, space, enter 동작', async () => {
    render(<Login />);
    const buttonElement = screen.getByRole('button');
    //tab, space, enter
    await user.tab();
    await user.keyboard(' ');
    await user.keyboard('{Enter}');
    expect(buttonElement).toHaveTextContent('Login');
  });
});
