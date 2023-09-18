/* eslint-disable import/prefer-default-export */
/*
У экземпляра класса должны присутствовать св-ва:
-name string.
-grade string Для простоты предположим, что система грейдов будет иметь значения от L1 до L4.
-hardSkills string[].
-company string.

Так же должны иметься три метода:

-changeCompany(newCompanyName) - сотрудник может сменить компанию, либо же просто уволиться.
-upGrade() - сотрудник может повысить квалификацию.
-addSkill(newSkillName) - сотрудник может дополнить список своих скиллов.
*/

export class Employee {
  constructor(_name, _grade, _company, _hardSkills = []) {
    this.name = _name;
    this.grade = _grade;
    this.hardSkills = _hardSkills;
    this.company = _company;
  }

  /**
   * Changes the company of the employee.
   * @param {string} newCompanyName
   */
  changeCompany(newCompanyName) {
    this.company = newCompanyName;
  }

  /**
   * Upgrades the grade of the employee. The new grade must be within the L1 to L4 range.
   * @param {string} newGradeName
   */
  upGrade(newGradeName) {
    if (['L1', 'L2', 'L3', 'L4'].includes(newGradeName)) {
      this.grade = newGradeName;
    } else {
      throw new Error('Invalid grade. It must be within L1 to L4.');
    }
  }

  /**
   * Adds a new skill to the employee's list of skills.
   * @param {string} newSkillName
   */
  addSkill(newSkillName) {
    this.hardSkills.push(newSkillName);
  }
}
