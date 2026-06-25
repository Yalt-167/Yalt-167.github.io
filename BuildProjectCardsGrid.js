function MakeProjectCard(project, index)
{
    return `
            <a class="project-card" href="Projects/ProjectPageTemplate.html?id=${index}">
                <img src="Projects/${project.ProjectName}/Images/${project.ProjectName}.png" alt="Image not found">
                <div class="project-info">
                    <h3>${project.DisplayName}</h3>
                    <p>${project.Description}</p>
                </div>
            </a>
            `;
}

document.getElementById("projectsGrid").innerHTML = PROJECTS.map(MakeProjectCard).join("");