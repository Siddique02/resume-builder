// Get the form elements
var personalInfoForm = document.getElementById("cv-form");
// Get the cv-output div
var cvOutput = document.getElementById("cv-output");
personalInfoForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    // Retrieve personal info from form fields
    var name = document.getElementById("name").value;
    var designation = document.getElementById("designation").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var phone = document.getElementById("phone").value;
    var period1a = document.getElementById("period-1a").value;
    var period1b = document.getElementById("period-1b").value;
    var education1 = document.getElementById("education1").value;
    var period2a = document.getElementById("period-2a").value;
    var period2b = document.getElementById("period-2b").value;
    var education2 = document.getElementById("education2").value;
    var period3a = document.getElementById("period-3a").value;
    var period3b = document.getElementById("period-3b").value;
    var education3 = document.getElementById("education3").value;
    var skill1 = document.getElementById("skill1").value;
    var skill2 = document.getElementById("skill2").value;
    var skill3 = document.getElementById("skill3").value;
    var skill4 = document.getElementById("skill4").value;
    var skill5 = document.getElementById("skill5").value;
    var skill6 = document.getElementById("skill6").value;
    var skill7 = document.getElementById("skill7").value;
    var skill8 = document.getElementById("skill8").value;
    var skill9 = document.getElementById("skill9").value;
    var skill10 = document.getElementById("skill10").value;
    var exp1 = document.getElementById("exp-period1").value;
    var exp2 = document.getElementById("exp-period2").value;
    var organization = document.getElementById("org-name").value;
    var github = document.getElementById("github").value;
    var linkedin = document.getElementById("linkedin").value;
    // Create an object to store the CV data
    var cvData = {
        name: name,
        designation: designation,
        email: email,
        address: address,
        phone: phone,
        period1a: period1a,
        period1b: period1b,
        education1: education1,
        period2a: period2a,
        period2b: period2b,
        education2: education2,
        period3a: period3a,
        period3b: period3b,
        education3: education3,
        exp1: exp1,
        exp2: exp2,
        organization: organization,
        github: github,
        linkedin: linkedin,
    };
    var cvContent = "\n            <div class=\"cv_output\">\n                <h1 class=\"personal-info\">".concat(cvData.name, "</h1>\n                <h5 class=\"personal-info\">").concat(cvData.designation, "</h5>\n\n                <div class=\"division\"></div>\n\n                <h3>Contacts and Address</h3>\n                <p><strong>Email:</strong> ").concat(cvData.email, "</p>\n                <p><strong>Address:</strong> ").concat(cvData.address, "</p>\n                <p><strong>Phone:</strong> ").concat(cvData.phone, "</p>\n\n                <div class=\"division\"></div>\n\n                <h3>EDUCATION</h3>\n                <div class=\"dynamic-edu\">\n                    <p><strong>From: </strong>").concat(cvData.period1a, "</p>\n                    <p><strong>To: </strong>").concat(cvData.period1b, "</p>\n                </div>\n                <p class=\"edu1\"><strong>Bachelors: </strong>").concat(cvData.education1, "</p>\n                <div class=\"dynamic-edu\">\n                    <p><strong>From: </strong>").concat(cvData.period2a, "</p>\n                    <p><strong>To: </strong>").concat(cvData.period2b, "</p>\n                </div>\n                <p class=\"edu1\"><strong>College: </strong>").concat(cvData.education2, "</p>\n                <div class=\"dynamic-edu\">\n                    <p><strong>From: </strong>").concat(cvData.period3a, "</p>\n                    <p><strong>To: </strong>").concat(cvData.period3b, "</p>\n                </div>\n                <p class=\"edu1\"><strong>School: </strong>").concat(cvData.education3, "</p>\n\n                <div class=\"division\"></div>\n\n                <h3>Skills</h3>\n                <p>").concat(skill1, "</p>\n                <p>").concat(skill2, "</p>\n                <p>").concat(skill3, "</p>\n                <p>").concat(skill4, "</p>\n                <p>").concat(skill5, "</p>\n                <p>").concat(skill6, "</p>\n                <p>").concat(skill7, "</p>\n                <p>").concat(skill8, "</p>\n                <p>").concat(skill9, "</p>\n                <p>").concat(skill10, "</p>\n\n                <div class=\"division\"></div>\n\n                <h3>Experience</h3>\n                <div class= \"exp-period\">\n                    <p><strong>From: </strong>").concat(cvData.exp1, "</p>\n                    <p><strong>To: </strong>").concat(cvData.exp2, "</p>\n                </div>\n                <p><strong>Organization: </strong>").concat(cvData.organization, "</p>\n\n                <div class=\"division\"></div>\n\n                <h3>Socials</h3>\n                <div class=\"dynamic-github\">\n                    <img src=\"/github.png\" alt=\"\" width=\"25\" height=\"25\">\n                    <p>").concat(cvData.github, "</p>\n                </div>\n\n                <div class=\"dynamic-linkedin\">\n                    <img src=\"/linkedin.png\" alt=\"\" width=\"25\" height=\"25\">\n                    <p>").concat(cvData.linkedin, "</p>\n                </div>\n\n                <div class=\"division\"></div>\n\n            </div>\n        ");
    // Display the CV in the cv-output div
    cvOutput.innerHTML = cvContent;
});
