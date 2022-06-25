const Engineer = require('../lib/Engineer');

test('creates a new Engineer object', () => {
    const engineer = new Engineer('John', 4285, 'jatkerson18@gmail.com', 'JackAtkerson');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

test("gets engineer's GitHub username", () => {
    const engineer = new Engineer('John', 4285, 'jatkerson18@gmail.com', 'JackAtkerson');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test("role overridden to Engineer", () => {
    const engineer = new Engineer('John', 4285, 'jatkerson18@gmail.com', 'JackAtkerson');

    expect(engineer.getRole()).toEqual('Engineer');
});