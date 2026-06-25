const TECH_STACK =
[
    {
        TechName: "Unity",
        TechDesc: "Cross-platform game engine used for 2D and 3D game development with a rich editor and asset pipeline."
    },

    {
        TechName: "Unity Netcode",
        TechDesc: "Unity's first-party networking library for multiplayer games using client-server and host architectures."
    },

    {
        TechName: "Unreal Engine",
        TechDesc: "High-fidelity game engine by Epic Games with Blueprints, C++ gameplay systems, and AAA rendering pipeline."
    },
    
    {
        TechName: "C#",
        TechDesc: "Strongly-typed language used for Unity scripting and .NET development."
    },
    
    {
        TechName: "C++",
        TechDesc: "High-performance systems language used in game engines, Unreal Engine, and engine development."
    },
    
    {
        TechName: "C",
        TechDesc: "Low-level procedural language used for systems programming and engine foundations."
    },

    {
        TechName: "SDL",
        TechDesc: "Cross-platform multimedia library providing low-level access to input, audio, and graphics."
    },
    
    {
        TechName: "SFML",
        TechDesc: "C++ multimedia library for 2D graphics, audio, and window management."
    },
    
    {
        TechName: "Winsock2",
        TechDesc: "Windows networking API for TCP/UDP socket programming."
    },
    
    {
        TechName: "Python",
        TechDesc: "High-level language used for scripting, tooling, automation, and prototyping."
    },
    
    {
        TechName: "Pygame",
        TechDesc: "Python game library built on SDL for 2D game development."
    },
    
    {
        TechName: "Assimp",
        TechDesc: "Asset import library for loading 3D models (FBX, OBJ, GLTF, etc.)."
    },
    
    {
        TechName: "miniaudio",
        TechDesc: "Single-header audio library for playback and processing with no dependencies."
    },
    
    {
        TechName: "DirectX 11",
        TechDesc: "Low-level graphics API for real-time rendering and GPU programming on Windows."
    },

    {
        TechName: "ImGUI",
        TechDesc: "Immediate Mode Graphical user interface library for fast and lightweight debugging tools and editor interfaces."
    },

    {
        TechName: " GitHub",
        TechDesc: "Distributed version control and collaboration platform for code hosting, pull requests, and issue tracking. Includes GitHub Actions for CI/CD pipelines, enabling automated builds, testing, and deployment workflows integrated directly into repositories."
    },

    {
        TechName: " GitHubActions",
        TechDesc: "CI/CD automation system integrated into GitHub repositories, used to define workflows for building, testing, and deploying applications. Supports event-driven pipelines triggered by pushes, pull requests, schedules, and manual dispatch, with reusable actions and self-hosted or hosted runners.",
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
//     DisplayName: "DISPLAY NAME FOR PROJECT CARD,
//     Description: "SHORT DESC FOR PROJECT CARD,
//     TechStack: [TECH, STACK],
//     Repo: "https://github.com/Yalt-167/REPO_NAME",
// },


const PROJECTS =
[
    { // procedural gen
        ProjectName: "ProceduralGeneration",
        DisplayName: "Procedural Generation",
        Description: "Voxel Generation project made in a week for a school project",
        TechStack: [UNITY, CSHARP],
        Repo: "https://github.com/Yalt-167/ProjetGenerationProcedurale",
    },

    {  // tic tac toe
        ProjectName: "MultiplayerTicTacToe",
        DisplayName: "Multiplayer TicaTacToe",
        Description: "Real time multiplayer TicTacToe written in raw C++",
        TechStack: [CPP, SFML, WINSOCK2, IMGUI],
        Repo: "https://github.com/Yalt-167/TicTacToeMultiplayer",
    },

    { // Oath of the volcano
        ProjectName: "OathOfTheVolcano",
        DisplayName: "Oath Of The Volcano",
        Description: "Small Unreal Engine roguelike in which the player is locked in a 60s time loop",
        TechStack: [UNREAL_ENGINE],
        Repo: "https://github.com/AriLeGrand/Oath-of-the-volcano",
    }, 

    { // MultiplayerFPSPOC
        ProjectName: "MultiplayerFPS_POC",
        DisplayName: "Multiplayer FPS POC",
        Description: "Custom FPS multiplayer architecture using Unity & Netcode (POC)",
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
    
    // { // RType
    //     ProjectName: "RType",
    //     DisplayName: "R-Type game",
    //     Description: "Up to 2 player (local) R-Type like written in C and SDL",
    //     TechStack: [C, SDL],
    //     Repo: "https://github.com/MagnierHugo/C-RType",
    // },

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
        DisplayName: "TDD and CI-CD project",
        Description: "Small project aiming at setting up an TDD and CI-CD architecture and understand their purpose",
        TechStack: [UNITY, GITHUB, GITHUB_ACTIONS],
        Repo: "https://github.com/Yalt-167/SpaceWar_TDD_CI-CD",
    },
];

console.log("Data loaded");