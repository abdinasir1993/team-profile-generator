const path = require('path');
const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');

const intern = require('./lib/Intern');

// const {
//   managerQuestions,
//   engineerQuestions,
//   internQuestions,
//   choiceQuestion,
// } = require('./utils/questions');

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

  const manager = new Manager(name, id, email, officeNumber);

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
  // const theMarkup = generateHTML(manager, engineers, interns);
  // writeToFile(theMarkUp);
};

init();
