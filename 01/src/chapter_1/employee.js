/*

У экземпляра класса должны присутствовать св-ва:
-name string
-grade string Для простоты предположим, что система грейдов будет иметь значения от L1 до L4
-hardSkills string[]
-company string

Так же должны иметься три метода:

-changeCompany(newCompanyName) - сотрудник может сменить компанию, либо же просто уволиться
-upGrade(newGradeName) - сотрудник может повысить квалификацию
-addSkill(newSkillName) - сотрудник может дополнить список своих скиллов.
*/

module.exports = class Employee {
  constructor(_name, _grade, _hardSkills, _company) {
    this.name = _name;
    this.grade = _grade;
    this.hardSkills = _hardSkills;
    this.company = _company;
  }

  /**
   * @param {string} newCompanyName
   */
  set changeCompany(newCompanyName) {
    this.company = newCompanyName;
  }

  /**
   * @param {string} newGradeName
   */
  set upGrade(newGradeName) {
    this.grade = newGradeName;
  }

  /**
   * @param {string} newSkillName
   */
  set addSkill(newSkillName) {
    this.hardSkills.push(newSkillName);
  }
};
