const Employee = require('../employee');

/*

-Manager - Класс, который наследуется от класса Employee. Имеет новые св-ва:
- projectQuantity - Число завершенных проектов.

- checkMember(minQuantity) - менеджер проверяет,
удовлетворяет ли сотрудник условиям проекта.
Сотрудник, состоящий в другой компании не может работать над проектом другой компании.

projectQuantity - number
checkMember(minQuantity) - в качестве аргумента принимается строка ('L1'/'L2'/'L3'/'L4')
*/
module.exports = class Manager extends Employee {
  constructor(_name, _grade, _hardSkills, _company, _projectQuantity) {
    super(_name, _grade, _hardSkills, _company);
    this.projectQuantity = _projectQuantity;
  }

  checkMember(minQuantity) {
    if (minQuantity) return true;
    return false;
  }
};
