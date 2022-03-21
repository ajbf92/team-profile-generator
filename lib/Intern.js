const inquire = require("inquirer");

class Intern {
  constructor(name, email, id, phone, school) {
    this.name = name;
    this.email = email;
    this.id = id;
    this.officeNum = phone;
    this.school = school;
  }

  createNewIntern() {
    return inquire.prompt([
      {
        type: "list",
        name: "title",
        message: "Confirm Roll:",
        choices: [
          "Intern",
        ],
      },
      {
        type: "input",
        name: "name",
        message: "What is the intern's name?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the intern's email?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the intern's ID?",
      },
      {
        type: "input",
        name: "phone",
        message: "What is the intern's phone number?",
      },
      {
        type: "input",
        name: "school",
        message: "What is the intern's school?",
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

module.exports = Intern;
