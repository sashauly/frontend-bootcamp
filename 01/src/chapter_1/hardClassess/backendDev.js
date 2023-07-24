const Employee = require('../employee');

/*

- Backend Developer - Класс, который наследуется от класса Employee. Имеет новые св-ва:
- stack - Массив в котором указаны технологии, которыми владеет разработчик.
- developerSide - 'backend'
- projectQuantity - Число завершенных проектов.
- expandStack() - разработчик может увеличить стек технологий.

stack - массив строк
- developerSide - строка ('backend')
- projectQuantity - number
expandStack(newTech) - в кач-ве аргумента принимает строку
*/

module.exports = class BackendDeveloper extends Employee {
  developerSide = 'backend';

  constructor(
    _name,
    _grade,
    _hardSkills,
    _company,
    _stack,
    _developerSide,
    _projectQuantity,
  ) {
    super(_name, _grade, _hardSkills, _company);
    this.stack = _stack;
    this.projectQuantity = _projectQuantity;
  }

  expandStack(newTech) {
    this.stack.push(newTech);
  }
};
