const inquire = require('inquirer');

class Employee {
    constructor(name, email, ID, phone, github) {
      this.name = name;
      this.email = email;
      this.ID = ID;
      this.officeNum = phone;
      this.github = github;
    }
    

    createNewEmployee() {
            return inquire
            .prompt([
                    {
                        type: "input",
                        name: "name",
                        message: "What is the employee's name?"
                    },
                    {
                        type: "input",
                        name: "email",
                        message: "What is the employee's email?"
                    },
                    {
                        type: "input",
                        name: "ID",
                        message: "What is the employee's ID?"
                    },
                    {
                        type: "input",
                        name: "phone",
                        message: "What is the employee's phone number?"
                    }
            ]);
        }
    }


module.exports = Employee;