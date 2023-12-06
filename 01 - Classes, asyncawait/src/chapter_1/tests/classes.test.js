import { Employee } from '../classes';

const worker = new Employee('Joe', 'L1', 'Google', ['Not talking', 'Writing']);

test('constructor', () => {
  expect(typeof worker).toBe('object');
});

test('changeCompany', () => {
  worker.changeCompany('Yandex');
  expect(worker.company).toBe('Yandex');
});
test('addSkill', () => {
  worker.addSkill('hard work');
  expect(worker.hardSkills.pop()).toBe('hard work');
});
test('upGrade', () => {
  worker.upGrade('L2');
  expect(worker.grade).toBe('L2');
});
