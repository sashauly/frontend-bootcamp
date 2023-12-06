import {
  FrontendDeveloper,
  BackendDeveloper,
  Manager,
  Project,
  Company,
} from '../hard_classes';

const frontendDev = new FrontendDeveloper(
  'Will Smith',
  'L1',
  ['working', 'testing'],
  'Google',
  ['HTML', 'CSS', 'Javascript'],
  'frontend',
  2,
);
const backendDev = new BackendDeveloper(
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
    expect(manager.checkMember('L3', backendDev)).toBe(false);
  });
  test('should first', () => {
    expect(manager.checkMember('L3', manager)).toBe(true);
  });
});

describe('Project', () => {
  test('Default constructor', () => {
    // console.log(project);
    expect(typeof project).toBe('object');
  });
  it('Add new company member', () => {
    project.addNewProjectMember(
      new Manager('Helena Grian', 'L3', ['working', 'testing'], 'Google', 3),
    );
    expect(project.team.manager.name).toBe('Helena Grian');
  });
  it('Add new company member', () => {
    project.addNewProjectMember(
      new FrontendDeveloper(
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
      new BackendDeveloper(
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
    expect(() => {
      project.addNewProjectMember();
    }).toThrow(Error);
  });
});

describe('Company', () => {
  let company;

  beforeEach(() => {
    // Create a new instance of the Company class before each test
    company = new Company('MyCompany');
  });

  test('Add new company member', () => {
    // Add a new member to the company
    company.addNewCompanyMember(manager);

    // Assert that the member was added to the appropriate staff category
    expect(company.staff.managers).toContain(manager);
  });

  test('Add project', () => {
    // Add the project to the current projects list
    company.addProject(project);

    // Assert that the project was added to the current projects list
    expect(company.currentProjects).toContain(project);
  });

  test('Get members quantity', () => {
    // Add some members to the company
    company.addNewCompanyMember(frontendDev);
    company.addNewCompanyMember(backendDev);

    // Get the total number of members in the company
    const membersQuantity = company.getMembersQuantity();

    // Assert that the number of members is correct
    expect(membersQuantity).toBe(2);
  });

  test('Complete project', () => {
    company.addProject(project);

    // Complete the project
    company.completeProject(project);

    // Assert that the project was moved from current projects to completed projects
    expect(company.currentProjects).not.toContain(project);
    expect(company.completedProjects).toContain(project);
  });
});
