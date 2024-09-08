// Get the form element
var form = document.getElementById("cv-form");
// Get the cv-output div
var cvOutput = document.getElementById("cv-output");
// Add event listener for form submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
    // Retrieve values from form fields
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var experience = document.getElementById("experience").value;
    // Create an object to store the form data
    var formData = {
        name: name,
        email: email,
        phone: phone,
        experience: experience
    };
    // Create the CV output HTML string
    var cvContent = "\n        <h2>CV</h2>\n        <p><strong>Name:</strong> ".concat(formData.name, "</p>\n        <p><strong>Email:</strong> ").concat(formData.email, "</p>\n        <p><strong>Phone:</strong> ").concat(formData.phone, "</p>\n        <p><strong>Experience:</strong> ").concat(formData.experience, "</p>\n    ");
    // Insert the generated CV into the cv-output div
    cvOutput.innerHTML = cvContent;
});
