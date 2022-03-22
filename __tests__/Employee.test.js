const Employee = require('../lib/Employee');

test('creates employee object', () => {
    const employee = new Employee('john','john456@gmail.com', 456 , 'Employee');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
})

test('returns employee name', () => {
    const employee = new Employee('doe','doe789@gmail.com', 789, "Employee");

    expect(employee.getName()).toEqual(expect.any(String));
})

test('returns employee ID', () => {
    const employee = new Employee('jen','jen123@gmail.com', 123, "Employee");

    expect(employee.getId()).toEqual(expect.any(Number));
})

test('returns employee email', () => {
    const employee = new Employee('brenda','brenda963@gmail.com', 963, "Employee");

    expect(employee.getEmail()).toEqual(expect.any(String));
})

test('returns employee role', () => {
    const employee = new Employee('caro', 'caro741@gmail.com', 741, "Employee");

    expect(employee.getTitle()).toEqual('Employee');
})