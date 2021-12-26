const inquire = require("inquirer");

class Engineer {
  constructor(name, email, ID, phone, github) {
    this.name = name;
    this.email = email;
    this.ID = ID;
    this.officeNum = phone;
    this.github = github;
  }

  createNewEngineer() {
    return inquire.prompt([
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
        name: "ID",
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
    ]);
  }
}

module.exports = Engineer;
