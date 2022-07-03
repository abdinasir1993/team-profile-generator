const path = require('path');
const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');

const Intern = require('./lib/Intern');
const fs = require('fs');
const generateHTML = (manager, engineers, interns) => {
  const generateEngineerCard = engineers
    .map((engineer) => {
      return `<div class="card" style="width: 18rem">
  <div class="card-body">
    <h5 class="card-title">engineer</h5>

    <ul class="list-group list-group-flush">
      <li class="list-group-item">${engineer.id}</li>
      <li class="list-group-item">email:${engineer.email}</li>
    </ul>
  </div>
</div>`;
    })
    .join('');

  const generateInternCard = interns
    .map((intern) => {
      `<div class="card" style="width: 18rem">
  <div class="card-body">
    <h3 class="card-title">${intern.name}</h3>
    <h5 class="card-title">intern</h5>

    <ul class="list-group list-group-flush">
      <li class="list-group-item">${intern.id}</li>
      <li class="list-group-item">email: ${intern.email}</li>
      <li class="list-group-item">school name: ${intern.school}</li>
    </ul>
  </div>
</div>`;
    })
    .join('');
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
        crossorigin="anonymous"
      />
      <title>Document</title>
    </head>
  
    <body>
      <nav class="navbar bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">manager</a>
        </div>
      </nav>
 
<div class="card" style="width: 18rem">
<div class="card-body">
  <h3 class="card-title">${manager.name}</h3>
  <h5 class="card-title">${manager.id}</h5>

  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID:123</li>
    <li class="list-group-item">${manager.email}</li>
    <li class="list-group-item">office number:${manager.officeNumber}</li>
  </ul>
</div>
</div>
      <!-- manager -->
  
      <nav class="navbar bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">engineer</a>
        </div>
      </nav>
  ${generateEngineerCard}
    
  
      <!-- engineer -->
  <div>
      <nav class="navbar bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">intern</a>
        </div>
      </nav>  
   ${generateInternCard}
   </div>
      <!-- intern -->
  
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
        crossorigin="anonymous"
      ></script>
    </body>
  </html>
  `;
};

const choiceQuestion = {
  message: 'What action would you like to perform next?',
  type: 'list',
  name: 'action',
  choices: [
    {
      name: 'Add Engineer',
      value: 'engineer',
    }, // add engineer
    {
      name: 'Add Intern',
      value: 'intern',
    }, // add intern
    {
      name: 'Quit Application',
      value: 'quit',
    }, // quit application
  ],
};

const managerQuestions = [
  {
    message: 'please enter the name of manager',
    type: 'input',
    name: 'name',
    validate: (enteredName) => {
      if (enteredName) {
        return true;
      } else {
        return 'please type a name to continue';
      }
    },
  },
  {
    message: 'please enter the id of manager',
    type: 'input',
    name: 'id',
    validate: (enteredId) => {
      if (enteredId) {
        return true;
      } else {
        return 'please type a id to continue';
      }
    },
  },
  {
    message: 'please enter the email of manager',
    type: 'input',
    name: 'email',
    validate: (emailEntered) => {
      if (emailEntered) {
        return true;
      } else {
        return 'please type a email to continue';
      }
    },
  },
  {
    message: 'please enter the office number of manager',
    type: 'input',
    name: 'officeNumber',
    validate: (officeNumber) => {
      if (officeNumber) {
        return true;
      } else {
        return 'please type a office number to continue';
      }
    },
  },
];

const engineerQuestions = [
  {
    message: 'please enter the name of engineer',
    type: 'input',
    name: 'name',
    validate: (enteredName) => {
      if (enteredName) {
        return true;
      } else {
        return 'please type a name to continue';
      }
    },
  },
  {
    message: 'please enter the id of engineer',
    type: 'input',
    name: 'id',
    validate: (enteredId) => {
      if (enteredId) {
        return true;
      } else {
        return 'please type a id to continue';
      }
    },
  },
  {
    message: 'please enter the email of engineer',
    type: 'input',
    name: 'email',
    validate: (emailEntered) => {
      if (emailEntered) {
        return true;
      } else {
        return 'please type a email to continue';
      }
    },
  },
  {
    message: 'please enter the github id of the engineer',
    type: 'input',
    name: 'githubId',
    validate: (enterefGithubId) => {
      if (enterefGithubId) {
        return true;
      } else {
        return 'please type a github id to continue';
      }
    },
  },
];

const internQuestions = [
  {
    message: 'please enter the name of intern',
    type: 'input',
    name: 'name',
    validate: (enteredName) => {
      if (enteredName) {
        return true;
      } else {
        return 'please type a name to continue';
      }
    },
  },
  {
    message: 'please enter the id of intern',
    type: 'input',
    name: 'id',
    validate: (enteredId) => {
      if (enteredId) {
        return true;
      } else {
        return 'please type a id to continue';
      }
    },
  },
  {
    message: 'please enter the email of intern',
    type: 'input',
    name: 'email',
    validate: (emailEntered) => {
      if (emailEntered) {
        return true;
      } else {
        return 'please type a email to continue';
      }
    },
  },
  {
    message: 'please enter the school of the intern',
    type: 'input',
    name: 'school',
    validate: (enteredSchool) => {
      if (enteredSchool) {
        return true;
      } else {
        return 'please type a school to continue';
      }
    },
  },
];

const init = async () => {
  // declare empty arrays for engineer and intern
  const engineers = [];
  const interns = [];

  let inProgress = true;

  // ask manager questions first
  const { name, id, email, officeNumber } = await inquirer.prompt(
    managerQuestions
  );

  // create a new manager instance and pass it the values that you just got from inquirer

  const manager = { name, id, email, officeNumber };

  // start a while loop with a condition
  while (inProgress) {
    // ask user the choice question
    const { action } = await inquirer.prompt(choiceQuestion);

    // if the action is quit, change the inProgress flag to false
    if (action == 'quit') {
      console.log('Thank you');
      inProgress = false;
      console.log(interns);
    }

    // add engineers and interns based on user's selection

    if (action == 'intern') {
      const intern = await inquirer.prompt(internQuestions);
      interns.push(intern);
    }

    if (action == 'engineer') {
      const engineer = await inquirer.prompt(engineerQuestions);
      engineers.push(engineer);
    }
  }
  // generate the HTML with cards using the data that we got from the user
  const theMarkUp = generateHTML(manager, engineers, interns);
  fs.writeFileSync('./public/teams.html', theMarkUp);
};

init();
