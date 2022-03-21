const { writeToFile, copyToFile } = require("./generatePage");

// creates intern cards
const employeeCard = function (employee) {
  return `
  <div class="col-lg-4 col-xl-5 m-2">
      <div class="card">
          <div class="card-header">
              <h2 class="text-secondary">${employee.name}</h2>
              <h4 class="text-secondary">Employee</h4>
          </div>
          <div class="card-body">
              <p class="id">ID: ${employee.id}</p>
              <p class="email">Email: <a href="mailto:${employee.email}">${employee.email}</a></p>
              <p class="office">Office Number: ${employee.phone}</p>
          </div>
  </div>
</div>
  `;
}

//creates manager cards
const managerCard = function (manager) {
  return `
  <div class="col-lg-4 col-xl-5 m-2">
      <div class="card">
          <div class="card-header">
              <h2 class="text-secondary">${manager.name}</h2>
              <h4 class="text-secondary">Manager</h4>
          </div>
          <div class="card-body">
              <p class="id">ID: ${manager.id}</p>
              <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
              <p class="office">Office Number: ${manager.phone}</p>
          </div>
      </div>
  </div>
  `;
}

// creates engineer cards
const engineerCard = function (engineer) {
  return `
  <div class="col-lg-4 col-xl-5 m-2">
      <div class="card">
          <div class="card-header">
              <h2 class="text-secondary">${engineer.name}</h2>
              <h4 class="text-secondary">Engineer</h4>
          </div>
          <div class="card-body">
              <p class="id">ID: ${engineer.id}</p>
              <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
              <p class="github">Github: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></p>
          </div>
      </div>
  </div>
  `;
}

// creates intern cards
const internCard = function (intern) {
  return `
  <div class="col-lg-4 col-xl-5 m-2">
      <div class="card">
          <div class="card-header">
              <h2 class="text-secondary">${intern.name}</h2>
              <h4 class="text-secondary">Intern</h4>
          </div>
          <div class="card-body">
              <p class="id">ID: ${intern.id}</p>
              <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
              <p class="school">School: ${intern.school}</p>
          </div>
  </div>
</div>
  `;
};

//creates the html page using the data collected from inquirer. adds the employees to make it complete
generatePageLayouts = (data) => {
  teamInfo = [];

  for (let i = 0; i < data?.length; i++) {
    const member = data[i];
    const role = member.title;
    // console.log(member, role);

    if(role === 'Employee') {
      const employees = employeeCard(member);
      teamInfo.push(employees);
    }
  
    if(role === 'Manager') {
      const managers = managerCard(member);
      teamInfo.push(managers);
    }

    if(role === 'Engineer') {
      const engineers = engineerCard(member);
      teamInfo.push(engineers);
    }
  
    if(role === 'Intern') {
      const interns = internCard(member);
      teamInfo.push(interns);
    }
  }

  const teamInfoCards = teamInfo.join('')
  // console.log(teamInfoCards)
  const generateTeam = pageLayout(teamInfoCards);
  writeToFile(generateTeam)
  .then(() =>{
    copyToFile()
  .then(()=> {
    console.log("copied file successfully!")
  })
  .catch(err => {
    console.log(err);
    console.log('File not created!');
  });
  })
}

//overall page template
const pageLayout = function (teamInfoCards) {

    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>My Team</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
  
    <body>
      <header>
        <div class="">
          <h1 class="">My Team</h1>
        </div>
      </header>
      <main class="container my-5">
        <div class="flex-row justify-center">
          ${teamInfoCards}
        </div>
      </main>
    </body>
    </html>
    `;
}

module.exports = {generatePageLayouts};



