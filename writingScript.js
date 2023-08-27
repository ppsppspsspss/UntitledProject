let codeEditor = document.querySelector("#codeEditor");
let languageSelector = document.getElementById("languageSelector");
let clearButton = document.getElementById("clearButton");

let editor = ace.edit(codeEditor);

editor.setTheme("ace/theme/github_dark");

editor.getSession().setValue(`\n**********Welcome to your code editor**********\n\n`);
editor.gotoLine(4);
languageSelector.addEventListener("change", function () {
    let selectedLanguage = languageSelector.value;
    let mode = "ace/mode/" + selectedLanguage;

    editor.getSession().setMode(mode);

    if (selectedLanguage === 'python') {
        editor.getSession().setValue(`\n# Welcome to your code editor\n\nprint('Hello, world!')`);
    } else if (selectedLanguage === 'javascript') {
        editor.getSession().setValue(`\n//Welcome to your code editor\n\ndocument.write('Hello, World!');`);
    }
    else {
        editor.getSession().setValue(`\n/* Welcome to your code editor*/\n\n`);
    }

    editor.gotoLine(4);
});

clearButton.addEventListener("click", function () {
    editor.getSession().setValue("");
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