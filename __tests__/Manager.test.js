const Manager = require('../lib/Manager');

test('creates manager object', () => {
    const manager = new Manager('john','john456@gmail.com', 456 , 'Manager', 4077777777);


    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNum).toEqual(expect.any(Number));
})

test('returns manager name', () => {
    const manager = new Manager('doe','doe789@gmail.com', 789, "Manager", 7870002346);


    expect(manager.getName()).toEqual(expect.any(String));
})

test('returns manager ID', () => {
    const manager = new Manager('jen','jen123@gmail.com', 123, "Manager", 8529637412);


    expect(manager.getId()).toEqual(expect.any(Number));
})

test('returns manager email', () => {
    const manager = new Manager('brenda','brenda963@gmail.com', 963, "Manager", 9638794561);


    expect(manager.getEmail()).toEqual(expect.any(String));
})

test('returns manager role', () => {
    const manager = new Manager('caro', 'caro741@gmail.com', 741, "Manager", 3651435897);

    expect(manager.getTitle()).toEqual('Manager');
})