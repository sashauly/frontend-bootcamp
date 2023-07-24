const BackendDeveloper = require('./backendDev');
const FrontendDeveloper = require('./frontendDev');
const Manager = require('./manager');

/*

- Company - класс описывающий IT компанию. Состоит из:
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

Св-ва и методы класса
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

addNewCompanyMember(Developer/Manager) - в кач-ве аргумента принимает
экземляр класса FrontendDeveloper, Backend Developer или Manager
addProject(Project) - в кач-ве аргумента принимает экземляр класса Project
getMembersQuantity()
*/
module.exports = class Company {
  constructor(_companyName, _currentProjects, _completedProjects, _staff) {
    this.companyName = _companyName;
    this.currentProjects = _currentProjects;
    this.completedProjects = _completedProjects;
    this.staff = _staff;
  }

  addNewCompanyMember(Member) {
    if (Member instanceof FrontendDeveloper) {
      this.staff.developers.frontend.push(Member);
    } else if (Member instanceof BackendDeveloper) {
      this.staff.developers.backend.push(Member);
    } else if (Member instanceof Manager) {
      this.staff.managers.push(Member);
    } else {
      throw new Error(
        'Instance of an Object must be frontend, backend or manager!',
      );
    }
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
};
