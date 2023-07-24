/*

- Project - класс описывающий проект компании.
На проекте может быть только 1 менеджер!
Каждый сотрудник может работать только над одним проектом! Состоит из:
- Project Name
- minQualification - минимальная квалификация сотрудника, для работы на данном проекте.
- Team - команда проекта.
Объект, типа {
  Managers: [],
  Developers: {
    Frontend : [],
    Backend: []
  }
}.
В св-ва этого объекта указан массив аналогичных классов.

Метод:
- completeProject() - позволяет закончить проект.
В результате выполнения функции проект из currentProjects перемещается в finishedProjects.
У команды данного проекта должно увеличиться кол-во завершенных проектов.
- addNewProjectMember() - Метод внутри которого вызывается проверка менеджера на то,
подходит ли сотрудник проекту. Если подходит, то команда расширяется, иначе нет.

- projectName - string
- minQualification -number
- Team -  {
    manager : экземпляр класса Manager
    developers: {
    frontend : массив содержащий экземпляры класса FrontendDeveloper
    backend : массив содержащий экземпляры класса DackendDeveloper
    }
}

completeProject()
addNewProjectMember(Developer/Manager) - Метод внутри которого вызывается проверка менеджера на то,
подходит ли сотрудник проекту. Если подходит, то команда расширяется, иначе нет.
*/

module.exports = class Project {
  constructor(_projectName, _minQualification, _team) {
    this.projectName = _projectName;
    this.minQualification = _minQualification;
    this.team = _team;
  }

  completeProject() {}

  addNewProjectMember(Employee) {}
};
