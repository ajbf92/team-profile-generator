const inquire = require("inquirer");
class Employee {
  constructor(name, email, id, phone) {
    this.name = name;
    this.email = email;
    this.id = id;
    this.officeNum = phone;
  }

  createNewEmployee() {
    return inquire.prompt([
      {
        type: "list",
        name: "title",
        message: "Confirm Roll:",
        choices: [
          "Employee",
        ],
      },
      {
        type: "input",
        name: "name",
        message: "What is the employee's name?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the employee's email?",
      },
      {
        type: "input",
        name: "ID",
        message: "What is the employee's ID?",
      },
      {
        type: "input",
        name: "phone",
        message: "What is the employee's phone number?",
      },
      {
        type: "confirm",
        name: "confirmAddMember",
        message: "Would you like to add a new employee to this team?",
        default: false,
      }
    ]);
  }
}

module.exports = Employee;
