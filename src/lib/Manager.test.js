const Manager = require('./Manager');

const instance = new Manager({
  name: 'abdinasir warsame',
  id: '12',
  email: 'warsame@email.com',
  officeNumber: '33',
});

describe('Manager', () => {
  it('it should be an Manager', () => {
    const expected = 'Manager';
    const actual = instance.getRole();

    expect(actual).toEqual(expected);
  });
  it('should return name of Employee', () => {
    const expected = 'abdinasir warsame';
    const actual = instance.getName();
    expect(actual).toEqual(expected);
  });
  it('should return email of ID', () => {
    const expected = '33';
    const actual = instance.getId();
    expect(actual).toEqual(expected);
  });
  it('should return email of Employee', () => {
    const expected = 'warsame@email.com';
    const actual = instance.getEmail();
    expect(actual).toEqual(expected);
  });
  it("should manager's number", () => {
    const expected = '33';
    const actual = instance.getOfficeNumber();
    expect(actual).toEqual(expected);
  });
});
