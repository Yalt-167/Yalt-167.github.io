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
        TechDesc: "Graphical user interface library for fast and lightweight debugging tools and editor interfaces."
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

// {
//     ProjectName: "NAME OF THE FOLDER RELATED TO THAT PROJECT",
//     DisplayName: "DISPLAY NAME FOR PROJECT CARD,
//     ShortDesc: "SHORT DESC FOR PROJECT CARD,
//     FullDesc: 
//              `<p class="indented-text-content">
//                  HTML FORMATED FULL DESCRIPTION OF THE PROJECT.
//                  WHAT DOES IT DO?
//                  WHAT PROBLEM DOES IT SOLVE? WHAT WAS MY ROLE?
//               </p>
//              `,
//     TechStack: [TECH, STACK],
//     Repo: "https://github.com/Yalt-167/REPO_NAME",
// },


const PROJECTS =
[
    {
        ProjectName: "ProceduralGeneration",
        DisplayName: "Procedural Generation",
        ShortDesc: "Voxel Generation project made in a week for a school project",
        FullDesc: 
            `
            <p><b>Procedural Generation:</b></p>
            <p class="indented-text-content">
                Procedural generation is a technique used to automatically create content algorithmically instead of manually.
                This is the way games such as Minecraft and No Man's Sky generate virtually infinite words impossible to create by hand.
                This approach increases replayability and enables large-scale and varied content while reducing manual workload.<br><br>
            </p>
            <p class="indented-text-content">
                In this project environment is generated at runtime using deterministic rules and randomized inputs (seeded for reproducibility).
            </p>
            
            `,
        TechStack: [UNITY, CSHARP],
        Repo: "https://github.com/Yalt-167/ProjetGenerationProcedurale",
    }, // procedural gen

    {
        ProjectName: "MultiplayerTicTacToe",
        DisplayName: "Multiplayer TicaTacToe",
        ShortDesc: "Real time multiplayer TicTacToe written in raw C++",
        FullDesc: 
            `
            <p><b>Multiplayer Networking:</b></p>

            <p class="indented-text-content">
                This project is a multiplayer Tic Tac Toe game developed in C++ using SDL for rendering/input handling,
                WinSock2 for network communication, and ImGUI for the user interface and in-game chat system.
                The application allows two players to connect over a local network or the internet and play in real time
                through a client/server architecture.<br><br>
            </p>

            <p class="indented-text-content">
                Network synchronization is handled using TCP sockets through WinSock2 to ensure reliable transmission
                of game state updates and chat messages between players. SDL is responsible for window management,
                rendering, and input processing while ImGUI provides a lightweight and responsive debugging and chat interface.
                The project focuses on real-time communication, game state synchronization, and low-level networking concepts in C++.
            </p>
            `,
        TechStack: [CPP, SFML, WINSOCK2, IMGUI],
        Repo: "https://github.com/Yalt-167/TicTacToeMultiplayer",
    }, // tic tac toe

    {
        ProjectName: "FPS_Netcode",
        DisplayName: "Multiplayer FPS Netcode",
        ShortDesc: "Custom FPS multiplayer architecture using Unity & Netcode (POC)",
        FullDesc: "TODO FULL DESC FOR MULTIPLAYER FPS ",
        TechStack: [UNITY, NETCODE, CSHARP],
        Repo: "https://github.com/Yalt-167/Multiplayer_Shooter",
    }, // fps netcode
    
    {
        ProjectName: "Doxar",
        DisplayName: "Doxar Engine",
        ShortDesc: "Mini game engine written in C++ over the course of 6 weeks for a school project",
        FullDesc: "Custom FPS multiplayer architecture using Unity & Netcode.",
        TechStack: [CPP, DIRECTX11, MINIAUDIO, ASSIMP, IMGUI],
        Repo: "https://github.com/Yalt-167/Doxar",
    }, // doxar engine
    
    {
        ProjectName: "RType",
        DisplayName: "R-Type game",
        ShortDesc: "Up to 2 player (local) R-Type like written in C and SDL",
        FullDesc: "Custom FPS multiplayer architecture using Unity & Netcode.",
        TechStack: [C, SDL],
        Repo: "https://github.com/MagnierHugo/C-RType",
    }, // RType

    {
        ProjectName: "MicWizard",
        DisplayName: "MicWizard",
        ShortDesc: "Microphone controlled game (POC) where you can cast spells using your voice to fend of waves of enemies",
        FullDesc: "Custom FPS multiplayer architecture using Unity & Netcode.",
        TechStack: [UNITY, CSHARP],
        Repo: "https://github.com/MagnierHugo/MicWizard",
    },

    {
        ProjectName: "Click&Crash",
        DisplayName: "Click&Crash",
        ShortDesc: "Small 2D parkour game where your player dashes around a course of obstacle while its own speed blinds him",
        FullDesc: "Custom FPS multiplayer architecture using Unity & Netcode.",
        TechStack: [UNREAL_ENGINE],
        Repo: "https://github.com/MagnierHugo/Click-Crash",
    },
];

console.log("Data loaded");