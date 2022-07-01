const engineer = require('../lib/Engineer');

const generateManagerCard = (manager) => {
  return `    <nav class="navbar bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">manager</a>
  </div>
</nav>

<div class="card" style="width: 18rem">
  <div class="card-body">
    <h3 class="card-title">${manager.getName()}</h3>
    <h5 class="card-title">${manager.getId()}</h5>

    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID:123</li>
      <li class="list-group-item">${manager.getEmail()}</li>
      <li class="list-group-item">office number:${manager.getOfficeNumber()}</li>
    </ul>
  </div>
</div>`;
};

const generateEngineerCard = (engineer) => {
  return `   <nav class="navbar bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">engineer</a>
  </div>
</nav>

<div class="card" style="width: 18rem">
  <div class="card-body">
    <h3 class="card-title">${manager.getName()}</h3>
    <h5 class="card-title">engineer</h5>

    <ul class="list-group list-group-flush">
      <li class="list-group-item">${engineer.getId()}</li>
      <li class="list-group-item">email:${engineer.getEmail()}</li>
      <li class="list-group-item">office number:${engineer.getOfficeNumber()}</li>
    </ul>
  </div>
</div>`;
};

const generateInternCard = (intern) => {
  ` <nav class="navbar bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">intern</a>
  </div>
</nav>

<div class="card" style="width: 18rem">
  <div class="card-body">
    <h3 class="card-title">${intern.getName()}</h3>
    <h5 class="card-title">intern</h5>

    <ul class="list-group list-group-flush">
      <li class="list-group-item">${intern.getId()}</li>
      <li class="list-group-item">email: ${intern.getEmail()}</li>
      <li class="list-group-item">office number:${intern.getOfficeNumber()}</li>
      <li class="list-group-item">school name: ${intern.getSchool()}</li>
    </ul>
  </div>
</div>`;
};

const generateHTML = (manager, engineers, interns) => {
  return ``;
};

// writeToFile(fileName, theMarkup);
