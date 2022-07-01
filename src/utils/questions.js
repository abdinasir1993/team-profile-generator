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
      name: 'Add Engineer',
      value: 'engineer',
    }, // add intern
    {
      name: 'Add Engineer',
      value: 'engineer',
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

module.export = {
  managerQuestions,
  engineerQuestions,
  internQuestions,
  choiceQuestion,
};
