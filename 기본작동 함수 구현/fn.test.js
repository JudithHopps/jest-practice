const fn = require('./fn');

// 설명은 명확하게!
test('1은 1이야', () => {
  expect(1).toBe(1);
  // Matcher
});

test('2 더하기 3은 5야', () => {
  expect(fn.add(2, 3)).toBe(5);
});

test('2 더하기 3은 5야', () => {
  expect(fn.add(2, 3)).toEqual(5);
});

test('3 더하기 3은 5가 아니야', () => {
  expect(fn.add(3, 3)).not.toBe(5);
});

test('이름과 나이를 전달받아서 객체를 반환해줘', () => {
  expect(fn.makeUser('Mike', 30)).not.toBe({
    // false : 객체나 배열은 값을 돌면서 확인 필요 => equal 사용
    name: 'Mike',
    age: 30,
  });
});

test('이름과 나이를 전달받아서 객체를 반환해줘', () => {
  expect(fn.makeUser('Mike', 30)).toEqual({
    // 객체에 다른 요소가 있어도 true
    name: 'Mike',
    age: 30,
  });
});

test('이름과 나이를 전달받아서 객체를 반환해줘', () => {
  expect(fn.makeUser('Mike', 30)).not.toStrictEqual({
    // 보다 엄격하게 확인
    name: 'Mike',
    age: 30,
  });
});

// toBeNull , toBeUndefined , toBeDefined

test('null 확인', () => {
  expect(null).toBeNull();
});

test('undefined 확인', () => {
  expect(undefined).toBeUndefined();
});

test('defined 확인', () => {
  expect(undefined).not.toBeDefined();
});

// T / F 확인
test('true 확인', () => {
  expect(true).toBeTruthy();
});

test('false 확인', () => {
  expect(false).toBeFalsy();
});

//숫자 대소 비교
test('예약 인원은 5인 미만만 가능합니다.', () => {
  const people = 4;
  expect(people).toBeLessThan(5);
});

test('ID는 10자 이하여야 합니다.', () => {
  const id = 'ABCDEF';
  expect(id.length).toBeLessThanOrEqual(10);
});

test('비밀번호는 8자 이상으로 설정해야 합니다. ', () => {
  const password = 'asdfgwercdfe';
  expect(password.length).toBeGreaterThanOrEqual(8);
});

test('100kg 초과 인원만 탑승 가능합니다. ', () => {
  expect(101).toBeGreaterThan(100);
});

// 부동소수점 : toBeCloseTo
test('0.1 + 0.3 !== 0.4 ', () => {
  expect(0.1 + 0.2).not.toBe(0.3); //0.30000000000000004
  expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3);
});

// 정규 표현식
test('"hello"에 h가 있나요?', () => {
  expect('hello').toMatch(/H/i); // /i : 대소문자 비교 X
});

// 배열 : toContain
test('유저 리스트에 Mike가 있나요?', () => {
  const user = 'Mike';
  const userList = ['Ace', 'Nice', 'Mike'];
  expect(userList).toContain(user);
  //배열에 원소가 있어?
});

// 에러 확인
test('이거 에러 나요?', () => {
  expect(() => fn.throwErr()).toThrow();
  expect(() => fn.throwErr()).toThrow('XX');
});
