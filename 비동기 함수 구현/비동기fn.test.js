const fn = require('./비동기fn');

test('0+3 은 3이야', () => {
  expect(fn.add(0, 3)).toBe(3);
});

test('3초 후에 받아온 이름은 Mike', () => {
  function callback(name) {
    expect(name).toBe('Mike');
  }
  fn.getName(callback);
});

test('3초 후에 받아온 이름은 Tom', () => {
  function callback(name) {
    expect(name).toBe('Tom');
  }
  fn.getName(callback);
});

test('done : 3초 후에 받아온 이름은 Mike', (done) => {
  function callback(name) {
    expect(name).toBe('Mike');
    done(); // 생략시 timeOut 에러
  }
  fn.getName(callback);
});

test('done : 3초 후에 받아온 이름은 Tom', (done) => {
  function callback(name) {
    expect(name).toBe('Tom');
    done();
  }
  fn.getName(callback);
});

test('done : 3초 후에 받아온 이름은 Mike', (done) => {
  function callback(name) {
    try {
      expect(name).toBe('Mike');
      done();
    } catch (error) {
      done();
    }
  }
  fn.getName(callback);
});

// promise && return
test('3초 후에 받아오는 나이는 30', () => {
  fn.getAge().then((age) => {
    expect(age).toBe(31); // 처음에는 통과 : []
  });
});

test('return : 3초 후에 받아오는 나이는 30', () => {
  return fn.getAge().then((age) => {
    expect(age).toBe(30); // 통과 : []
  });
});

//resolves, rejects
test('return : 3초 후에 받아오는 나이는 30', () => {
  return expect(fn.getAge()).resolves.toBe(30);
});

//error
test('return : 1초 후에 Error 발생', () => {
  return expect(fn.getError()).rejects.toMatch('Error');
});

// async , await
test('async : 3초 후에 받아온 이름은 Mike', async () => {
  const age = await fn.getAge();
  expect(age).toBe(30);
});

test('async : 3초 후에 받아온 이름은 Mike', async () => {
  await expect(fn.getAge()).resolves.toBe(30);
});
