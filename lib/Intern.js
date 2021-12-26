const inquire = require("inquirer");

class Intern {
  constructor(name, email, ID, phone, school) {
    this.name = name;
    this.email = email;
    this.ID = ID;
    this.officeNum = phone;
    this.school = school;
  }

  createNewIntern() {
    return inquire.prompt([
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
        name: "ID",
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
    ]);
  }
}

module.exports = Intern;
