const SUPPORTED_LANGUAGES = ["en", "fr"];
const DEFAULT_LANGUAGE = "en";
const LANGUAGE_STORAGE_KEY = "language";

const STRINGS =
{
    en:
    {
        "page.title": "Portfolio: Riviale Antoine",
        "hero.role": "Gameplay Programmer / Engine Developer",
        "hero.intro":
            `Gameplay Programmer / Engine Developer focused on building <b>performant</b> and <b>immersive</b> real-time systems and engaging gameplay features.<br><br>

            Experienced with <b>Unity</b>, <b>Unreal Engine</b>, and low-level languages, I have a strong interest in understanding engine-level behavior and <b>memory/performance tradeoffs</b>.
            I am passionate about developing <b>efficient</b> and <b>scalable</b> systems for high-performance, reliable software.<br><br>

            Strong <b>communication</b> and <b>problem-solving</b> skills with the ability to collaborate effectively.<br><br>`,
        "hero.wip": "This page is a work in progress and most projects aren't there yet. They're still accessible on my github page tho :)",
        "projects.title": "Featured Projects",
        "contact.title": "Contact",
        "contact.email": "Email",
        "contact.copyEmail": "Copy Email",
        "contact.copied": "Email copied!",

        "filters.engine": "Engine",
        "filters.language": "Language",
        "filters.all": "All",
        "filters.noEngine": "No engine",
        "filters.noMatch": "No project matches these filters.",
        "card.imageMissing": "Image not found",

        "project.tag": "PROJECT",
        "project.techUsed": "Tech Used",
        "project.repository": "Repository",
        "project.back": "← Back",
        "project.backToAll": "← Back to all projects",
        "project.loading": "Loading",
        "project.notFound": "Project not found",
        "project.loadFailedTitle": "Failed to load page content :(",
        "project.loadFailedText": "This probably means the page is still in the work. Thankfully you can still take a look at the repository",
        "project.notTranslated": "",
    },

    fr:
    {
        "page.title": "Portfolio : Riviale Antoine",
        "hero.role": "Gameplay Programmer / Engine Developer",
        "hero.intro":
            `Gameplay Programmer / Engine Developer spécialisé dans la création de systèmes temps réel <b>performants</b> et <b>immersifs</b> et de mécaniques de jeu engageantes.<br><br>

            Expérimenté avec <b>Unity</b>, <b>Unreal Engine</b> et les langages bas niveau, je m'intéresse particulièrement au fonctionnement interne des moteurs et aux <b>compromis mémoire/performance</b>.
            Je suis passionné par le développement de systèmes <b>efficaces</b> et <b>évolutifs</b> pour des logiciels fiables et performants.<br><br>

            De solides compétences en <b>communication</b> et en <b>résolution de problèmes</b>, et une vraie capacité à travailler en équipe.<br><br>`,
        "hero.wip": "Cette page est en cours de construction et la plupart des projets n'y sont pas encore. Ils restent accessibles sur mon GitHub :)",
        "projects.title": "Projets",
        "contact.title": "Contact",
        "contact.email": "Email",
        "contact.copyEmail": "Copier l'email",
        "contact.copied": "Email copié !",

        "filters.engine": "Moteur",
        "filters.language": "Langage",
        "filters.all": "Tous",
        "filters.noEngine": "Sans moteur",
        "filters.noMatch": "Aucun projet ne correspond à ces filtres.",
        "card.imageMissing": "Image introuvable",

        "project.tag": "PROJET",
        "project.techUsed": "Technologies utilisées",
        "project.repository": "Dépôt",
        "project.back": "← Retour",
        "project.backToAll": "← Retour à tous les projets",
        "project.loading": "Chargement",
        "project.notFound": "Projet introuvable",
        "project.loadFailedTitle": "Impossible de charger le contenu de la page :(",
        "project.loadFailedText": "La page est sans doute encore en cours de rédaction. Vous pouvez tout de même consulter le dépôt",
        "project.notTranslated": "Cette page n'est pas encore traduite, elle est affichée en anglais.",
    },
};

function TryReadStoredLanguage()
{
    try
    {
        return localStorage.getItem(LANGUAGE_STORAGE_KEY);
    }
    catch
    {
        return null; // storage can be blocked (private mode, disabled cookies...)
    }
}

function DetectLanguage()
{
    // priority: ?lang= in the URL > saved choice > browser language > default
    const candidates =
    [
        new URLSearchParams(window.location.search).get("lang"),
        TryReadStoredLanguage(),
        ...(navigator.languages ?? [navigator.language]).map(language => language?.slice(0, 2)),
    ];

    return candidates.find(language => SUPPORTED_LANGUAGES.includes(language)) ?? DEFAULT_LANGUAGE;
}

const CURRENT_LANGUAGE = DetectLanguage();

function SetLanguage(language)
{
    try
    {
        localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    }
    catch
    {
        // the URL parameter below still carries the choice for this page
    }

    // everything is rendered from JS so reloading is the simplest way to switch
    const url = new URL(window.location.href);
    url.searchParams.set("lang", language);
    window.location.href = url.toString();
}

// translated UI string, falls back to english then to the key itself
function T(key)
{
    return STRINGS[CURRENT_LANGUAGE][key] ?? STRINGS[DEFAULT_LANGUAGE][key] ?? key;
}

// data fields can either be a plain string or { en: "...", fr: "..." }
function Localize(value)
{
    if (value == null || typeof value === "string")
        return value;

    return value[CURRENT_LANGUAGE] ?? value[DEFAULT_LANGUAGE];
}

function MakeLanguageSwitch()
{
    const buttons = SUPPORTED_LANGUAGES.map(
        language => `<button class="lang-btn${language === CURRENT_LANGUAGE ? " active" : ""}" data-lang="${language}">${language.toUpperCase()}</button>`
    );

    return `<div class="lang-switch">${buttons.join("")}</div>`;
}

function OnLanguageButtonClicked(event)
{
    const button = event.target.closest(".lang-btn");
    if (button == null || button.dataset.lang === CURRENT_LANGUAGE)
        return;

    SetLanguage(button.dataset.lang);
}

// fills every element tagged with data-i18n (text) or data-i18n-html (markup)
function ApplyStaticTranslations()
{
    document.documentElement.lang = CURRENT_LANGUAGE;

    document.querySelectorAll("[data-i18n]").forEach(
        element => element.textContent = T(element.dataset.i18n)
    );
    document.querySelectorAll("[data-i18n-html]").forEach(
        element => element.innerHTML = T(element.dataset.i18nHtml)
    );
}

document.addEventListener("click", OnLanguageButtonClicked);
