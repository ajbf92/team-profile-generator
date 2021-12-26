const inquire = require("inquirer");

class Manager {
  constructor(name, email, ID, phone) {
    this.name = name;
    this.email = email;
    this.ID = ID;
    this.officeNum = phone;
  }

  createNewManager() {
    return inquire.prompt([
      {
        type: "input",
        name: "name",
        message: "What is the manager's name?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the manager's email?",
      },
      {
        type: "input",
        name: "ID",
        message: "What is the manager's ID?",
      },
      {
        type: "input",
        name: "phone",
        message: "What is the manager's phone number?",
      },
    ]);
  }
}

module.exports = Manager;
