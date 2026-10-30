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
                    panels.forEach(p  => p.hidden = true);

                    btn.classList.add("active");
                    btn.setAttribute("aria-selected", "true");
                    panels[i].hidden = false;
                }
            );
        }
    );
}

function RandomInt(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function StartUpdateLoadMessage(pageContent)
{
    let loadingIndex = 0;
    const loadingStates =
    [
        `${T("project.loading")}.`,
        `${T("project.loading")}..`,
        `${T("project.loading")}...`
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

async function TryFetchText(path)
{
    try
    {
        const response = await fetch(path);
        return response.ok ? await response.text() : null;
    }
    catch
    {
        return null;
    }
}

// tries PageContent.<lang>.html first then falls back to the english PageContent.html
async function FetchPageContent(project)
{
    if (CURRENT_LANGUAGE !== DEFAULT_LANGUAGE)
    {
        const translatedHtml = await TryFetchText(`${project.ProjectName}/PageContent.${CURRENT_LANGUAGE}.html`);
        if (translatedHtml != null)
            return translatedHtml;
    }

    const path = `${project.ProjectName}/PageContent.html`;
    const html = await TryFetchText(path);

    if (html == null)
        throw new Error(`Failed to load ${path}`);

    if (CURRENT_LANGUAGE === DEFAULT_LANGUAGE)
        return html;

    return `<p class="translation-notice">${T("project.notTranslated")}</p>${html}`;
}

async function TryLoadSpecificPageContent(project)
{
    const pageContent = document.getElementById("pageContent");

    const updateLoadingMessageIntervalHandle = StartUpdateLoadMessage(pageContent);

    try
    {
        const html = await FetchPageContent(project);

        clearInterval(updateLoadingMessageIntervalHandle);

        pageContent.innerHTML = html;

        HighlightCodeBlocks(pageContent);
        LinkTabSystem();
    }
    catch (error)
    {
        clearInterval(updateLoadingMessageIntervalHandle);

        pageContent.innerHTML = 
        `
        <h2>${T("project.loadFailedTitle")}</h2>
        <p>${T("project.loadFailedText")}</p>
        `;

        console.error(error);
    }
}

function UpdateNavBar(project)
{
    document.getElementById("navBar").innerHTML = 
        `
        <a href="../index.html" class="back-link">${T("project.back")}</a>
        <div class="nav-right">
            <span class="nav-label">${Localize(project.DisplayName)}</span>
            ${MakeLanguageSwitch()}
        </div>
        `
    ;
}

function UpdateProjectHeader(project)
{
    document.getElementById("projectHeader").innerHTML = 
        `
        <div class="project-hero-content">
            <div class="project-meta-tag">${T("project.tag")}</div>
            <h1 class="project-title">${Localize(project.DisplayName)}</h1>
            <p class="project-short-desc">${Localize(project.Description)}</p>
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
                        <p>${Localize(TECH_STACK[tech].TechDesc)}</p>
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
        <h2 class="project-section-title">${T("project.techUsed")}</h2>
        <ul  class="tech-list">
            ${techStackParts.join("")}
        </ul>
        `
    ;

    document.addEventListener("click", UpdateExpandedTechStackListItem);
}

function UpdateRepoLink(project)
{
    document.getElementById("repoLink").innerHTML = 
        `
        <h2 class="project-section-title">${T("project.repository")}</h2>
        <a href="${project.Repo}" class="repo-link" target="_blank">
            <span class="repo-icon">⌥</span>
            <span>${Localize(project.DisplayName)}</span>
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
        document.body.innerHTML = `<h1>${T("project.notFound")} (${projectIndex})</h1>`;
        return;
    }

    const project = PROJECTS[projectIndex];

    ApplyStaticTranslations();
    document.title = Localize(project.DisplayName); // update tab title
    
    UpdateNavBar(project);
    UpdateProjectHeader(project);
    UpdateTechStackList(project);
    UpdateRepoLink(project);
    
    TryLoadSpecificPageContent(project);
}

LoadProjectData();