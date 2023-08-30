let codeEditor = document.querySelector("#codeEditor");
let languageSelector = document.getElementById("languageSelector");
let clearButton = document.getElementById("clearButton");
let fileInput = document.getElementById("fileInput");
let fileList = document.getElementById("fileList");
let copyButton = document.getElementById("copyButton");

let editor = ace.edit(codeEditor);

editor.setShowPrintMargin(false);
editor.setHighlightActiveLine(false);
editor.getSession().setUseSoftTabs(true);
editor.getSession().setTabSize(4);
editor.getSession().setFoldStyle("markbegin");
editor.find("searchText", {
    backwards: false,
    wrap: true,
    caseSensitive: false,
    wholeWord: false,
    regExp: false
});


editor.setTheme("ace/theme/github_dark");
editor.getSession().setValue(`/*Welcome to your code editor*/\n\n`);
editor.gotoLine(4);

languageSelector.addEventListener("change", function () {
    let selectedLanguage = languageSelector.value;
    let mode = "ace/mode/" + selectedLanguage;

    editor.getSession().setMode(mode);


    if (selectedLanguage === 'python') {
        editor.getSession().setValue(`# Welcome to your code editor\n\nprint('Hello, world!')`);
    } else if (selectedLanguage === 'javascript') {
        editor.getSession().setValue(`// Welcome to your code editor\n\nconsole.log('Hello, World!');`);
    } else if (selectedLanguage === 'java') {
        editor.getSession().setValue(`// Welcome to your code editor\n\npublic class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}`);
    } else if (selectedLanguage === 'php') {
        editor.getSession().setValue(`// Welcome to your code editor\n\n<?php\n    echo "Hello, World!";\n?>`);
    } else if (selectedLanguage === 'ruby') {
        editor.getSession().setValue(`# Welcome to your code editor\n\nputs 'Hello, World!'`);
    } else if (selectedLanguage === 'c') {
        editor.getSession().setValue(`// Welcome to your code editor\n\n#include <stdio.h>\n\nint main() {\n    printf("Hello, World!\\n");\n    return 0;\n}`);
    } else if (selectedLanguage === 'cpp') {
        editor.getSession().setValue(`// Welcome to your code editor\n\n#include <iostream>\n\nint main() {\n    std::cout << "Hello, World!" << std::endl;\n    return 0;\n}`);
    } else if (selectedLanguage === 'csharp') {
        editor.getSession().setValue(`// Welcome to your code editor\n\nusing System;\n\nclass Program {\n    static void Main() {\n        Console.WriteLine("Hello, World!");\n    }\n}`);
    } else if (selectedLanguage === 'html') {
        editor.getSession().setValue(`<!-- Welcome to your code editor -->\n\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Hello, World!</title>\n</head>\n<body>\n    <h1>Hello, World!</h1>\n</body>\n</html>`);
    } else if (selectedLanguage === 'css') {
        editor.getSession().setValue(`/* Welcome to your code editor */\n\nbody {\n    font-size: 16px;\n    color: #333;\n}`);
    } else if (selectedLanguage === 'sql') {
        editor.getSession().setValue(`-- Welcome to your code editor\n\nSELECT 'Hello, World!' AS greeting;`);
    } else if (selectedLanguage === 'swift') {
        editor.getSession().setValue(`// Welcome to your code editor\n\nprint("Hello, World!")`);
    } else if (selectedLanguage === 'kotlin') {
        editor.getSession().setValue(`// Welcome to your code editor\n\nfun main() {\n    println("Hello, World!")\n}`);
    } else if (selectedLanguage === 'typescript') {
        editor.getSession().setValue(`// Welcome to your code editor\n\nconsole.log('Hello, World!');`);
    } else if (selectedLanguage === 'go') {
        editor.getSession().setValue(`// Welcome to your code editor\n\npackage main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println("Hello, World!")\n}`);
    } else if (selectedLanguage === 'rust') {
        editor.getSession().setValue(`// Welcome to your code editor\n\nfn main() {\n    println!("Hello, World!");\n}`);
    } else if (selectedLanguage === 'scala') {
        editor.getSession().setValue(`// Welcome to your code editor\n\nobject HelloWorld {\n    def main(args: Array[String]): Unit = {\n        println("Hello, World!")\n    }\n}`);
    } else if (selectedLanguage === 'perl') {
        editor.getSession().setValue(`# Welcome to your code editor\n\nprint "Hello, World!\\n";`);
    } else if (selectedLanguage === 'r') {
        editor.getSession().setValue(`# Welcome to your code editor\n\nprint("Hello, World!")`);
    } else {
        editor.getSession().setValue(`/* Welcome to your code editor */\n\n`);
    }

    editor.gotoLine(4);
});


clearButton.addEventListener("click", function () {
    editor.getSession().setValue("");
});

copyButton.addEventListener("click", function () {
    let editorText = editor.getSession().getValue();

    let textArea = document.createElement("textArea");
    textArea.value = editorText;
    document.body.appendChild(textArea);
    textArea.select();

    document.execCommand("copy");
    document.body.removeChild(textArea);

    copyButton.innerHTML = '<i class="fa-solid fa-copy"></i>Copied!';
    setTimeout(function () {
        copyButton.innerHTML = '<i class="fa-solid fa-copy fa-fade"></i>Copy Code';
    }, 3000);
});

let filterCounter = 1;

fileInput.addEventListener("change", function () {

    for (let i = 0; i < fileInput.files.length; i++) {
        const fileName = fileInput.files[i].name;

        const listItem = document.createElement("li");

        const fileNumber = document.createElement("span");
        fileNumber.textContent = filterCounter + ". ";
        fileNumber.style.marginRight = "5px";

        const fileNameNode = document.createTextNode(fileName);

        const deleteButton = document.createElement("i");
        deleteButton.className = "fa-solid fa-trash fa-spin-pulse";
        deleteButton.style.color = "#000";
        deleteButton.style.cursor = "pointer";
        deleteButton.style.marginLeft = "30px";
        deleteButton.addEventListener("click", function () {
            listItem.remove();
        });

        listItem.appendChild(fileNumber);
        listItem.appendChild(fileNameNode);
        listItem.appendChild(deleteButton);

        fileList.appendChild(listItem);

        filterCounter++;
    }
});


editor.focus();


// ace/ theme / ambiance
// ace / theme / chaos
// ace / theme / cobalt
// ace / theme / monokai
// ace / theme / github_dark
// ace / theme / solarized_light
// ace / theme / tomorrow
// ace / theme / twilight
// ace / theme / xcode