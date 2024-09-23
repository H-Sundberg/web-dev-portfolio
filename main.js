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
        EGRetail: `<h1>EG Retail Project Details</h1>
                    <p>Details about the EG Retail project go here.</p>
                    <img src="img/egretail_detail.png" alt="EG Retail Detail Image">`
        // Add other project details here if needed
    };

    // Hide the header, about section, and portfolio, then show project details
    document.getElementById("header").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("portfolio").style.display = "none";
    document.querySelector(".copyright").style.display = "none"; 
    document.getElementById("project-details").style.display = "block";
    document.getElementById("project-content").innerHTML = projectDetails[project];
}

function returnToPortfolio() {
    // Show the header, about section, and portfolio, hide project details
    document.getElementById("header").style.display = "block";
    document.getElementById("about").style.display = "block";
    document.getElementById("portfolio").style.display = "block";
    document.getElementById("project-details").style.display = "none";
}


// Menu functions
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}
