<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>
    .navbar {
        background-color: #1a1a1a;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        font-family: Arial, sans-serif;
        color: #fff;
    }

    .navbarContainer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
    }

    .projectName {
        font-size: 24px;
        font-weight: bold;
    }

    .navbarIcons {
        font-size: 20px;
        margin-left: 20px;
    }

    .button {
        background-color: #222;
        border: none;
        color: #fff;
        cursor: pointer;
        font-size: 16px;
        margin-left: 10px;
        padding: 10px 20px;
        border-radius: 5px;
    }
    </style>
</head>

<body>
    <div class="navbar">
        <div class="navbarContainer">
            <div class="projectName">
                <i class="fa-brands fa-google"></i> Project er nam
            </div>
            <div class="navbarIcons">
                <button class="button"><i class="fa-solid fa-download"></i> Download</button>
                <button class="button"><i class="fa-solid fa-code"></i> Share Code</button>
                <button class="button"><i class="fa-solid fa-gear"></i> Settings</button>
                <button class="button"><i class="fa-solid fa-right-to-bracket"></i> Sign In</button>
                <button class="button" id="themeToggle"><i class="fa-solid fa-sun"></i></button>
            </div>
        </div>
    </div>

    <script>
    const themeToggle = document.getElementById('themeToggle');
    const moonIcon = '<i class="fa-solid fa-moon"></i>';
    const sunIcon = '<i class="fa-solid fa-sun"></i>';
    let isDarkMode = false;

    themeToggle.addEventListener('click', function() {
        const navbarIcons = document.querySelector('.navbarIcons');

        if (isDarkMode) {
            document.body.style.backgroundColor = '#fff';
            document.body.style.color = '#000';
            navbarIcons.style.backgroundColor = '#1a1a1a';
            themeToggle.innerHTML = sunIcon;
            isDarkMode = false;
        } else {
            document.body.style.backgroundColor = '#333';
            document.body.style.color = '#fff';
            navbarIcons.style.backgroundColor = '#1a1a1a';
            themeToggle.innerHTML = moonIcon;
            isDarkMode = true;
        }
    });
    </script>
</body>

</html>