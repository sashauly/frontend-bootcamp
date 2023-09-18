/* eslint-disable max-classes-per-file */
/* В продолжение прошлого задания вам нужно нужно создать 5 новых классов:
**Company** - класс описывающий IT компанию. Состоит из:
1. Св-ва:
- companyName
- currentProjects - текущий пулл проектов. Массив экземпляров класса Project
- completedProjects - пулл завершенных проектов. Массив экземпляров класса Project
- staff - весь пулл сотрудников компании.
Это объект, у которого есть поля Developers, Managers.
В этих полях лежат массивы экземпляров аналогичных классов.
2. Методы:
- addNewCompanyMember() - позволяет нанять нового сотрудника.
В результате метода у выбранного сотрудника
должно смениться имя компании.
- addProject() - позволяет добавить проект в пулл текущих.
- getMembersQuantity() - позволяет получить кол-во сотрудников, работающих в данной комании
- completeProject(project) - позволяет закончить проект.
В результате выполнения функции проект из currentProjects
перемещается в completedProjects.
У команды данного проекта должно увеличиться кол-во завершенных проектов.

**Project** - класс описывающий проект компании.
На проекте может быть только 1 менеджер!
Каждый сотрудник может работать только над одним проектом! Состоит из:
1. Св-ва:
- Project Name
- minQualification - минимальная квалификация сотрудника, для работы на данном проекте.
- Team - команда проекта. Объект, типа :
{
    manager: Manager,
    developers: {
        frontend : [],
        backend: []
    }
}.
В св-ва этого объекта указан массив аналогичных классов.

2. Методы:
- addNewProjectMember(member) - Метод внутри которого вызывается проверка менеджера на то,
подходит ли сотрудник проекту. Если подходит, то команда расширяется, иначе нет.

**Backend Developer** - Класс, который наследуется от класса Employee.
1.Имеет новые св-ва:
- stack - Массив в котором указаны технологии, которыми владеет разработчик.
- developerSide - 'backend'
- projectQuantity - Число завершенных проектов.
2. Методы:
- expandStack(someTech) - разработчик может увеличить стек технологий.

**Frontend Developer** - Класс, который наследуется от класса Employee.
1.Имеет новые св-ва:
- stack - Массив в котором указаны технологии, которыми владеет разработчик.
- developerSide - 'frontend'
- projectQuantity - Число завершенных проектов.
- projectQuantity - Число завершенных проектов.
2. Методы:
- expandStack(someTech) - разработчик может увеличить стек технологий.

**Manager** - Класс, который наследуется от класса Employee.
1.Имеет новые св-ва:
- projectQuantity - Число завершенных проектов.
2. Методы:
- checkMember(minQualification, member) - менеджер проверяет,
удовлетворяет ли сотрудник условиям проекта.
Сотрудник, состоящий в другой компании не может работать над проектом другой компании.

*/

import { Employee } from './classes';
/*
projectQuantity - number
checkMember(minQualification, member) - в качестве аргумента принимается строка
('L1'/'L2'/'L3'/'L4') и BackendDeveloper || FrontendDeveloper
*/
export class Manager extends Employee {
  constructor(_name, _grade, _hardSkills, _company, _projectQuantity) {
    super(_name, _grade, _hardSkills, _company);
    this.projectQuantity = _projectQuantity;
  }

  checkMember(minQualification, Member) {
    return Member.grade >= minQualification;
  }
}

/*
stack - массив строк
- developerSide - строка ('frontend')
- projectQuantity - number
expandStack(newTech) - в кач-ве аргумента принимает строку
*/

export class FrontendDeveloper extends Employee {
  constructor(
    _name,
    _grade,
    _hardSkills,
    _company,
    _stack,
    _projectQuantity,
    _developerSide = 'frontend',
  ) {
    super(_name, _grade, _hardSkills, _company);
    this.stack = _stack;
    this.developerSide = _developerSide;
    this.projectQuantity = _projectQuantity;
  }

  expandStack(newTech) {
    this.stack.push(newTech);
  }
}

/*
stack - массив строк
- developerSide - строка ('backend')
- projectQuantity - number
expandStack(newTech) - в кач-ве аргумента принимает строку
*/

export class BackendDeveloper extends Employee {
  developerSide = 'backend';

  constructor(
    _name,
    _grade,
    _hardSkills,
    _company,
    _stack,
    _projectQuantity,
    _developerSide = 'backend',
  ) {
    super(_name, _grade, _hardSkills, _company);
    this.stack = _stack;
    this.developerSide = _developerSide;
    this.projectQuantity = _projectQuantity;
  }

  expandStack(newTech) {
    this.stack.push(newTech);
  }
}

/* Св-ва и методы класса
companyName - string
currentProjects - Массив экземпляров класса Project
completedProjects -  Массив экземпляров класса Project
staff - {
    developers :  {
    frontend : массив содержащий экземпляры класса FrontendDeveloper
    backend : массив содержащий экземпляры класса DackendDeveloper
    },
    managers: массив содержащий экземпляры класса Manager
}

addNewCompanyMember(Developer/Manager) - в кач-ве аргумента
принимает экземляр класса FrontendDeveloper, Backend Developer или Manager
addProject(Project) - в кач-ве аргумента принимает экземляр класса Project
getMembersQuantity()
*/
export class Company {
  constructor(
    _companyName,
    _currentProjects = [],
    _completedProjects = [],
    _staff = {
      developers: {
        frontend: [],
        backend: [],
      },
      managers: [],
    },
  ) {
    this.companyName = _companyName;
    this.currentProjects = _currentProjects;
    this.completedProjects = _completedProjects;
    this.staff = _staff;
  }

  addNewCompanyMember(member) {
    if (member instanceof FrontendDeveloper) {
      this.staff.developers.frontend.push(member);
    } else if (member instanceof BackendDeveloper) {
      this.staff.developers.backend.push(member);
    } else if (member instanceof Manager) {
      this.staff.managers.push(member);
    } else {
      throw new Error(
        'Instance of an Object must be frontend, backend or manager!',
      );
    }

    member.changeCompany(this.companyName);
  }

  addProject(Project) {
    this.currentProjects.push(Project);
  }

  getMembersQuantity() {
    return (
      this.staff.managers.length +
      this.staff.developers.frontend.length +
      this.staff.developers.backend.length
    );
  }

  completeProject(project) {
    const index = this.currentProjects.indexOf(project);
    if (index > -1) {
      this.currentProjects.splice(index, 1);
      this.completedProjects.push(project);
      project.team.manager.projectQuantity++;
      project.team.developers.frontend.forEach(
        (developer) => developer.projectQuantity++,
      );
      project.team.developers.backend.forEach(
        (developer) => developer.projectQuantity++,
      );
    }
  }
}

/*
- projectName - string
- minQualification -string
- Team -  {
    manager : экземпляр класса Manager
    developers: {
    frontend : массив содержащий экземпляры класса FrontendDeveloper
    backend : массив содержащий экземпляры класса DackendDeveloper
    }
}

addNewProjectMember(Developer) - Метод внутри которого вызывается проверка менеджера на то,
подходит ли сотрудник проекту. Если подходит, то команда расширяется, иначе нет.
*/
export class Project {
  constructor(_projectName, _minQualification, _team) {
    this.projectName = _projectName;
    this.minQualification = _minQualification;
    this.team = _team;
  }

  addNewProjectMember(member) {
    if (member instanceof Manager) {
      this.team.manager = member;
      return;
    }

    if (
      !(member instanceof Manager) &&
      !this.team.manager.checkMember(this.minQualification, member)
    ) {
      throw new Error('Member does not meet the project requirements');
    }

    if (member instanceof FrontendDeveloper) {
      this.team.developers.frontend.push(member);
    } else if (member instanceof BackendDeveloper) {
      this.team.developers.backend.push(member);
    } else {
      throw new Error(
        'Instance of an Object must be frontend, backend or manager!',
      );
    }
  }
}
