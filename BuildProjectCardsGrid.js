const NO_ENGINE = -1;
const ALL = null;

const FILTER_GROUPS =
[
    { LabelKey: "filters.engine", Category: "Engine", AllowNone: true },
    { LabelKey: "filters.language", Category: "Language", AllowNone: false },
];

const activeFilters = {}; // Category -> tech index | NO_ENGINE | ALL

function MakeProjectCard(project, index)
{
    return `
            <a class="project-card" href="Projects/ProjectPageTemplate.html?id=${index}">
                <img src="Projects/${project.ProjectName}/Images/${project.ProjectName}.png" alt="${T("card.imageMissing")}">
                <div class="project-info">
                    <h3>${Localize(project.DisplayName)}</h3>
                    <p>${Localize(project.Description)}</p>
                </div>
            </a>
            `;
}

function GetProjectTechsOfCategory(project, category)
{
    return project.TechStack.filter(tech => TECH_STACK[tech].Category === category);
}

function ProjectMatchesFilters(project)
{
    for (const group of FILTER_GROUPS)
    {
        const filter = activeFilters[group.Category];
        if (filter === ALL)
            continue;

        const techs = GetProjectTechsOfCategory(project, group.Category);

        if (filter === NO_ENGINE ? techs.length > 0 : !techs.includes(filter))
            return false;
    }

    return true;
}

function BuildProjectCardsGrid()
{
    // keep the original index so the card still links to the right project page
    const cards = PROJECTS
        .map((project, index) => ProjectMatchesFilters(project) ? MakeProjectCard(project, index) : "")
        .join("");

    document.getElementById("projectsGrid").innerHTML = cards || `<p class="no-projects">${T("filters.noMatch")}</p>`;
}

function MakeFilterButton(category, value, label)
{
    const isActive = activeFilters[category] === value;
    return `<button class="filter-btn${isActive ? " active" : ""}" data-category="${category}" data-value="${value}">${label}</button>`;
}

function BuildFilterGroup(group)
{
    // only offer techs that at least one project actually uses
    const usedTechs = [...new Set(PROJECTS.flatMap(project => GetProjectTechsOfCategory(project, group.Category)))];

    const buttons = [MakeFilterButton(group.Category, ALL, T("filters.all"))];
    for (const tech of usedTechs)
        buttons.push(MakeFilterButton(group.Category, tech, TECH_STACK[tech].TechName.trim()));

    if (group.AllowNone && PROJECTS.some(project => GetProjectTechsOfCategory(project, group.Category).length === 0))
        buttons.push(MakeFilterButton(group.Category, NO_ENGINE, T("filters.noEngine")));

    return `
            <div class="filter-group">
                <span class="filter-label">${T(group.LabelKey)}</span>
                ${buttons.join("")}
            </div>
            `;
}

function BuildFilters()
{
    document.getElementById("projectFilters").innerHTML = FILTER_GROUPS.map(BuildFilterGroup).join("");
}

function OnFilterClicked(event)
{
    const button = event.target.closest(".filter-btn");
    if (button == null)
        return;

    const value = button.dataset.value;
    activeFilters[button.dataset.category] = value === "null" ? ALL : Number(value);

    BuildFilters();
    BuildProjectCardsGrid();
}

for (const group of FILTER_GROUPS)
    activeFilters[group.Category] = ALL;

document.getElementById("projectFilters").addEventListener("click", OnFilterClicked);
BuildFilters();
BuildProjectCardsGrid();
