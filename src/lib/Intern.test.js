const Intern = require('./Intern');

const instance = new Intern({
  name: 'abdinasir warsame',
  id: '1234',
  email: 'warsame@gmail.com',
  school: 'cambridge',
});

describe('Intern', () => {
  it('it should be an Intern', () => {
    const expected = 'Intern';
    const actual = instance.getRole();

    expect(actual).toEqual(expected);
  });
  it('should return name of Employee', () => {
    const expected = 'Abdinasir warsame';
    const actual = instance.getName();
    expect(actual).toEqual(expected);
  });
  it('should return email of ID', () => {
    const expected = '1234';
    const actual = instance.getId();
    expect(actual).toEqual(expected);
  });
  it('should return email of Employee', () => {
    const expected = 'warsame@gmail.com';
    const actual = instance.getEmail();
    expect(actual).toEqual(expected);
  });
  it('should return inters school', () => {
    const expected = 'cambridge';
    const actual = instance.getSchool();
    expect(actual).toEqual(expected);
  });
});
