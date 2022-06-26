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

function generateHTML(employees) {
    return `
    `;
};

module.exports = generateHTML;  