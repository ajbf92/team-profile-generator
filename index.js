// const inquirer = require("inquirer");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const teamMemberArr = [];
const addMember = () => {
    console.log(`
    =======================
    Add New Member to Team
    =======================
    `);
    return inquirer.prompt ({
        type: 'confirm',
        name: 'confirmAddMember',
        message: 'Would you like to add a new employee to this team?',
        default: false
    })
}

const teamMembers = () => {
    inquirer.prompt([
        {
  type: "list",
  name: "title",
  message: "Choose a team member to add?",
  choices: ["Manager", "Engineer", "Employee", "Intern", "Team Complete - Generate Team"],
}])
.then((answer) => {
  if (answer === "Manager") {
    let newManager = new Manager();
    let addNewManager = newManager.createNewManager();
    teamMembersArr.push(addNewManager);
  } else if (answer === "Engineer") {
    let newEngineer = new Engineer();
    let addNewEngineer = newEngineer.createNewEngineer();
    teamMembersArr.push(addNewEngineer);
  } else if (answer === "Employee") {
    let newEmployee = new Employee();
    let addNewEmployee = newEmployee.createNewEmployee();
    teamMembersArr.push(addNewEmployee);
  } else if (answer === "Intern") {
    let newIntern = new Intern();
    let addNewIntern = newIntern.createNewIntern();
    teamMembersArr.push(addNewIntern);

  } else if (answer === "Team Complete - Generate Team") {
      return
  }
})

.then (() => {
    addMember()
})
.then ((answer) => {
    console.log (answer);
    if (answer === true) {
        teamMembers();
    } else {
        return teamMemberArr
    }
});
};

// TODO: Create a function to initialize app
function init() {
    
  teamMembers();
//     //   .then((data) => {
//     //   console.log(questions);
//     //   console.log(data);
//     . then (writeToFile("teamMembers.html", generatePage(teamMemberArr)))
};


// Function call to initialize app
init();
