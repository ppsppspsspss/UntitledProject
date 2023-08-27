<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Project er nam</title>
    <link rel="stylesheet" href="writingStyles.css">
</head>

<body>
    <header>
        <?php include('navbar.php');?>
    </header>
    <div class="container">
        <section class="editor">
            <label for="languageSelector">Select a Language:</label>
            <select id="languageSelector">
                <option value="txt">Text</option>
                <option value="python">Python</option>
                <option value="php">php</option>
                <option value="javascript">JavaScript</option>
                <option value="html">HTML</option>
                <option value="css">CSS</option>
                <!------------------------------------------------ aro language add kora lagbe -->
            </select>
            <div class="editorContainer">
                <div id="codeEditor"></div>
            </div>
            <div class="buttons">
                <button id="clearButton"><i class="fa-solid fa-eraser fa-flip"></i>Clear Editor</button>
                <button id="copyButton"><i class="fa-solid fa-copy fa-fade"></i>Copy Code</button>
            </div>
        </section>

        <section class="file">
            <div class="fileContainer">
                <box class='fileUpload'><i class="fa-solid fa-folder-plus fa-beat fa-xl"></i>Add File</box>
                <input type="file" id="fileInput">
            </div>
        </section>
    </div>

    <footer>
        <div class="footer">
            <p align='center'>&copy; 2023 Project er nam</p>
        </div>
    </footer>


    <script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.24.1/ace.js"></script>
    <script src="writingScript.js"></script>
</body>

</html>