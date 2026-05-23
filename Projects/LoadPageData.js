function LinkTabSystem()
{
    const editorTabs = document.getElementById("editorTabs");

    if (editorTabs == null)
        return;

    const buttons = editorTabs.querySelectorAll(".tab-btn");
    const panels = document.querySelectorAll(".tab-panel");

    buttons.forEach(
        (btn, i) => {
            btn.addEventListener(
                "click",
                () => {
                    

                    buttons.forEach(b => { b.classList.remove("active"); b.setAttribute("aria-selected", "false"); });
                    panels.forEach(p  => { p.hidden = true; });

                    btn.classList.add("active");
                    btn.setAttribute("aria-selected", "true");
                    panels[i].hidden = false;
                }
            );
        }
    );
}

RandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

function StartUpdateLoadMessage()
{
    let loadingIndex = 0;
    const loadingStates =
    [
        "Loading.",
        "Loading..",
        "Loading..."
    ];

    pageContent.textContent = loadingStates[loadingIndex];

    const intervalHandle = setInterval(
        () =>
        {
            loadingIndex = (loadingIndex + 1) % loadingStates.length;

            pageContent.textContent = loadingStates[loadingIndex];
        }, 
        300
    );

    return intervalHandle;
}

async function TryLoadSpecificPageContent(project)
{
    const pageContent = document.getElementById("pageContent");

    const updateLoadingMessageIntervalHandle = StartUpdateLoadMessage(pageContent);

    try
    {
        const path = `${project.ProjectName}/PageContent.html`;
        const response = await fetch(path);

        if (!response.ok)
            throw new Error(`Failed to load ${path}`);

        const html = await response.text();

        clearInterval(updateLoadingMessageIntervalHandle);

        pageContent.innerHTML = html;

        hljs.highlightAll();
        LinkTabSystem();
    }
    catch (error)
    {
        clearInterval(updateLoadingMessageIntervalHandle);

        pageContent.innerHTML = 
        `
        <h2>Failed to load page content :(</h2>
        <p>This probably means the page is still in the work. Thankfully you can still take a look at the repository</p>
        `;

        console.error(error);
    }
}

function UpdateNavBar(project)
{
    document.getElementById("navBar").innerHTML = 
        `
        <a href="../../index.html" class="back-link">← Back</a>
        <span class="nav-label">${project.DisplayName}</span>
        `
    ;
}

function UpdateProjectHeader(project)
{
    document.getElementById("projectHeader").innerHTML = 
        `
        <div class="project-hero-content">
            <div class="project-meta-tag">PROJECT</div>
            <h1 class="project-title">${project.DisplayName}</h1>
            <p class="project-short-desc">${project.ShortDesc}</p>
        </div>
        `
    ;
}

function UpdateExpandedTechStackListItem(event)
{
    const header = event.target.closest(".tech-header");
    const item = header?.closest(".tech-item");
    const shouldExpandItem = !(item?.classList.contains("open") ?? true);
    
    // close all
    document.querySelectorAll(".tech-item.open").forEach(
        element => element.classList.remove("open")
    );

    if (shouldExpandItem)
        item.classList.add("open");        
}

function CreateTechStackListElement(tech)
{
    return `
            <li class="tech-item">
                <button class="tech-header">
                    ${TECH_STACK[tech].TechName}
                </button>
                
                <div class="tech-content">
                    <div>
                        <h3>${TECH_STACK[tech].TechName}</h3>
                        <p>${TECH_STACK[tech].TechDesc}</p>
                    </div>
                </div>
            </li>
            `;
}

function UpdateTechStackList(project)
{ 
    const techStackParts = [];
    for (const tech of project.TechStack)
        techStackParts.push(CreateTechStackListElement(tech));

    document.getElementById("techStack").innerHTML = 
        `
        <h2 class="project-section-title">Tech Used</h2>
        <ul  class="tech-list">
            ${techStackParts.join("")}
        </ul>
        `
    ;

    document.addEventListener("click", UpdateExpandedTechStackListItem);
}

function UpdateProjectFullDescription(project)
{
    document.getElementById("projectFullDesc").innerHTML = 
        `
        <h2 class="project-section-title">Description</h2>
        <div class="project-text">
            ${project.FullDesc}
        </div>
        `
    ;
}

function UpdateRepoLink(project)
{
    document.getElementById("repoLink").innerHTML = 
        `
        <h2 class="project-section-title">Repository</h2>
        <a href="${project.Repo}" class="repo-link" target="_blank">
            <span class="repo-icon">⌥</span>
            <span>${project.DisplayName}</span>
            <span class="repo-arrow">→</span>
        </a>
        `
    ;
}

function LoadProjectData()
{
    const projectIndex = new URLSearchParams(window.location.search).get("id");
    if (PROJECTS.length <= projectIndex)
    {
        // if project is missing replaces all page s content with big title saying it s missing
        document.body.innerHTML = `<h1>Project ${projectIndex} not found</h1>`;
        return;
    }

    const project = PROJECTS[projectIndex];
    
    document.title = project.DisplayName; // update tab title
    
    UpdateNavBar(project);
    UpdateProjectHeader(project);
    UpdateTechStackList(project);
    UpdateProjectFullDescription(project);
    UpdateRepoLink(project);
    
    TryLoadSpecificPageContent(project);
}

LoadProjectData();