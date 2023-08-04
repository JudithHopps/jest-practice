import Mypage from './Mypage';
import { render, screen } from '@testing-library/react';

test('유저가 없으면 로그인 문자와 버튼을 보여준다.', () => {
  render(<Mypage />);
  const textElement = screen.getByText(/로그인을 해주세요/);
  const buttonElement = screen.getByRole('button');

  expect(textElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveTextContent('로그인');
});

// `test('props가 잘못 전달되어도 로그인 문자와 버튼을 보여준다.', () => {
//   render(<Mypage user="Judith" />);
//   const textElement = screen.getByText(/로그인을 해주세요/);
//   const buttonElement = screen.getByRole('button');

//   expect(textElement).toBeInTheDocument();
//   expect(buttonElement).toBeInTheDocument();
//   expect(buttonElement).toHaveTextContent('로그인');
// });

// test('유저가 있으면 환영문구를 보여준다.', () => {
//   const user = { name: 'Judith' };
//   render(<Mypage user={user} />);
//   const textElement = screen.getByText(/Hello Judith/);
//   expect(textElement).toBeInTheDocument();
// });

// test('input 요소가 있다.', () => {
//   render(<Mypage />);

//   /* ----- input + textarea : textbox => 객체 전달 필요  ----- */

//   //   const inputElement = screen.getByRole('textbox', {
//   //     name: '자기소개', // label
//   //   });

//   // 같은 의미 : LabelText
//   //   const inputElement = screen.getByLabelText('자기소개', {
//   //     selector: 'textarea',
//   //   });

//   // 같은 의미 : value
//   const inputElement = screen.getByDisplayValue('introduce');
//   expect(inputElement).toBeInTheDocument();

//   const testDivElement = screen.getByTestId('test');
//   expect(testDivElement).toBeInTheDocument();
// });
