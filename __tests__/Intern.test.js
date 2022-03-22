const Intern = require('../lib/Intern');

test('creates intern object', () => {
    const intern = new Intern('john','john456@gmail.com', 456 , 'Intern', "UCF");


    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
})

test('returns intern name', () => {
    const intern = new Intern('doe','doe789@gmail.com', 789, "Intern", "UF");


    expect(intern.getName()).toEqual(expect.any(String));
})

test('returns intern ID', () => {
    const intern = new Intern('jen','jen123@gmail.com', 123, "Intern", "USF");

    expect(intern.getId()).toEqual(expect.any(Number));
})

test('returns intern email', () => {
    const intern = new Intern('brenda','brenda963@gmail.com', 963, "Intern", "FAU");
    

    expect(intern.getEmail()).toEqual(expect.any(String));
})

test('returns intern school', () => {
    const intern = new Intern('caro', 'caro741@gmail.com', 741, "Intern", "VCC");
    

    expect(intern.getSchool()).toEqual(expect.any(String));
})

test('returns intern role', () => {
    const intern = new Intern('ile', 'ile582@gmail.com', 582, 'Intern', 'Harvard');
    

    expect(intern.getTitle()).toEqual('Intern');
})