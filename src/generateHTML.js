function generateManager(manager) {
    return `
    <div>
        <div>
            <div>
                <h3>${manager.name}</h3>
                <h4>Manager</h4><i></i>
            </div>

            <div>
                <p class="id">ID: ${manager.id}</p>
                <p class="email">E-mail: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="officeNumber">Office Number: ${manager.officeNumber}</p>
            </div>

        </div>
    </div>
    `
};

function generateEngineer(engineer) {
    return `
    <div>
        <div>
            <div>
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4><i></i>
            </div>

            <div>
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">E-mail: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github"><a href="https://github.com/${engineer.github}">GithHub</a></p>
            </div>

        </div>
    </div>
    `
};

function generateIntern(intern) {
    return `
    <div>
        <div>
            <div>
                <h3>${intern.name}</h3>
                <h4>Intern</h4><i></i>
            </div>

            <div>
                <p class="id">ID: ${intern.id}</p>
                <p class="email">E-Mail: <a href="mailto:${intern.email}">${engineer.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>

        </div>
    </div>
    `
};

generateHTML = (data) => {
    pageArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerCard = generateManager(employee);
            pageArray.push(managerCard);
        }

        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);
            pageArray.push(engineerCard);
        }

        if (role === 'Intern') {
            const internCard = generateIntern(employee);
            pageArray.push(internCard);
        }
    }

    const employeeCard = pageArray.join('')


};

const generateEmployeePage = function (employeeCards) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" href="style.css">
    <body>
        <header>
            <nav class="navbar">
                <span>My Team</span>
            </nav>
        </header>
        <main>
            <div class="container">
                <div class="row justify-center" id="cards">
                    ${employeeCards}
                </div>
            </div>
        </main>
    </body>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    </html>

  `
};

module.exports = generateHTML;  