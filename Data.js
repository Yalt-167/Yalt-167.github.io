const TECH_STACK =
[
    {
        TechName: "Unity",
        Category: "Engine",
        TechDesc:
        {
            en: "Cross-platform game engine used for 2D and 3D game development with a rich editor and asset pipeline.",
            fr: "Moteur de jeu multiplateforme pour le développement 2D et 3D, doté d'un éditeur complet et d'un pipeline d'assets.",
        },
    },

    {
        TechName: "Unity Netcode",
        Category: "Library",
        TechDesc:
        {
            en: "Unity's first-party networking library for multiplayer games using client-server and host architectures.",
            fr: "Bibliothèque réseau officielle de Unity pour les jeux multijoueurs, en architecture client-serveur ou host.",
        },
    },

    {
        TechName: "Unreal Engine",
        Category: "Engine",
        TechDesc:
        {
            en: "High-fidelity game engine by Epic Games with Blueprints, C++ gameplay systems, and AAA rendering pipeline.",
            fr: "Moteur de jeu haute fidélité d'Epic Games, avec Blueprints, gameplay en C++ et pipeline de rendu AAA.",
        },
    },
    
    {
        TechName: "C#",
        Category: "Language",
        TechDesc:
        {
            en: "Strongly-typed language used for Unity scripting and .NET development.",
            fr: "Langage fortement typé utilisé pour le scripting Unity et le développement .NET.",
        },
    },
    
    {
        TechName: "C++",
        Category: "Language",
        TechDesc:
        {
            en: "High-performance systems language used in game engines, Unreal Engine, and engine development.",
            fr: "Langage système haute performance utilisé dans les moteurs de jeu, Unreal Engine et le développement de moteurs.",
        },
    },
    
    {
        TechName: "C",
        Category: "Language",
        TechDesc:
        {
            en: "Low-level procedural language used for systems programming and engine foundations.",
            fr: "Langage procédural bas niveau utilisé pour la programmation système et les fondations des moteurs.",
        },
    },

    {
        TechName: "SDL",
        Category: "Library",
        TechDesc:
        {
            en: "Cross-platform multimedia library providing low-level access to input, audio, and graphics.",
            fr: "Bibliothèque multimédia multiplateforme offrant un accès bas niveau aux entrées, à l'audio et aux graphismes.",
        },
    },
    
    {
        TechName: "SFML",
        Category: "Library",
        TechDesc:
        {
            en: "C++ multimedia library for 2D graphics, audio, and window management.",
            fr: "Bibliothèque multimédia C++ pour les graphismes 2D, l'audio et la gestion des fenêtres.",
        },
    },
    
    {
        TechName: "Winsock2",
        Category: "Library",
        TechDesc:
        {
            en: "Windows networking API for TCP/UDP socket programming.",
            fr: "API réseau de Windows pour la programmation de sockets TCP/UDP.",
        },
    },
    
    {
        TechName: "Python",
        Category: "Language",
        TechDesc:
        {
            en: "High-level language used for scripting, tooling, automation, and prototyping.",
            fr: "Langage haut niveau utilisé pour le scripting, l'outillage, l'automatisation et le prototypage.",
        },
    },
    
    {
        TechName: "Pygame",
        Category: "Library",
        TechDesc:
        {
            en: "Python game library built on SDL for 2D game development.",
            fr: "Bibliothèque de jeu Python basée sur SDL pour le développement de jeux 2D.",
        },
    },
    
    {
        TechName: "Assimp",
        Category: "Library",
        TechDesc:
        {
            en: "Asset import library for loading 3D models (FBX, OBJ, GLTF, etc.).",
            fr: "Bibliothèque d'import d'assets pour charger des modèles 3D (FBX, OBJ, GLTF, etc.).",
        },
    },
    
    {
        TechName: "miniaudio",
        Category: "Library",
        TechDesc:
        {
            en: "Single-header audio library for playback and processing with no dependencies.",
            fr: "Bibliothèque audio sans dépendance, tenant en un seul header, pour la lecture et le traitement du son.",
        },
    },
    
    {
        TechName: "DirectX 11",
        Category: "Library",
        TechDesc:
        {
            en: "Low-level graphics API for real-time rendering and GPU programming on Windows.",
            fr: "API graphique bas niveau pour le rendu temps réel et la programmation GPU sous Windows.",
        },
    },

    {
        TechName: "ImGUI",
        Category: "Library",
        TechDesc:
        {
            en: "Immediate Mode Graphical user interface library for fast and lightweight debugging tools and editor interfaces.",
            fr: "Bibliothèque d'interface graphique en mode immédiat pour des outils de debug et des interfaces d'éditeur rapides et légers.",
        },
    },

    {
        TechName: " GitHub",
        Category: "Tool",
        TechDesc:
        {
            en: "Distributed version control and collaboration platform for code hosting, pull requests, and issue tracking. Includes GitHub Actions for CI/CD pipelines, enabling automated builds, testing, and deployment workflows integrated directly into repositories.",
            fr: "Plateforme de gestion de versions distribuée et de collaboration pour l'hébergement de code, les pull requests et le suivi des issues. Inclut GitHub Actions pour les pipelines CI/CD, qui automatisent builds, tests et déploiements directement depuis les dépôts.",
        },
    },

    {
        TechName: " GitHubActions",
        Category: "Tool",
        TechDesc:
        {
            en: "CI/CD automation system integrated into GitHub repositories, used to define workflows for building, testing, and deploying applications. Supports event-driven pipelines triggered by pushes, pull requests, schedules, and manual dispatch, with reusable actions and self-hosted or hosted runners.",
            fr: "Système d'automatisation CI/CD intégré aux dépôts GitHub, utilisé pour définir des workflows de build, de test et de déploiement. Les pipelines peuvent être déclenchés par des push, des pull requests, une planification ou manuellement, avec des actions réutilisables et des runners hébergés par GitHub ou auto-hébergés.",
        },
    },
];

const UNITY = 0;
const NETCODE = 1;
const UNREAL_ENGINE = 2;
const CSHARP = 3;
const CPP = 4;
const C = 5;
const SDL = 6;
const SFML = 7;
const WINSOCK2 = 8;
const PYTHON = 9;
const PYGAME = 10;
const ASSIMP = 11;
const MINIAUDIO = 12;
const DIRECTX11 = 13;
const IMGUI = 14;
const GITHUB = 15;
const GITHUB_ACTIONS = 16;

// {
//     ProjectName: "NAME OF THE FOLDER RELATED TO THAT PROJECT",
//     DisplayName: "DISPLAY NAME FOR PROJECT CARD" or { en: "...", fr: "..." },
//     Description: { en: "SHORT DESC FOR PROJECT CARD", fr: "COURTE DESCRIPTION" },
//     (page content: PageContent.html + optional PageContent.fr.html)
//     TechStack: [TECH, STACK],
//     Repo: "https://github.com/Yalt-167/REPO_NAME",
// },


const PROJECTS =
[
    { // procedural gen
        ProjectName: "ProceduralGeneration",
        DisplayName: { en: "Procedural Generation", fr: "Génération procédurale" },
        Description:
        {
            en: "Voxel Generation project made in a week for a school project",
            fr: "Projet de génération de voxels réalisé en une semaine dans le cadre d'un projet scolaire",
        },
        TechStack: [UNITY, CSHARP],
        Repo: "https://github.com/Yalt-167/ProjetGenerationProcedurale",
    },

    {  // tic tac toe
        ProjectName: "MultiplayerTicTacToe",
        DisplayName: { en: "Multiplayer TicTacToe", fr: "Morpion multijoueur" },
        Description:
        {
            en: "Real time multiplayer TicTacToe written in raw C++",
            fr: "Morpion multijoueur en temps réel écrit en C++ pur",
        },
        TechStack: [CPP, SFML, WINSOCK2, IMGUI],
        Repo: "https://github.com/Yalt-167/TicTacToeMultiplayer",
    },

    { // Oath of the volcano
        ProjectName: "OathOfTheVolcano",
        DisplayName: "Oath Of The Volcano",
        Description:
        {
            en: "Small Unreal Engine roguelike in which the player is locked in a 60s time loop",
            fr: "Petit roguelike sous Unreal Engine dans lequel le joueur est enfermé dans une boucle temporelle de 60 secondes",
        },
        TechStack: [UNREAL_ENGINE],
        Repo: "https://github.com/AriLeGrand/Oath-of-the-volcano",
    }, 

    { // MultiplayerFPSPOC
        ProjectName: "MultiplayerFPS_POC",
        DisplayName: { en: "Multiplayer FPS POC", fr: "POC de FPS multijoueur" },
        Description:
        {
            en: "Custom FPS multiplayer architecture using Unity & Netcode (POC)",
            fr: "Architecture multijoueur sur mesure pour un FPS avec Unity et Netcode (POC)",
        },
        TechStack: [UNITY, NETCODE, CSHARP],
        Repo: "https://github.com/Yalt-167/MultiplayerFPS_POC",
    },
    
    // { // doxar engine
    //     ProjectName: "Doxar",
    //     DisplayName: "Doxar Engine",
    //     Description: "Mini game engine written in C++ over the course of 6 weeks for a school project",
    //     TechStack: [CPP, DIRECTX11, MINIAUDIO, ASSIMP, IMGUI],
    //     Repo: "https://github.com/Yalt-167/Doxar",
    // },
    
    { // RType
        ProjectName: "RType",
        DisplayName: { en: "R-Type game", fr: "Jeu R-Type" },
        Description:
        {
            en: "Up to 2 player (local) R-Type like written in C and SDL",
            fr: "Jeu de type R-Type jusqu'à 2 joueurs (en local) écrit en C avec SDL",
        },
        TechStack: [C, SDL],
        Repo: "https://github.com/MagnierHugo/C-RType",
    },

    // { // MicWizard
    //     ProjectName: "MicWizard",
    //     DisplayName: "MicWizard",
    //     Description: "Microphone controlled game (POC) where you can cast spells using your voice to fend of waves of enemies",
    //     TechStack: [UNITY, CSHARP],
    //     Repo: "https://github.com/MagnierHugo/MicWizard",
    // },

    // {
    //     ProjectName: "Click&Crash",
    //     DisplayName: "Click&Crash",
    //     Description: "Small 2D parkour game where your player dashes around a course of obstacle while its own speed blinds him",
    //     FullDesc: 
    //         `
    //         <pClick & Crash is a fast-paced 2D dash game where visibility is limited and precision is critical.
    //         <p></p>Players clear handcrafted levels by dashing across a dangerous track as quickly as possible, earning a score based on completion time.
    //         `,
    //     TechStack: [UNREAL_ENGINE],
    //     Repo: "https://github.com/MagnierHugo/Click-Crash",
    // },

    {
        ProjectName: "SpaceWar_TDD_CI-CD",
        DisplayName: { en: "TDD and CI-CD project", fr: "Projet TDD et CI/CD" },
        Description:
        {
            en: "Small project aiming at setting up a TDD and CI-CD architecture and understand their purpose",
            fr: "Petit projet visant à mettre en place une architecture TDD et CI/CD et à comprendre leur intérêt",
        },
        TechStack: [UNITY, CSHARP, GITHUB, GITHUB_ACTIONS],
        Repo: "https://github.com/Yalt-167/SpaceWar_TDD_CI-CD",
    },
];

console.log("Data loaded");