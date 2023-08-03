const fn = require('./테스트전후작업fn');

let num = 10;
beforeEach(() => {
  num = 0;
});
afterEach(() => {
  num = 0;
});

test('0 더하기 3은 3이야', () => {
  num = fn.add(num, 3);
  expect(num).toBe(3);
});

test('0 더하기 5은 5이야', () => {
  num = fn.add(num, 5);
  expect(num).toBe(5);
});

let user;
beforeAll(async () => {
  user = await fn.connectUserDb();
});
afterAll(() => {
  return fn.disconnectUserDb();
});

test('이름은 Mike', () => {
  expect(user.name).toBe('Mike'); //처음에 잘못된 이름도 통과
});

test('이름은 Mike', () => {
  expect(user.age).toBe(30);
});

test('이름은 Mike', () => {
  expect(user.gender).toBe('male');
});

describe('Car 관련 작업', () => {
  let car;

  beforeAll(async () => {
    car = await fn.connectCarDb();
  });
  afterAll(() => {
    return fn.disconnectCarDb();
  });

  test('이름은 z4', () => {
    expect(car.name).toBe('z4');
  });
  test('브랜드는 BMW', () => {
    expect(car.brand).toBe('BMW');
  });
  test('색상은 black', () => {
    expect(car.color).toBe('black');
  });
});
