// nav bar
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (var tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (var tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Projects Section Tabs
var projectTabLinks = document.querySelectorAll("#portfolio .tab-links");
var projectTabContents = document.querySelectorAll("#portfolio .tab-contents");

projectTabLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        opentab(event.target.getAttribute('onclick').match(/'([^']+)'/)[1]);
    });
});

function showProjectDetails(project) {
    var projectDetails = {
        EGRetail: `
            <h1>InStore App 2.0</h1>


            <div class="project-section">
                <div class="text-box">
                    <h2>TASK</h2>
                    <p>We collaborated with EG Retail to redesign the Goods Receipt and Purchase modules in their existing app, enhancing user experience and functionality.</p>
                </div>
            </div>

            <div class="project-section">
                <div class="text-box">
                    <h2>APPROACH</h2>
                    <p>We followed the Double Diamond method, which involves four stages: Discover, Define, Develop, and Deliver. This structured approach helped us identify user needs and create innovative solutions.</p>
                </div>
                <div class="project-image">
                    <img src="img/ISA_process.png" alt="Design Process">
                </div>
            </div>

            <div class="project-section reverse">
                <div class="text-box">
                    <h2>POSTER</h2>
                    <p>We developed a visually engaging poster to effectively communicate our project's key concepts and outcomes. A well-designed poster serves as a powerful tool for summarizing complex information in a digestible format, making it easier for audiences to grasp the essence of our work at a glance. It also enhances visibility at events and presentations, encouraging dialogue and fostering interest among stakeholders.</p>
                </div>
                <div class="project-image">
                    <img src="img/ISA_poster.png" alt="Final Product">
                </div>
            </div>

        <div class="project-section">
    <div class="text-box">
        <h2>REPORT</h2>
        <p>In addition, we produced a comprehensive academic report detailing our research methods, findings, and analyses. This report not only provides a thorough documentation of our project but also contributes to the academic community by sharing insights and methodologies. A well-structured report promotes transparency, enabling others to understand, replicate, or build upon our work, ultimately advancing knowledge in the field.</p>
    </div>
    <div class="project-image">
        <div class="pdf-preview" onclick="togglePdf()">
            <iframe id="pdf-frame" src="img/Open_project_report.pdf#page=1" width="100%" height="400px" style="border: none;"></iframe>
        </div>
        <div id="pdf-full" style="display: none;">
            <iframe src="img/Open_project_report.pdf" width="100%" height="800px" style="border: none;"></iframe>
        </div>
    </div>
</div>
            <div class="project-section reverse">
                <div class="text-box">
                    <h2>RESULT</h2>
<p>The collaboration with EG Retail led to a successful redesign of the Goods Receipt and Purchase modules within their existing app. By improving both user experience and functionality, the redesign streamlined processes, making the modules more intuitive and efficient for users. These enhancements resulted in a smoother workflow, reducing errors and increasing overall user satisfaction with the app. </p>                </div>
                
            </div>

        
            <div class="project-demo">
                <video controls width="300" style="cursor: pointer;">
                    <source src="img/InStoreApp2.0.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>

            <!-- Modal for Full-Size Video -->
            <div id="videoModal" class="modal">
                <span class="close" onclick="closeModal()">&times;</span>
                <video controls id="modalVideo" width="100%">
                    <source src="img/InStoreApp2.0.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
        `
  ,
        Lumina: `
            <h1>Lumina</h1>


            <div class="project-section">
                <div class="text-box">
                    <h2>TASK</h2>
                    <p>The task was to design an artifact that motivates individuals to adopt sustainable and rewarding lifestyle habits. We eventually narrowed the focus to a specific topic, addressing areas such as healthy eating, exercise, meditation, or work-life balance. Our project centered on answering the research question: **“Can an interactive task tracker influence children to perform their daily tasks?”** Through this focus, we aimed to explore how interactive design could positively impact children's behavior and help them establish productive daily routines.</p>
                </div>
            </div>

            <div class="project-section">
                <div class="text-box">
                    <h2>APPROACH</h2>
<p>The project was developed through a structured ideation process, beginning with brainstorming sessions and team discussions to generate and refine ideas. This collaborative effort allowed us to explore a variety of concepts and approaches, ensuring that the final direction aligned with both user needs and project goals.
</p>                </div>
                <div class="project-image">
                    <img src="img/Lumina_Capa.png" alt="Design Process">
                </div>
            </div>

             <div class="project-section">
                <div class="text-box">
                    <h2>PROTOTYPING</h2>
<p>After the ideation phase, we moved to prototyping, starting with CAPA, a simple 3D model used to visualize early concepts and gather initial user feedback through a questionnaire. Based on this feedback, we developed a high-fidelity prototype, which was then tested through qualitative interviews and quantitative questionnaires. These evaluations provided both in-depth insights and measurable data on usability, helping to refine the final product. This iterative process ensured that the end result was user-centered, functional, and aligned with the project’s goals.</p>                </div>
            </div>

            <div class="project-section reverse">
                <div class="text-box">
                    <h2>POSTER</h2>
                    <p>We developed a visually engaging poster to effectively communicate our project's key concepts and outcomes. A well-designed poster serves as a powerful tool for summarizing complex information in a digestible format, making it easier for audiences to grasp the essence of our work at a glance. It also enhances visibility at events and presentations, encouraging dialogue and fostering interest among stakeholders.</p>
                </div>
                <div class="project-image">
                    <img src="img/Lumina_poster.png" alt="Final Product">
                </div>
            </div>

        <div class="project-section">
    <div class="text-box">
        <h2>REPORT</h2>
        <p>In addition, we produced a comprehensive academic report detailing our research methods, findings, and analyses. This report not only provides a thorough documentation of our project but also contributes to the academic community by sharing insights and methodologies. A well-structured report promotes transparency, enabling others to understand, replicate, or build upon our work, ultimately advancing knowledge in the field.</p>
    </div>
    <div class="project-image">
        <div class="pdf-preview" onclick="togglePdf()">
            <iframe id="pdf-frame" src="img/Individual_report_Tangible_Interaction.pdf#page=1" width="100%" height="400px" style="border: none;"></iframe>
        </div>
        <div id="pdf-full" style="display: none;">
            <iframe src="img/Individual_report_Tangible_Interaction.pdf" width="100%" height="800px" style="border: none;"></iframe>
        </div>
    </div>
</div>
            <div class="project-section reverse">
                <div class="text-box">
                    <h2>RESULT</h2>
<p>The result of the project was an interactive task tracker designed to engage children in completing their daily chores. The tracker features a light-up mechanism that activates each time a child adds a piece, representing a completed task. This visual feedback aims to create a sense of achievement, making the process of tracking chores more interactive and enjoyable. By combining playful interaction with task completion, the tracker is intended to motivate children to stay engaged and develop responsibility in a fun and rewarding way.</p>                </div>
                <div class="project-image">
                    <img src="img/Lumina_big.gif" alt="Final Product">
                </div>
                

              
            </div>

        `
    };

    document.getElementById("project-content").innerHTML = projectDetails[project];

    // Hide the header, about section, and portfolio, then show project details
    document.getElementById("header").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("portfolio").style.display = "none";
    document.querySelector(".copyright").style.display = "none"; 
    document.getElementById("project-details").style.display = "block";
    document.getElementById("project-content").innerHTML = projectDetails[project];

    // Add click event to open modal
    const video = document.querySelector(".project-demo video");
    video.onclick = function() {
        document.getElementById("videoModal").style.display = "block";
    };
}

function closeModal() {
    document.getElementById("videoModal").style.display = "none";
}

    
    // Hide the header, about section, and portfolio, then show project details
    document.getElementById("header").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("portfolio").style.display = "none";
    document.querySelector(".copyright").style.display = "none"; 
    document.getElementById("project-details").style.display = "block";
    document.getElementById("project-content").innerHTML = projectDetails[project];


function returnToPortfolio() {
    // Show the header, about section, and portfolio, hide project details
    document.getElementById("header").style.display = "block";
    document.getElementById("about").style.display = "block";
    document.getElementById("portfolio").style.display = "block";
    document.getElementById("project-details").style.display = "none";
}

function openFullscreen(elem) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { // Firefox
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { // Chrome, Safari and Opera
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { // IE/Edge
        elem.msRequestFullscreen();
    }
}

// Toggle PDF visibility as before
function togglePdf() {
    var pdfFull = document.getElementById("pdf-full");
    var pdfFrame = document.getElementById("pdf-frame");

    if (pdfFull.style.display === "none" || pdfFull.style.display === "") {
        pdfFull.style.display = "block"; // Show full PDF
        pdfFrame.style.display = "none"; // Hide preview
    } else {
        pdfFull.style.display = "none"; // Hide full PDF
        pdfFrame.style.display = "block"; // Show preview
    }
}




// Menu functions
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}
