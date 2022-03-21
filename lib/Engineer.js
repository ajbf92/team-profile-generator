const inquire = require("inquirer");

class Engineer {
  constructor(name, email, id, phone, github) {
    this.name = name;
    this.email = email;
    this.id = id;
    this.officeNum = phone;
    this.github = github;
  }

  createNewEngineer() {
    return inquire.prompt([
      {
        type: "list",
        name: "title",
        message: "Confirm Roll:",
        choices: [
          "Engineer",
        ],
      },
      {
        type: "input",
        name: "name",
        message: "What is the engineer's name?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the engineer's email?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the engineer's ID?",
      },
      {
        type: "input",
        name: "phone",
        message: "What is the engineer's phone number?",
      },
      {
        type: "input",
        name: "github",
        message: "What is the engineer's github username?",
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

module.exports = Engineer;
