const Engineer = require('./Engineer');

const instance = new Engineer({
  name: 'abdinasir warsame',
  id: '12',
  email: 'warsame@email.com',
  githubUsername: 'warsame123',
});

describe('Engineer', () => {
  it('it should be an Engineer', () => {
    const expected = 'Engineer';
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
    const expected = 'warsame@gmail.com';
    const actual = instance.getEmail();
    expect(actual).toEqual(expected);
  });
  it('should return github username', () => {
    const expected = 'warsame123';
    const actual = instance.getGithubUsername();
    expect(actual).toEqual(expected);
  });
});
