// // mock function

const mockFn = jest.fn();

mockFn();
mockFn(1);

test('mock함수는 call인자를 모두 가지고 있습니다.', () => {
  console.log(mockFn.mock.calls);
  expect(1).toBe(1);
});

test('함수는 2번 호출됩니다.', () => {
  expect(mockFn.mock.calls.length).toBe(2);
});

test('2번째로 호출된 함수에 전달된 첫번째 인수는 1이다.', () => {
  expect(mockFn.mock.calls[1][0]).toBe(1);
});

const mockFn2 = jest.fn();

const forEachAdd1 = (arr) => {
  arr.forEach((v) => mockFn2(v + 1));
};

test('mock2함수는 call인자를 모두 가지고 있습니다.', () => {
  console.log(mockFn2.mock.calls);
  expect(1).toBe(1);
});

forEachAdd1([1, 2, 3, 4, 5]);

test('함수는 5번 호출됩니다.', () => {
  expect(mockFn2.mock.calls.length).toBe(5);
});

test('전달된 값은 2,3,4,5,6 입니다.', () => {
  expect(mockFn2.mock.calls[0][0]).toBe(2);
  expect(mockFn2.mock.calls[1][0]).toBe(3);
  expect(mockFn2.mock.calls[2][0]).toBe(4);
  expect(mockFn2.mock.calls[3][0]).toBe(5);
  expect(mockFn2.mock.calls[4][0]).toBe(6);
});

const mockFn3 = jest.fn((num) => num + 1);

mockFn3(10);
mockFn3(20);
mockFn3(30);

test('10에서 1 증가한 값이 반환된다', () => {
  console.log(mockFn3.mock.results);
  //   [
  //         { type: 'return', value: 11 },
  //         { type: 'return', value: 21 },
  //         { type: 'return', value: 31 }
  //       ]
  expect(mockFn3.mock.results[0].value).toBe(11);
});
test('20에서 1 증가한 값이 반환된다', () => {
  expect(mockFn3.mock.results[1].value).toBe(21);
});
test('30에서 1 증가한 값이 반환된다', () => {
  expect(mockFn3.mock.results[2].value).toBe(31);
});

const mockFn4 = jest.fn();

mockFn4
  .mockReturnValueOnce(1)
  .mockReturnValueOnce(0)
  .mockReturnValueOnce(1)
  .mockReturnValueOnce(0)
  .mockReturnValue(1);

test('mockFn return값 지정', () => {
  console.log(mockFn4.mock.calls);
  console.log('mockFn4', mockFn4.mock.results);
  expect('3').toBe('3');
});

const results = [1, 2, 3, 4, 5].filter((v) => mockFn4(v));

test('홀수는 1,3,5', () => {
  expect(results).toStrictEqual([1, 3, 5]);
});

const mockFn5 = jest.fn();
mockFn5.mockResolvedValue({ name: 'Mike' });

test('받아온 이름은 Mike', () => {
  mockFn5().then((res) => {
    expect(res.name).toBe('Mike');
  });
});

const fn = require('./mock');

// test('유저를 만든다', () => {
//   const user = fn.createUser('Mike');
//   expect(user.name).toBe('Mike');
// });

//mocking module
jest.mock('./mock');
fn.createUser.mockReturnValue({ name: 'Judith' });

test('mock 함수로 유저를 만든다', () => {
  const user = fn.createUser('Judith');
  expect(user.name).toBe('Judith');
});

const mockFn6 = jest.fn();

mockFn6();
mockFn6(1, 2);
mockFn6(3, 4, 5);
mockFn6(10);

test('한번 이상 호출?', () => {
  expect(mockFn6).toBeCalled();
});

test('정확한 호출 개수', () => {
  expect(mockFn6).toBeCalledTimes(4);
});

test('인수 확인', () => {
  expect(mockFn6).toBeCalledWith(3, 4, 5);
});

test('마지막 함수의 인수 확인', () => {
  expect(mockFn6).lastCalledWith(10);
});
