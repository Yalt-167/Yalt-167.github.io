// Syntax highlighter mimicking Visual Studio's default dark theme for C#, C++ and C.
// Each <pre><code class="language-xxx"> block is tokenized, then every identifier is classified
// (type, function, parameter, local, field, macro...) from its declaration or its position,
// the same way Visual Studio's semantic colorization does.

const C_KEYWORDS =
[
    "auto", "char", "const", "double", "enum", "extern", "float", "inline", "int", "long", "register",
    "restrict", "short", "signed", "sizeof", "static", "struct", "typedef", "union", "unsigned", "void",
    "volatile", "bool", "true", "false", "_Bool",
];

const CPP_KEYWORDS =
[
    ...C_KEYWORDS, "class", "namespace", "public", "private", "protected", "virtual", "override", "final",
    "new", "delete", "this", "nullptr", "template", "typename", "using", "operator", "friend", "explicit",
    "constexpr", "static_cast", "reinterpret_cast", "const_cast", "dynamic_cast", "noexcept", "mutable",
    "decltype", "wchar_t",
];

const CSHARP_KEYWORDS =
[
    "abstract", "as", "base", "bool", "byte", "char", "checked", "class", "const", "decimal", "delegate",
    "double", "enum", "event", "explicit", "extern", "false", "fixed", "float", "implicit", "int",
    "interface", "internal", "is", "lock", "long", "namespace", "new", "null", "object", "operator", "out",
    "override", "params", "private", "protected", "public", "readonly", "ref", "sbyte", "sealed", "short",
    "sizeof", "stackalloc", "static", "string", "struct", "this", "true", "typeof", "uint", "ulong",
    "unchecked", "unsafe", "ushort", "using", "var", "virtual", "void", "volatile", "async", "nameof",
    "partial", "record", "get", "set", "init", "dynamic",
];

const C_CONTROL_KEYWORDS = ["if", "else", "for", "while", "do", "switch", "case", "default", "break", "continue", "return", "goto"];
const CPP_CONTROL_KEYWORDS = [...C_CONTROL_KEYWORDS, "try", "catch", "throw", "co_return", "co_await", "co_yield"];
const CSHARP_CONTROL_KEYWORDS = [...C_CONTROL_KEYWORDS, "try", "catch", "finally", "throw", "foreach", "in", "yield", "await"];

// keywords that name a type, so a following identifier can be a variable name
const C_TYPE_KEYWORDS = ["auto", "char", "double", "float", "int", "long", "short", "signed", "unsigned", "void", "bool", "_Bool", "wchar_t"];
const CSHARP_TYPE_KEYWORDS = ["bool", "byte", "char", "decimal", "double", "float", "int", "long", "object", "sbyte", "short", "string", "uint", "ulong", "ushort", "var", "void", "dynamic"];

// types declared outside the snippets: name -> class | struct | enum | interface
const CSHARP_KNOWN_TYPES =
{
    class: ["GameObject", "Transform", "Mesh", "MeshFilter", "MeshRenderer", "Material", "Mathf", "Random",
            "Debug", "Dictionary", "List", "MeshUtility", "Assert", "MonoBehaviour", "Object", "Action",
            "Func", "Exception", "Console", "Math", "Array", "Time", "Input", "Physics", "Rigidbody",
            "Collider", "Camera", "Component", "ScriptableObject", "Task", "Coroutine", "NetworkBehaviour",
            "NetworkObject", "NetworkManager", "NetworkVariable", "ServerRpcParams", "ClientRpcParams"],
    struct: ["Vector3", "Vector2", "Vector2Int", "Vector3Int", "Quaternion", "Color", "KeyValuePair",
             "CombineInstance", "Rect", "Bounds", "Matrix4x4", "RaycastHit", "Ray", "LayerMask", "ulong"],
    enum: ["HideFlags", "IndexFormat", "KeyCode", "ForceMode", "Space", "SendTo"],
    interface: ["IEnumerable", "IEnumerator", "IDisposable"],
};

const C_KNOWN_TYPES =
{
    class: ["SDL_Rect", "SDL_Texture", "SDL_Event", "SDL_Renderer", "SDL_Window", "SDL_GameController",
            "SDL_Joystick", "SDL_Color", "SDL_Surface", "SDL_Scancode", "SDL_Keycode", "Uint8", "Uint16",
            "Uint32", "Sint16", "TTF_Font", "Mix_Chunk", "Mix_Music", "FILE", "size_t", "uint8_t", "uint16_t",
            "uint32_t", "uint64_t", "int8_t", "int16_t", "int32_t", "int64_t", "SOCKET", "WSADATA",
            "sockaddr_in", "sockaddr", "ImVec2", "ImVec4", "SDL"],
    struct: [],
    enum: [],
    interface: [],
};

// std:: names that are types (the others, like cout or sleep_for, are objects or functions)
const STD_TYPES = ["string", "vector", "thread", "unordered_map", "map", "set", "unordered_set", "array",
                   "mutex", "atomic", "unique_ptr", "shared_ptr", "pair", "tuple", "optional", "function",
                   "milliseconds", "seconds", "ostream", "istream", "stringstream"];

// namespaces colored as plain text instead of as types
const KNOWN_NAMESPACES = ["std", "chrono", "this_thread", "ImGui", "ImGUI", "SFML", "sf", "SimplexNoise", "UnityEngine", "System"];

const PYTHON_KEYWORDS = ["def", "class", "lambda", "None", "True", "False", "and", "or", "not", "is", "global", "nonlocal", "pass", "self", "async", "await", "del", "in"];
const PYTHON_CONTROL_KEYWORDS = ["if", "elif", "else", "for", "while", "try", "except", "finally", "raise", "return", "yield", "break", "continue", "with", "assert", "import", "from", "as"];
const PYTHON_KNOWN_TYPES = ["int", "str", "float", "bool", "list", "dict", "tuple", "set", "bytes", "object", "type", "Exception",
                            "NameError", "AttributeError", "KeyError", "ValueError", "TypeError", "IndexError", "Generator"];

const CODE_LANGUAGES =
{
    csharp:
    {
        CssClass: "vs-csharp",
        IsCSharp: true,
        Keywords: new Set(CSHARP_KEYWORDS),
        ControlKeywords: new Set(CSHARP_CONTROL_KEYWORDS),
        TypeKeywords: new Set(CSHARP_TYPE_KEYWORDS),
        KnownTypes: CSHARP_KNOWN_TYPES,
        IsCLike: false,
        HasStructColor: true,
    },
    cpp:
    {
        CssClass: "vs-cpp",
        Keywords: new Set(CPP_KEYWORDS),
        ControlKeywords: new Set(CPP_CONTROL_KEYWORDS),
        TypeKeywords: new Set(C_TYPE_KEYWORDS),
        KnownTypes: C_KNOWN_TYPES,
        IsCLike: true,
        HasStructColor: false,
    },
    c:
    {
        CssClass: "vs-c",
        Keywords: new Set(C_KEYWORDS),
        ControlKeywords: new Set(C_CONTROL_KEYWORDS),
        TypeKeywords: new Set(C_TYPE_KEYWORDS),
        KnownTypes: C_KNOWN_TYPES,
        IsCLike: true,
        HasStructColor: false,
    },
    python:
    {
        CssClass: "vs-python",
        IsPython: true,
        Keywords: new Set(PYTHON_KEYWORDS),
        ControlKeywords: new Set(PYTHON_CONTROL_KEYWORDS),
        TypeKeywords: new Set(),
        KnownTypes: { class: PYTHON_KNOWN_TYPES, struct: [], enum: [], interface: [] },
        IsCLike: false,
        HasStructColor: false,
    },
};

const OPERATORS = ["::", "->", "=>", "&&", "||", "==", "!=", "<=", ">=", "++", "--", "+=", "-=", "*=", "/=", "%=", "|=", "&=", "^="];
const DECLARATION_ENDS = new Set(["=", ";", ",", ")", "[", ":", "in", "{"]);


// ══════════════ tokenizer ══════════════

function IsIdentifierStart(character)
{
    return /[A-Za-z_]/.test(character);
}

// returns the index right after the closing quote of a regular "..." or '...' literal
function SkipQuoted(text, start, quote)
{
    let i = start + 1;
    while (i < text.length && text[i] !== quote && text[i] !== "\n")
        i += text[i] === "\\" ? 2 : 1;

    return Math.min(i + 1, text.length);
}

// C# $"..." / $@"...": string parts become strings, {expressions} are tokenized as code
function TokenizeInterpolatedString(text, start, language, tokens)
{
    const prefixLength = text[start + 1] === "@" || text[start + 1] === "$" ? 3 : 2;
    const isVerbatim = text.slice(start, start + prefixLength).includes("@");
    let i = start + prefixLength;
    let piece = text.slice(start, i);

    while (i < text.length)
    {
        const character = text[i];

        if (character === "{" && text[i + 1] === "{")
        {
            piece += "{{";
            i += 2;
        }
        else if (character === "{")
        {
            tokens.push({ Kind: "string", Text: piece });
            piece = "";

            let depth = 1;
            let end = i + 1;
            while (end < text.length && depth > 0)
            {
                if (text[end] === "{") depth++;
                else if (text[end] === "}") depth--;
                if (depth > 0) end++;
            }

            tokens.push({ Kind: "punct", Text: "{" });
            tokens.push(...Tokenize(text.slice(i + 1, end), language));
            tokens.push({ Kind: "punct", Text: "}" });
            i = end + 1;
        }
        else if (character === "\\" && !isVerbatim)
        {
            piece += text.slice(i, i + 2);
            i += 2;
        }
        else if (character === "\"" && isVerbatim && text[i + 1] === "\"")
        {
            piece += "\"\"";
            i += 2;
        }
        else if (character === "\"")
        {
            piece += "\"";
            i++;
            break;
        }
        else
        {
            piece += character;
            i++;
        }
    }

    if (piece !== "")
        tokens.push({ Kind: "string", Text: piece });

    return i;
}

// Python '...', "...", triple-quoted strings with r / b / f prefixes; f-string {expressions} are tokenized as code
function TokenizePythonString(text, start, prefix, quote, language, tokens)
{
    const isFormatted = /f/i.test(prefix);
    const isRaw = /r/i.test(prefix);
    let i = start + prefix.length + quote.length;
    let piece = text.slice(start, i);

    while (i < text.length)
    {
        if (text.startsWith(quote, i))
        {
            piece += quote;
            i += quote.length;
            break;
        }

        const character = text[i];
        if (character === "\\" && !isRaw)
        {
            piece += text.slice(i, i + 2);
            i += 2;
        }
        else if (isFormatted && (text.startsWith("{{", i) || text.startsWith("}}", i)))
        {
            piece += text.slice(i, i + 2);
            i += 2;
        }
        else if (isFormatted && character === "{")
        {
            tokens.push({ Kind: "string", Text: piece });
            piece = "";

            let depth = 1;
            let end = i + 1;
            while (end < text.length && depth > 0)
            {
                if (text[end] === "{") depth++;
                else if (text[end] === "}") depth--;
                if (depth > 0) end++;
            }

            tokens.push({ Kind: "punct", Text: "{" });
            tokens.push(...Tokenize(text.slice(i + 1, end), language));
            tokens.push({ Kind: "punct", Text: "}" });
            i = end + 1;
        }
        else if (character === "\n" && quote.length === 1)
        {
            break; // unterminated single-line string
        }
        else
        {
            piece += character;
            i++;
        }
    }

    if (piece !== "")
        tokens.push({ Kind: "string", Text: piece });

    return i;
}

// #include, #define and the others get different treatment
function TokenizePreprocessorLine(line, language, tokens)
{
    const directive = /^#\s*(\w+)/.exec(line);
    const name = directive ? directive[1] : "";

    if (language.IsCLike && name === "include")
    {
        const target = /^(\s*)(<[^>]*>|"[^"]*")(.*)$/s.exec(line.slice(directive[0].length));
        tokens.push({ Kind: "preproc", Text: directive[0] });
        if (target == null)
        {
            tokens.push({ Kind: "preproc", Text: line.slice(directive[0].length) });
            return;
        }

        tokens.push({ Kind: "ws", Text: target[1] }, { Kind: "string", Text: target[2] });
        tokens.push(...Tokenize(target[3], language));
        return;
    }

    if (language.IsCLike && name === "define")
    {
        const macro = /^(\s+)([A-Za-z_]\w*)/.exec(line.slice(directive[0].length));
        tokens.push({ Kind: "preproc", Text: directive[0] });
        if (macro == null)
            return;

        tokens.push({ Kind: "ws", Text: macro[1] }, { Kind: "macrodef", Text: macro[2] });
        tokens.push(...Tokenize(line.slice(directive[0].length + macro[0].length), language));
        return;
    }

    tokens.push({ Kind: "preproc", Text: line });
}

function Tokenize(text, language)
{
    const tokens = [];
    let atLineStart = true;
    let i = 0;

    while (i < text.length)
    {
        const character = text[i];
        const rest = text.slice(i);
        let match;

        if ((match = /^\s+/.exec(rest)))
        {
            tokens.push({ Kind: "ws", Text: match[0] });
            if (match[0].includes("\n"))
                atLineStart = true;
            i += match[0].length;
            continue;
        }

        if (language.IsPython && character === "#")
        {
            const end = text.indexOf("\n", i);
            const stop = end === -1 ? text.length : end;
            tokens.push({ Kind: "comment", Text: text.slice(i, stop) });
            i = stop;
            continue;
        }

        if (language.IsPython && (match = /^([rRbBuUfF]{0,2})('{3}|"{3}|'|")/.exec(rest)))
        {
            i = TokenizePythonString(text, i, match[1], match[2], language, tokens);
            atLineStart = false;
            continue;
        }

        if (atLineStart && character === "#")
        {
            // a preprocessor line can continue on the next one with a trailing backslash
            let end = i;
            while (end < text.length)
            {
                const newline = text.indexOf("\n", end);
                if (newline === -1) { end = text.length; break; }
                if (text.slice(end, newline).trimEnd().endsWith("\\")) { end = newline + 1; continue; }
                end = newline;
                break;
            }

            TokenizePreprocessorLine(text.slice(i, end), language, tokens);
            i = end;
            continue;
        }

        atLineStart = false;

        if (rest.startsWith("//"))
        {
            const end = text.indexOf("\n", i);
            const stop = end === -1 ? text.length : end;
            tokens.push({ Kind: "comment", Text: text.slice(i, stop) });
            i = stop;
        }
        else if (rest.startsWith("/*"))
        {
            const end = text.indexOf("*/", i + 2);
            const stop = end === -1 ? text.length : end + 2;
            tokens.push({ Kind: "comment", Text: text.slice(i, stop) });
            i = stop;
        }
        else if (language.IsCSharp && /^(\$@?|@\$)"/.test(rest))
        {
            i = TokenizeInterpolatedString(text, i, language, tokens);
        }
        else if (language.IsCSharp && rest.startsWith("@\""))
        {
            let end = i + 2;
            while (end < text.length && !(text[end] === "\"" && text[end + 1] !== "\""))
                end += text[end] === "\"" ? 2 : 1;
            tokens.push({ Kind: "string", Text: text.slice(i, end + 1) });
            i = end + 1;
        }
        else if (language.IsCSharp && (match = /^@[A-Za-z_]\w*/.exec(rest)))
        {
            tokens.push({ Kind: "ident", Text: match[0] });
            i += match[0].length;
        }
        else if (character === "\"" || character === "'")
        {
            const end = SkipQuoted(text, i, character);
            tokens.push({ Kind: "string", Text: text.slice(i, end) });
            i = end;
        }
        else if ((match = /^(0[xX][0-9a-fA-F]+|\d+\.?\d*([eE][+-]?\d+)?|\.\d+([eE][+-]?\d+)?)[fFdDmMuUlL]*/.exec(rest)))
        {
            tokens.push({ Kind: "number", Text: match[0] });
            i += match[0].length;
        }
        else if (IsIdentifierStart(character))
        {
            match = /^[A-Za-z_]\w*/.exec(rest);
            tokens.push({ Kind: "ident", Text: match[0] });
            i += match[0].length;
        }
        else
        {
            const operator = OPERATORS.find(candidate => rest.startsWith(candidate));
            const symbol = operator ?? character;
            tokens.push({ Kind: "punct", Text: symbol });
            i += symbol.length;
        }
    }

    return tokens;
}


// ══════════════ declarations shared by every block of a page ══════════════

function DefaultTypeKind(name)
{
    return /^I[A-Z][a-z]/.test(name) ? "interface" : "class";
}

// class / struct / enum / interface names, #define names and enum members declared anywhere on the page
function CollectDeclarations(tokens, symbols)
{
    const code = tokens.filter(token => token.Kind !== "ws" && token.Kind !== "comment");

    for (let k = 0; k < code.length; k++)
    {
        const text = code[k].Text;

        if (code[k].Kind === "macrodef")
            symbols.Macros.add(text);

        if (code[k].Kind !== "ident" || !["class", "struct", "enum", "interface", "union"].includes(text))
            continue;

        // the class in "enum class Name" isn't a class declaration
        if (code[k - 1]?.Text === "enum")
            continue;

        let nameIndex = k + 1;
        if (text === "enum" && ["class", "struct"].includes(code[nameIndex]?.Text))
            nameIndex++;

        const name = code[nameIndex];
        const kind = text === "union" ? "struct" : text;

        if (name?.Kind === "ident")
            symbols.Types.set(name.Text, kind);

        // typedef struct { ... } Name;
        const braceIndex = name?.Kind === "ident" ? nameIndex + 1 : k + 1;
        if (code[braceIndex]?.Text !== "{")
            continue;

        let depth = 0;
        let end = braceIndex;
        for (; end < code.length; end++)
        {
            if (code[end].Text === "{") depth++;
            else if (code[end].Text === "}" && --depth === 0) break;
        }

        if (code[k - 1]?.Text === "typedef" && code[end + 1]?.Kind === "ident")
            symbols.Types.set(code[end + 1].Text, kind);

        if (kind === "enum")
        {
            for (let m = braceIndex + 1; m < end; m++)
            {
                if (code[m].Kind === "ident" && [",", "=", "}"].includes(code[m + 1]?.Text) && code[m - 1]?.Text !== "=")
                    symbols.EnumMembers.add(code[m].Text);
            }
        }
    }
}


// ══════════════ classification ══════════════

function IsPascalCase(text)
{
    return /^[A-Z]/.test(text) && !/^[A-Z0-9_]+$/.test(text);
}

function IsAllCaps(text)
{
    return /^[A-Z][A-Z0-9_]+$/.test(text);
}

function ClassifyTokens(tokens, language, pageSymbols)
{
    // code = every token that isn't whitespace or a comment, so neighbours are easy to read
    const code = tokens.filter(token => token.Kind !== "ws" && token.Kind !== "comment");
    const Text = k => code[k]?.Text;
    const IsIdent = k => code[k]?.Kind === "ident";
    const IsKeyword = k => language.Keywords.has(Text(k)) || language.ControlKeywords.has(Text(k));
    const IsName = k => IsIdent(k) && !IsKeyword(k);
    const IsMemberAccess = k => Text(k - 1) === "." || Text(k - 1) === "->";

    const types = new Map(pageSymbols.Types);
    const genericCloses = new Set();
    const genericFunctions = new Set();
    const attributes = new Set();
    const declarationNames = new Set();
    const parameterDeclarations = new Set();
    const parameters = new Set();
    const locals = new Set();
    const fields = new Set();

    for (const [kind, names] of Object.entries(language.KnownTypes))
        for (const name of names)
            if (!types.has(name)) types.set(name, kind);

    const MarkType = name =>
    {
        if (!types.has(name) && !KNOWN_NAMESPACES.includes(name) && !language.Keywords.has(name))
            types.set(name, DefaultTypeKind(name));
    };

    const IsTypeName = k => IsName(k) && (types.has(Text(k)) || (Text(k - 1) === "::" && Text(k - 2) === "std" && STD_TYPES.includes(Text(k))));

    // ---------- pass 1: find types from where identifiers are used ----------

    for (let k = 0; k < code.length; k++)
    {
        if (!IsName(k))
            continue;

        const next = Text(k + 1);

        // generics: Name<A, B<C>>, either a type or a generic function call
        if (next === "<")
        {
            let depth = 0;
            let close = -1;
            for (let m = k + 1; m < code.length && m < k + 40; m++)
            {
                const text = Text(m);
                if (text === "<") depth++;
                else if (text === ">") { if (--depth === 0) { close = m; break; } }
                else if (!(IsIdent(m) || [",", "*", "&", "?", "::", "[", "]", "."].includes(text))) break;
            }

            if (close !== -1)
            {
                genericCloses.add(close);
                for (let m = k + 2; m < close; m++)
                    if (IsName(m) && Text(m + 1) !== "::" && Text(m - 1) !== ".") MarkType(Text(m));

                if (Text(close + 1) === "(") genericFunctions.add(k);
                else if (!IsMemberAccess(k)) MarkType(Text(k));
            }
        }

        if (!language.IsCLike && Text(k - 1) === "." && IsPascalCase(Text(k - 2)) && IsName(k + 1) && DECLARATION_ENDS.has(Text(k + 2)))
            MarkType(Text(k));

        if (IsMemberAccess(k) || Text(k - 1) === "::")
            continue;

        // Type name  /  Type name(
        if (IsName(k + 1) && DECLARATION_ENDS.has(Text(k + 2)) || IsName(k + 1) && Text(k + 2) === "(")
        {
            if (!(language.IsCLike && IsAllCaps(Text(k)) && !types.has(Text(k))))
                MarkType(Text(k));
        }

        // Type* name  /  Type& name  (C, C++)
        if (["*", "&", "**"].includes(next) && (IsPascalCase(Text(k)) || types.has(Text(k))))
        {
            let m = k + 1;
            while (["*", "&"].includes(Text(m))) m++;
            if (IsName(m) && DECLARATION_ENDS.has(Text(m + 1)) || Text(m) === ")" || Text(m) === ">")
                MarkType(Text(k));
        }

        // casts and C compound literals: (Type) x  /  (Type*) x  /  (Type){ ... }
        if (Text(k - 1) === "(" && (IsPascalCase(Text(k)) || types.has(Text(k))))
        {
            let m = k + 1;
            while (["*", "&"].includes(Text(m))) m++;
            const after = code[m + 1];
            if (Text(m) === ")" && after && (after.Kind === "ident" || after.Kind === "number" || ["(", "{", "&"].includes(after.Text)))
                MarkType(Text(k));
        }

        // new Type(  /  new Namespace.Type(
        if (Text(k - 1) === "new")
        {
            let m = k;
            while (Text(m + 1) === "." && IsName(m + 2)) m += 2;
            MarkType(Text(m));
        }

        // Type::Member  (a namespace if lowercase or known)
        if (next === "::" && IsPascalCase(Text(k)))
            MarkType(Text(k));

        // C# attributes: [Test], [SerializeField], [Rpc(SendTo.Server)]
        if (!language.IsCLike && Text(k - 1) === "[" && ["]", "("].includes(next))
        {
            const bracket = tokens.indexOf(code[k - 1]);
            const before = tokens[bracket - 1];
            if (bracket === 0 || (before?.Kind === "ws" && before.Text.includes("\n")))
                attributes.add(k);
        }
    }

    // ---------- pass 2: scopes, parameters, locals and fields ----------

    // a token "names a type" when a variable name can follow it
    const IsTypeish = k =>
    {
        const text = Text(k);
        if (language.TypeKeywords.has(text) || IsTypeName(k)) return true;
        if (["*", "&", "**", "?"].includes(text)) return IsTypeish(k - 1);
        if (text === ">") return genericCloses.has(k);
        if (text === "]") return Text(k - 1) === "[" && IsTypeish(k - 2);
        return false;
    };

    // block kind for every token: "type", "enum", "namespace" or "code"
    const scopes = [];
    const stack = [];
    for (let k = 0; k < code.length; k++)
    {
        if (Text(k) === "{")
        {
            let kind = "code";
            for (let m = k - 1; m >= 0 && ![";", "{", "}", ")"].includes(Text(m)); m--)
            {
                if (Text(m) === "enum") { kind = "enum"; break; }
                if (["class", "struct", "interface", "union"].includes(Text(m))) { kind = "type"; break; }
                if (Text(m) === "namespace") { kind = "namespace"; break; }
            }
            stack.push(kind);
        }
        scopes.push(stack.length > 0 ? stack[stack.length - 1] : "code");
        if (Text(k) === "}") stack.pop();
    }

    const Declare = k =>
    {
        declarationNames.add(k);
        const scope = scopes[k];
        if (scope === "type") fields.add(Text(k));
        else if (scope !== "enum") locals.add(Text(k));
    };

    for (let k = 0; k < code.length; k++)
    {
        // parameter lists: (Type name, Type* name = default, ...)
        if (Text(k) === "(" && IsName(k - 1))
        {
            let depth = 0;
            let close = -1;
            for (let m = k; m < code.length; m++)
            {
                if (Text(m) === "(") depth++;
                else if (Text(m) === ")" && --depth === 0) { close = m; break; }
            }

            if (close > k + 1)
            {
                const parts = [];
                let start = k + 1;
                depth = 0;
                for (let m = k + 1; m <= close; m++)
                {
                    const text = Text(m);
                    if (["(", "<", "["].includes(text)) depth++;
                    else if ([")", ">", "]"].includes(text) && m !== close) depth--;
                    if ((text === "," && depth === 0) || m === close)
                    {
                        parts.push([start, m - 1]);
                        start = m + 1;
                    }
                }

                const names = [];
                const allDeclarations = parts.every(([from, to]) =>
                {
                    for (let m = from; m < to; m++)
                        if (Text(m) === "=") { to = m - 1; break; }

                    // array parameters: Type name[4]
                    if (Text(to) === "]")
                    {
                        while (to > from && Text(to) !== "[") to--;
                        to--;
                    }

                    if (to - from < 1 || !IsName(to) || !IsTypeish(to - 1)) return false;
                    names.push(to);
                    return true;
                });

                if (allDeclarations)
                    for (const m of names) { parameters.add(Text(m)); declarationNames.add(m); parameterDeclarations.add(m); }
            }
        }

        // local and field declarations: Type name =  /  Type name;  /  Type a, b;
        if (IsName(k) && !IsMemberAccess(k) && Text(k - 1) !== "::" && IsTypeish(k - 1) && Text(k + 1) !== "(" && DECLARATION_ENDS.has(Text(k + 1)) && Text(k + 1) !== "{")
        {
            if (!declarationNames.has(k))
                Declare(k);

            let m = k + 1;
            while (Text(m) === "," && IsName(m + 1) && [";", ",", "=", "["].includes(Text(m + 2)))
            {
                Declare(m + 1);
                m += 2;
            }
        }

        // structured bindings: auto& [key, value]
        if (Text(k) === "auto")
        {
            let m = k + 1;
            while (["&", "*", "&&"].includes(Text(m))) m++;
            if (Text(m) === "[")
                for (m++; m < code.length && Text(m) !== "]"; m++)
                    if (IsName(m)) Declare(m);
        }
    }

    // names in "using A.B;" and "namespace A.B" are namespaces, not types
    const namespaceNames = new Set();
    for (let k = 0; k < code.length; k++)
    {
        if (!["using", "namespace"].includes(Text(k)) || !IsName(k + 1))
            continue;

        let m = k + 1;
        while (m < code.length && ![";", "{", "="].includes(Text(m))) m++;
        if (Text(m) === "=")
            continue; // using Alias = Type;

        for (let n = k + 1; n < m; n++)
            if (IsName(n)) namespaceNames.add(n);
    }

    // ---------- pass 3: pick a color for every token ----------

    const TypeClass = name =>
    {
        const kind = types.get(name) ?? DefaultTypeKind(name);
        if (kind === "struct" && !language.HasStructColor) return "tk-class";
        return `tk-${kind}`;
    };

    for (let k = 0; k < code.length; k++)
    {
        const token = code[k];
        const text = token.Text;

        if (token.Kind === "macrodef") { token.Class = "tk-macro"; continue; }
        if (token.Kind === "string") { token.Class = "tk-string"; continue; }
        if (token.Kind === "number") { token.Class = "tk-number"; continue; }
        if (token.Kind === "preproc") { token.Class = "tk-preproc"; continue; }
        if (token.Kind === "punct") { token.Class = "tk-punct"; continue; }

        if (language.ControlKeywords.has(text)) { token.Class = "tk-control"; continue; }
        if (language.Keywords.has(text)) { token.Class = "tk-keyword"; continue; }

        const previous = Text(k - 1);
        const next = Text(k + 1);
        const isCall = next === "(" || genericFunctions.has(k);

        if (namespaceNames.has(k)) { token.Class = null; continue; }

        // C# named arguments: Foo(value: 1, index: 2)
        if (language.IsCSharp && next === ":" && (previous === "(" || previous === ",")) { token.Class = "tk-param"; continue; }

        if (declarationNames.has(k))
        {
            token.Class = parameterDeclarations.has(k) ? "tk-param"
                        : scopes[k] === "type" ? "tk-field" : "tk-local";
            continue;
        }

        if (previous === "." || previous === "->")
        {
            if (isCall) token.Class = "tk-function";
            else if (types.get(Text(k - 2)) === "enum") token.Class = "tk-enum-member";
            else if (types.has(text) && ([".", "::"].includes(next) || IsName(k + 1))) token.Class = TypeClass(text);
            else token.Class = "tk-field";
            continue;
        }

        if (previous === "::")
        {
            const qualifier = Text(k - 2);
            if (isCall) token.Class = IsTypeName(k) ? TypeClass(text) : "tk-function";
            else if (types.get(qualifier) === "enum" || pageSymbols.EnumMembers.has(text)) token.Class = "tk-enum-member";
            else if (IsTypeName(k)) token.Class = TypeClass(text);
            else if (KNOWN_NAMESPACES.includes(text) || next === "::") token.Class = null;
            else if (IsPascalCase(text) && (IsIdent(k + 1) || ["*", "&"].includes(next))) token.Class = TypeClass(text);
            else if (language.IsCLike && IsAllCaps(text)) token.Class = "tk-macro";
            continue;
        }

        if (next === "::" && (KNOWN_NAMESPACES.includes(text) || !types.has(text)))
        {
            token.Class = null; // namespace
            continue;
        }

        if (pageSymbols.Macros.has(text)) { token.Class = "tk-macro"; continue; }
        if (attributes.has(k)) { token.Class = "tk-class"; continue; }
        if (fields.has(text) && types.has(text) && !IsIdent(k + 1) && !["::", ".", "*", "&", "<"].includes(next)) { token.Class = "tk-field"; continue; }
        if (types.has(text) && !KNOWN_NAMESPACES.includes(text)) { token.Class = TypeClass(text); continue; }
        if (language.IsCLike && IsAllCaps(text)) { token.Class = pageSymbols.EnumMembers.has(text) ? "tk-enum-member" : "tk-macro"; continue; }
        if (isCall) { token.Class = "tk-function"; continue; }
        if (scopes[k] === "enum" || pageSymbols.EnumMembers.has(text)) { token.Class = "tk-enum-member"; continue; }
        if (parameters.has(text)) { token.Class = "tk-param"; continue; }
        if (locals.has(text)) { token.Class = "tk-local"; continue; }
        if (fields.has(text)) { token.Class = "tk-field"; continue; }

        // C#: Type.StaticMember at the start of a chain (Mathf.Max, Debug.Log...)
        if (!language.IsCLike && IsPascalCase(text) && next === "." && !KNOWN_NAMESPACES.includes(text))
        {
            token.Class = TypeClass(text);
            continue;
        }

        token.Class = null;
    }

    for (const token of tokens)
    {
        if (token.Kind === "comment") token.Class = "tk-comment";
    }

    return types;
}


function ClassifyPythonTokens(tokens, language, pageSymbols)
{
    const code = tokens.filter(token => token.Kind !== "ws" && token.Kind !== "comment");
    const Text = k => code[k]?.Text;
    const IsIdent = k => code[k]?.Kind === "ident";

    const types = new Set([...language.KnownTypes.class, ...pageSymbols.Types.keys()]);
    const parameters = new Set();

    // parameters: def Name(self, a: int, b = 1, *args, **kwargs)
    for (let k = 0; k < code.length; k++)
    {
        if (Text(k) !== "def" || !IsIdent(k + 1) || Text(k + 2) !== "(")
            continue;

        let depth = 0;
        for (let m = k + 2; m < code.length; m++)
        {
            if (["(", "[", "{"].includes(Text(m))) depth++;
            else if ([")", "]", "}"].includes(Text(m)) && --depth === 0) break;
            else if (depth === 1 && IsIdent(m) && ["(", ",", "*", "**"].includes(Text(m - 1)) && [":", ",", "=", ")"].includes(Text(m + 1)))
                parameters.add(Text(m));
        }
    }

    // "in" is part of a for loop (purple) or the membership operator (blue)
    const IsForIn = token =>
    {
        for (let t = tokens.indexOf(token) - 1; t >= 0; t--)
        {
            if (tokens[t].Kind === "ws" && tokens[t].Text.includes("\n")) return false;
            if (tokens[t].Text === "for") return true;
        }
        return false;
    };

    for (let k = 0; k < code.length; k++)
    {
        const token = code[k];
        const text = token.Text;
        const previous = Text(k - 1);
        const next = Text(k + 1);

        if (token.Kind === "string") { token.Class = "tk-string"; continue; }
        if (token.Kind === "number") { token.Class = "tk-number"; continue; }
        if (token.Kind === "punct") { token.Class = "tk-punct"; continue; }

        if (text === "in") token.Class = IsForIn(token) ? "tk-control" : "tk-keyword";
        else if (language.ControlKeywords.has(text)) token.Class = "tk-control";
        else if (language.Keywords.has(text)) token.Class = "tk-keyword";
        else if (previous === "def" || previous === "@") token.Class = "tk-function";
        else if (previous === "class") token.Class = "tk-class";
        else if (previous === ".") token.Class = next === "(" ? "tk-function" : null;
        else if (types.has(text) || IsPascalCase(text)) token.Class = "tk-class";
        else if (next === "(") token.Class = "tk-function";
        else if (parameters.has(text)) token.Class = "tk-param";
        else token.Class = null;
    }

    for (const token of tokens)
    {
        if (token.Kind === "comment") token.Class = "tk-comment";
    }
}


// ══════════════ rendering ══════════════

function EscapeHtml(text)
{
    return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function RenderTokens(tokens)
{
    return tokens
        .map(token => token.Class ? `<span class="${token.Class}">${EscapeHtml(token.Text)}</span>` : EscapeHtml(token.Text))
        .join("");
}

function GetBlockLanguage(codeElement)
{
    const match = /language-(\w+)/.exec(codeElement.className);
    return match ? CODE_LANGUAGES[match[1]] : null;
}

// highlights every supported code block inside root
function HighlightCodeBlocks(root)
{
    const blocks = [...root.querySelectorAll("pre code[class*='language-']")]
        .map(element => ({ Element: element, Language: GetBlockLanguage(element) }))
        .filter(block => block.Language != null);

    const pageSymbols = { Types: new Map(), Macros: new Set(), EnumMembers: new Set() };

    for (const block of blocks)
    {
        block.Tokens = Tokenize(block.Element.textContent, block.Language);
        CollectDeclarations(block.Tokens, pageSymbols);
    }

    // types guessed from usage in one block also apply to the others (MapData.TileType...)
    for (const block of blocks.filter(block => !block.Language.IsPython))
        for (const [name, kind] of ClassifyTokens(block.Tokens, block.Language, pageSymbols))
            if (!pageSymbols.Types.has(name)) pageSymbols.Types.set(name, kind);

    for (const block of blocks)
    {
        if (block.Language.IsPython) ClassifyPythonTokens(block.Tokens, block.Language, pageSymbols);
        else ClassifyTokens(block.Tokens, block.Language, pageSymbols);
        block.Element.innerHTML = RenderTokens(block.Tokens);
        block.Element.classList.add("vs-code", block.Language.CssClass);
    }
}
