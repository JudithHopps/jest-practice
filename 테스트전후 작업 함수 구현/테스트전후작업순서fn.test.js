const fn = require('./테스트전후작업fn');

beforeAll(() => console.log('밖 bef oreAll'));
beforeEach(() => console.log('밖 beforeEach'));
afterAll(() => console.log('밖 afterAll'));
afterEach(() => console.log('밖 afterEach'));

test('0+1 = 1', () => {
  console.log('밖 test 1');
  expect(fn.add(0, 1)).toBe(1);
});

test.skip('0+1 = 1', () => {
  console.log('밖 test 2');
  expect(fn.add(0, 1)).toBe(1);
});

describe('describe 내부', () => {
  beforeAll(() => console.log('안 beforeAll'));
  beforeEach(() => console.log('안 beforeEach'));
  afterAll(() => console.log('안 afterAll'));
  afterEach(() => console.log('안 afterEach'));

  test('0+1 = 1', () => {
    console.log('안 test 1');
    expect(fn.add(0, 1)).toBe(1);
  });

  test('0+1 = 1', () => {
    console.log('안 test 2');
    expect(fn.add(0, 1)).toBe(1);
  });
});

//test.only : only만
//test.skip : 건너뛰고
