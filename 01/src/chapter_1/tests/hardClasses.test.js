const FrontendDev = require('../hardClassess/frontendDev');
const BackendDev = require('../hardClassess/backendDev');
const Manager = require('../hardClassess/manager');
const Project = require('../hardClassess/project');
const Company = require('../hardClassess/company');

const frontendDev = new FrontendDev(
  'Will Smith',
  'L1',
  ['working', 'testing'],
  'Google',
  ['HTML', 'CSS', 'Javascript'],
  'frontend',
  2,
);
const backendDev = new BackendDev(
  'John Shepard',
  'L2',
  ['working', 'testing', 'crying'],
  'Google',
  ['Java', 'Spring'],
  'backend',
  3,
);
const manager = new Manager(
  'Michael Scott',
  'L3',
  ['working', 'thinking'],
  'Google',
  10,
);
const project = new Project('Google Search', 'L2', {
  manager,
  developers: { frontend: [frontendDev], backend: [backendDev] },
});
const company = new Company('Google', [project], [], {
  managers: [manager],
  developers: { frontend: [frontendDev], backend: [backendDev] },
});

describe('Frontend Dev', () => {
  test('Default constructor', () => {
    expect(typeof frontendDev).toBe('object');
  });
  test('Expand Stack', () => {
    frontendDev.expandStack('React');
    expect(frontendDev.stack.pop()).toBe('React');
  });
});

describe('Backend Dev', () => {
  test('Default constructor', () => {
    // console.log(backendDev);
    expect(typeof backendDev).toBe('object');
  });
  test('Expand Stack', () => {
    backendDev.expandStack('MySQL');
    expect(backendDev.stack.pop()).toBe('MySQL');
  });
});

describe('Default constructor', () => {
  test('Manager', () => {
    // console.log(manager);
    expect(typeof manager).toBe('object');
  });
  test('should first', () => {
    expect(manager.checkMember('L3')).toBe(true);
  });
  test('should first', () => {
    expect(manager.checkMember()).toBe(false);
  });
});

describe('Project', () => {
  test('Default constructor', () => {
    // console.log(project);
    expect(typeof project).toBe('object');
  });
  it('Add new company member', () => {
    project.addNewProjectMember(
      new FrontendDev(
        'Helena Grian',
        'L3',
        ['working', 'testing'],
        'Google',
        ['HTML', 'CSS', 'Javascript', 'Sass'],
        'frontend',
        3,
      ),
    );
    expect(project.team.developers.frontend.pop().name).toBe('Helena Grian');
  });
  it('Add new company member', () => {
    project.addNewProjectMember(
      new BackendDev(
        'Helena Grian',
        'L3',
        ['working', 'testing'],
        'Google',
        ['HTML', 'CSS', 'Javascript', 'Sass'],
        'frontend',
        3,
      ),
    );
    expect(project.team.developers.backend.pop().name).toBe('Helena Grian');
  });
  it('Add new company member', () => {
    project.addNewProjectMember(
      new Manager('Helena Grian', 'L3', ['working', 'testing'], 'Google', 3),
    );
    expect(project.team.manager.name).toBe('Helena Grian');
  });
  it('Add new company member', () => {
    expect(() => {
      project.addNewProjectMember();
    }).toThrow(Error);
  });
});

describe('Company', () => {
  it('Default constructor', () => {
    // console.log(company);
    expect(typeof company).toBe('object');
  });
  it('Add new company member', () => {
    company.addNewCompanyMember(
      new FrontendDev(
        'Helena Grian',
        'L3',
        ['working', 'testing'],
        'Google',
        ['HTML', 'CSS', 'Javascript', 'Sass'],
        'frontend',
        3,
      ),
    );
    expect(company.staff.developers.frontend.pop().name).toBe('Helena Grian');
  });
  it('Add new company member', () => {
    company.addNewCompanyMember(
      new BackendDev(
        'Helena Grian',
        'L3',
        ['working', 'testing'],
        'Google',
        ['HTML', 'CSS', 'Javascript', 'Sass'],
        'frontend',
        3,
      ),
    );
    expect(company.staff.developers.backend.pop().name).toBe('Helena Grian');
  });
  it('Add new company member', () => {
    company.addNewCompanyMember(
      new Manager('Helena Grian', 'L3', ['working', 'testing'], 'Google', 3),
    );
    expect(company.staff.managers.pop().name).toBe('Helena Grian');
  });
  it('Add new company member', () => {
    expect(() => {
      company.addNewCompanyMember();
    }).toThrow(Error);
  });
  test('add Project', () => {
    company.addProject(
      new Project('Google AI', 'L3', {
        manager,
        developers: { frontend: [frontendDev], backend: [backendDev] },
      }),
    );
    expect(company.currentProjects.pop().projectName).toBe('Google AI');
  });
  test('Get members quantity', () => {
    expect(company.getMembersQuantity()).toBe(3);
  });
});
