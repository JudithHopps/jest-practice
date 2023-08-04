import JoinButton from './JoinButton';
import { render, screen } from '@testing-library/react';

// test('19세 이하면 버튼을 클릭할 수 없고, 안내 문구는 빨간색이다.', () => {
//   render(<JoinButton age={10} />);
//   const buttonElement = screen.getByRole('button');
//   const textElement = screen.getByRole('heading');

//   expect(buttonElement).toBeInTheDocument();
//   expect(buttonElement).toBeInTheDocument();
//   expect(buttonElement).toBeDisabled();
//   expect(textElement).toHaveStyle({
//     color: 'red',
//   });
// });

// test('성인이면 버튼을 클릭할 수 있고, 안내 문구는 파란색이다.', () => {
//   render(<JoinButton age={20} />);
//   const buttonElement = screen.getByRole('button');
//   const textElement = screen.getByRole('heading');

//   expect(buttonElement).toBeInTheDocument();
//   expect(buttonElement).toBeInTheDocument();
//   expect(buttonElement).toBeEnabled();
//   expect(textElement).toHaveStyle({
//     color: 'blue',
//   });
// });

//screen.getByRole('heading');
//h1 ~ h6 : heading
//button : button
//a : link
// checkbox : checkbox
// radio : radio
// select : combobox

test('getByRole : 1개만, 중복 => error  => level 추가', () => {
  render(<JoinButton age={10} />);
  const textElement = screen.getByRole('heading', {
    level: 2, // 다른 태그 2번째,
  });
  expect(textElement).toBeInTheDocument();
});
