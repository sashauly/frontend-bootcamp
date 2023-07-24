const Employee = require('../employee');

/*

- Frontend Developer - Класс, который наследуется от класса Employee. Имеет новые св-ва:
- stack - Массив в котором указаны технологии, которыми владеет разработчик.
- developerSide - 'frontend'
- projectQuantity - Число завершенных проектов.
- expandStack() - разработчик может увеличить стек технологий.

stack - массив строк
- developerSide - строка ('frontend')
- projectQuantity - number
expandStack(newTech) - в кач-ве аргумента принимает строку
*/

module.exports = class FrontendDeveloper extends Employee {
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
    this.projectQuantity = _stack;
    this.developerSide = _developerSide;
    this.projectQuntity = _projectQuantity;
  }

  expandStack(newTech) {}
};
