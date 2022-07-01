const Employee = require('./Employee');

class engineer extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    this.role = 'engineer';
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return this.role;
  }
}
module.exports = engineer;
