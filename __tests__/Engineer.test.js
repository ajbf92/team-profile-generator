const Engineer = require('../lib/Engineer');

test('creates engineer object', () => {
    const engineer = new Engineer('john','john456@gmail.com', 456 , 'Engineer', 'john-doe');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
})

test('returns engineer name', () => {
    const engineer = new Engineer('doe','doe789@gmail.com', 789, "Engineer", "doe-john");


    expect(engineer.getName()).toEqual(expect.any(String));
})

test('returns engineer ID', () => {
    const engineer = new Engineer('jen','jen123@gmail.com', 123, "Engineer", "jen-jen");


    expect(engineer.getId()).toEqual(expect.any(Number));
})

test('returns engineer email', () => {
    const engineer = new Engineer('brenda','brenda963@gmail.com', 963, "Engineer", "brenda-b");

    expect(engineer.getEmail()).toEqual(expect.any(String));
})

test('returns engineer git', () => {
    const engineer = new Engineer('caro', 'caro741@gmail.com', 741, "Engineer", "caro-c");
    

    expect(engineer.getGithub()).toEqual(expect.any(String));
})

test('returns engineer role', () => {
    const engineer = new Engineer('ile', 'ile582@gmail.com', 582, 'Engineer', 'ile-works');

    expect(engineer.getTitle()).toEqual('Engineer');
})