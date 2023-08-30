    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Project er nam</title>
        <link rel="stylesheet" href="../CSS/writingStyles.css">
    </head>

    <body>
        <header>
            <?php include('writingPageNavbar.php');?>
        </header>
        <div class="container">
            <section class="editor">
                <div class="customDropdown">
                    <label for="languageSelector">Select a Language:</label>
                    <select id="languageSelector">
                        <option value="txt">Text</option>
                        <option value="python">Python</option>
                        <option value="javascript">JavaScript</option>
                        <option value="java">Java</option>
                        <option value="php">PHP</option>
                        <option value="ruby">Ruby</option>
                        <option value="c">C</option>
                        <option value="cpp">C++</option>
                        <option value="csharp">C#</option>
                        <option value="html">HTML</option>
                        <option value="css">CSS</option>
                        <option value="sql">SQL</option>
                        <option value="swift">Swift</option>
                        <option value="kotlin">Kotlin</option>
                        <option value="typescript">TypeScript</option>
                        <option value="go">Go</option>
                        <option value="rust">Rust</option>
                        <option value="scala">Scala</option>
                        <option value="perl">Perl</option>
                        <option value="r">R</option>
                    </select>
                </div>
                <input type="text" id="editorFileName" placeholder="Enter file name...">
                <div class="editorContainer">
                    <div id="codeEditor"></div>
                </div>
                <div class="buttons">
                    <button id="clearButton"><i class="fa-solid fa-eraser fa-flip"></i>Clear Editor</button>
                    <button id="copyButton"><i class="fa-solid fa-copy fa-fade"></i>Copy Code</button>
                    <button id="newButton"><i class="fa-solid fa-file fa-spin fa-spin-reverse"></i>New File</button>
                </div>
            </section>

            <section class="file">
                <div class="fileContainer">
                    <label for="fileInput" class="fileUpload"><i id='addFileIcon'
                            class="fa-solid fa-folder-plus fa-beat fa-xl"></i><br><br>Add
                        File</label>
                    <input type="file" id="fileInput" multiple>
                </div>
                <div id="selectedFiles">
                    <ul id="fileList"></ul>
                </div>
            </section>
        </div>

        <footer>
            <div class="footer">
                <p align='center'>&copy; 2023 Project er nam</p>
            </div>
        </footer>


        <script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.24.1/ace.js"></script>
        <script src="../JS/writingScript.js"></script>
    </body>

    </html>