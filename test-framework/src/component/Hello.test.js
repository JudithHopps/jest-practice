import { render, screen } from '@testing-library/react';
import Hello from './Hello';

const user = {
  name: 'Judith',
  age: 20,
};

const user2 = {
  // name: 'Judith',
  age: 20,
};

test('props 전달 O : Hello 라는 글자가 포함되는가?', () => {
  render(<Hello user={user} />);
  const helloEl = screen.getByText(/Hello/i);
  expect(helloEl).toBeInTheDocument();
});

test('props 전달 X : Login 라는 글자가 포함되는가?', () => {
  render(<Hello />);
  // TypeError: Cannot read properties of undefined (reading 'name') -> optional chain
  const helloEl = screen.getByText(/Login/i);
  expect(helloEl).toBeInTheDocument();
});

test('snapshot : name 있음', () => {
  const view = render(<Hello user={user} />);
  expect(view).toMatchSnapshot();
});

test('snapshot : name 없음', () => {
  const view = render(<Hello user={user2} />);
  expect(view).toMatchSnapshot();
});
