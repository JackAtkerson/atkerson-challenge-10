const Manager = require('../lib/Manager');

test('creates new manager object', () => {
    const manager = new Manager('John', 1111, 'jatkerson18@gmail.com', 15);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets managers office number', () => {

});

test('role overridden to Manager', () => {
    const manager = new Manager('John', 1111, 'jatkerson18@gmail.com', 15);

    expect(manager.getRole()).toEqual('Manager');
});