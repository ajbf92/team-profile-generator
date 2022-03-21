const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const {writeToFile, copyToFile} = require("./src/generatePage");
const { generatePageLayouts } = require("./src/generatePageLayout");


let teamMemberArr = [];

const teamMembers = async() => {
  
    return inquirer
    .prompt([
      {
        type: "list",
        name: "title",
        message: "Choose a team member to add?",
        choices: [
          "Manager",
          "Engineer",
          "Employee",
          "Intern"
        ],
      },
    ])

    .then((answer) => {
      // console.log(answer);
      if (answer.title == "Manager") {
        let newManager = new Manager();
        let addNewEmployee = newManager.createNewManager();
        return addNewEmployee
        // console.log(teamMemberArr);
      } 
      
      if (answer.title == "Engineer") {
        let newEngineer = new Engineer();
        let addNewEmployee = newEngineer.createNewEngineer();
        return addNewEmployee
        // console.log(teamMemberArr);
      }
      
      if (answer.title == "Employee") {
        let newEmployee = new Employee();
        let addNewEmployee = newEmployee.createNewEmployee();
        return addNewEmployee
        // console.log(teamMemberArr);
      } 
      if (answer.title == "Intern") {
        let newIntern = new Intern();
        let addNewEmployee = newIntern.createNewIntern();
        return addNewEmployee
        // console.log(teamMemberArr);
      }
    })
    .then((answer)=>{
      // console.log(answer);
      teamMemberArr.push(answer);
      // console.log(teamMemberArr);
        if(answer.confirmAddMember == true) {
        console.log(`
          =======================
          Add New Member to Team
          =======================
          `);
        teamMembers();
        
      } else {
        // console.log(teamMemberArr);
        generatePageLayouts(teamMemberArr)
    }
  });

};


//the starts the application. shows the flow of the application as well
teamMembers()
