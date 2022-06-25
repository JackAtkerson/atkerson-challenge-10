const Intern = require('../lib/Intern');

test('creates a new intern object', () => {
    const intern = new Intern('Jack', 1234, 'jatkerson18@gmail.com', 'WKU');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));

});

test("gets intern's school", () => {
    const intern = new Intern('Jack', 1234, 'jatkerson18@gmail.com', 'WKU');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test("role overridden to Intern", () => {
    const intern = new Intern('Jack', 1234, 'jatkerson18@gmail.com', 'WKU');

    expect(intern.getRole()).toEqual('Intern');
});
