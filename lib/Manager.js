const inquire = require("inquirer");

class Manager {
  constructor(name, email, id, title, phone) {
    this.name = name;
    this.email = email;
    this.id = id;
    this.officeNum = phone;
    this.title = title;
  }

  getName() {
    return this.name;
  } 
  getId() {
    return this.id
  }
  getEmail(){
    return this.email
  }
  getTitle() {
    return this.title
  }
  getPhone() {
    return this.officeNum
  }

  createNewManager() {
    return inquire.prompt([
      {
        type: "list",
        name: "title",
        message: "Confirm Roll:",
        choices: [
          "Manager",
        ],
      },
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
        name: "id",
        message: "What is the manager's ID?",
      },
      {
        type: "input",
        name: "phone",
        message: "What is the manager's phone number?",
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

module.exports = Manager;
