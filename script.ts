// Interface for the form data
interface CVFormData {
    name: string;
    email: string;
    phone: string;
    experience: string;
    skills: string;
    education: string;
}

// Get the form elements
const personalInfoForm = document.getElementById("cv-form") as HTMLFormElement;
const skillsForm = document.getElementById("skills-form") as HTMLFormElement | null;
const educationForm = document.getElementById("education-form") as HTMLFormElement | null;

// Get the cv-output div
const cvOutput = document.getElementById("cv-output") as HTMLDivElement;

// Helper function to store data in localStorage
function saveToLocalStorage(key: string, value: string): void {
    localStorage.setItem(key, value);
}

// Helper function to get data from localStorage
function getFromLocalStorage(key: string, fallback: string = ""): string {
    return localStorage.getItem(key) || fallback;
}

// Add event listener for personal info form submission
if (personalInfoForm) {
    personalInfoForm.addEventListener("submit", function(event: Event) {
        event.preventDefault(); // Prevent form submission

        // Retrieve personal info from form fields
        const name = (document.getElementById("name") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const phone = (document.getElementById("phone") as HTMLInputElement).value;
        const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;

        // Retrieve skills and education from localStorage
        const skills = getFromLocalStorage("skills", "No skills added");
        const education = getFromLocalStorage("education", "No education added");

        // Create an object to store the CV data
        const cvData: CVFormData = {
            name,
            email,
            phone,
            experience,
            skills,
            education
        };

        // Create the CV output
        const cvContent: string = `
            <h2>CV</h2>
            <p><strong>Name:</strong> ${cvData.name}</p>
            <p><strong>Email:</strong> ${cvData.email}</p>
            <p><strong>Phone:</strong> ${cvData.phone}</p>
            <p><strong>Experience:</strong> ${cvData.experience}</p>
            <p><strong>Skills:</strong> ${cvData.skills}</p>
            <p><strong>Education:</strong> ${cvData.education}</p>
        `;

        // Display the CV in the cv-output div
        cvOutput.innerHTML = cvContent;
    });
}

// Add event listener for skills form submission
if (skillsForm) {
    skillsForm.addEventListener("submit", function(event: Event) {
        event.preventDefault(); // Prevent form submission

        // Get the skills input
        const skills = (document.getElementById("skills") as HTMLInputElement).value;

        // Save the skills to localStorage
        saveToLocalStorage("skills", skills);

        alert("Skills added successfully!");
    });
}

// Add event listener for education form submission
if (educationForm) {
    educationForm.addEventListener("submit", function(event: Event) {
        event.preventDefault(); // Prevent form submission

        // Get the education input
        const education = (document.getElementById("education") as HTMLInputElement).value;

        // Save the education to localStorage
        saveToLocalStorage("education", education);

        alert("Education added successfully!");
    });
}
