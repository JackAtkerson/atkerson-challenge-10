const Employee = require('../lib/Employee');


test('creates a new Employee object', () => {
    const employee = new Employee('Jack', 1039, 'jatkerson18@gmail.com');

    expect(employee.name).toBe(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test("gets employee's name", () => {
    const employee = new Employee('Jack', 1039, 'jatkerson18@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test("gets employee's id", () => {
    const employee = new Employee('Jack', 1039, 'jatkerson18@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test("gets employee's email", () => {
    const employee = new Employee('Jack', 1039, 'jatkerson18@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(empoyee.email.toString()));
});

test("gets employee's role", () => {
    const employee = new Employee('Jack', 1039, 'jatkerson18@gmail.com');

    expect(employee.getRole()).toEqual('Employee');
});