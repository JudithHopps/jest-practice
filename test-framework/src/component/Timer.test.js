import Timer from './Timer';
import { render } from '@testing-library/react';

test('초 표시', () => {
  Date.now = jest.fn(() => 123456789);
  // 시간에 따라 달라지는 함수는 mock 함수를 이용하여 고정된 값으로 바꿔 준다.
  const view = render(<Timer />);
  expect(view).toMatchSnapshot();
});
