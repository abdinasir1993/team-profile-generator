const Employee = require('./Employee');

const instance = new Employee({
  name: 'abdinasir warsame',
  id: '12',
  email: 'warsame@gmail.com',
});

describe('Employee', () => {
  it('it should be an Employee', () => {
    const expected = 'Employee';
    const actual = instance.getRole();
    expect(actual).toEqual(expected);
  });
  it('should return name of Employee', () => {
    const expected = 'abdinasir warsame';
    const actual = instance.getName();
    expect(actual).toEqual(expected);
  });
  it('should return email of ID', () => {
    const expected = '12';
    const actual = instance.getId();
    expect(actual).toEqual(expected);
  });
  it('should return email of Employee', () => {
    const expected = 'warsamegmail.com';
    const actual = instance.getEmail();
    expect(actual).toEqual(expected);
  });
});
