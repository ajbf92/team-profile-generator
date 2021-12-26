// const inquirer = require("inquirer");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
let teamMemberArr = [];

const teamMembers = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "title",
        message: "Choose a team member to add?",
        choices: [
          "Manager",
          "Engineer",
          "Employee",
          "Intern",
          "Team Complete - Generate Team",
        ],
      },
    ])

    .then((answer) => {
      console.log(answer);
      if (answer.title == "Manager") {
        let newManager = new Manager();
        let addNewManager = newManager.createNewManager();
        return addNewManager;
      } else if (answer.title == "Engineer") {
        let newEngineer = new Engineer();
        let addNewEngineer = newEngineer.createNewEngineer();
        return addNewEngineer;
        // console.log(teamMemberArr);
      } else if (answer.title == "Employee") {
        let newEmployee = new Employee();
        let addNewEmployee = newEmployee.createNewEmployee();
        return addNewEmployee;
        // console.log(teamMemberArr);
      } else if (answer.title == "Intern") {
        let newIntern = new Intern();
        let addNewIntern = newIntern.createNewIntern();
        return addNewIntern;
        // console.log(teamMemberArr);
      }
      // else if (answer.title == "Team Complete - Generate Team") {
      //     return teamMemberArr;
      //   }
    })
    .then((answer) => {
      // console.log(answer);
      teamMemberArr.push(answer);
      console.log(teamMemberArr);
      async function confirmNewMember() {
        console.log(`
          =======================
          Add New Member to Team
          =======================
          `);
        return inquirer.prompt({
          type: "confirm",
          name: "confirmAddMember",
          message: "Would you like to add a new employee to this team?",
          default: false,
        });
      }
      async function addMember() {
        let answer = await confirmNewMember();
        // console.log(answer);
        if (answer.confirmAddMember == true) {
          teamMembers();
        } else {
          console.log(teamMemberArr);
          return teamMemberArr;
        }
      }
      addMember();
    });
};

// TODO: Create a function to initialize app
function init() {
  teamMembers();
  //     //   .then((data) => {
  //     //   console.log(questions);
  //     //   console.log(data);
  //     .then ((teamMemberArr) => {
  //     writeToFile("teamMembers.html", generatePage(teamMemberArr))
  // })
}

// Function call to initialize app
init();
