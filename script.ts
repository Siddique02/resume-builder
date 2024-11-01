
// Interface for the form data
interface CVFormData {
    name: string;
    designation: string;
    email: string;
    address: string;
    phone: string;
    period1a: string;
    period1b: string;
    education1: string;
    period2a: string;
    period2b: string;
    education2: string;
    period3a: string;
    period3b: string;
    education3: string;
    exp1: string;
    exp2: string;
    organization: string;
    github: string;
    linkedin: string;
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
        const designation = (document.getElementById("designation") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const address = (document.getElementById("address") as HTMLInputElement).value;
        const phone = (document.getElementById("phone") as HTMLInputElement).value;

        const period1a = (document.getElementById("period-1a") as HTMLInputElement).value;
        const period1b = (document.getElementById("period-1b") as HTMLInputElement).value;
        const education1 = (document.getElementById("education1") as HTMLInputElement).value;

        const period2a = (document.getElementById("period-2a") as HTMLInputElement).value;
        const period2b = (document.getElementById("period-2b") as HTMLInputElement).value;
        const education2 = (document.getElementById("education2") as HTMLInputElement).value;

        const period3a = (document.getElementById("period-3a") as HTMLInputElement).value;
        const period3b = (document.getElementById("period-3b") as HTMLInputElement).value;
        const education3 = (document.getElementById("education3") as HTMLInputElement).value;

        const skill1 = (document.getElementById("skill1") as HTMLInputElement).value;
        const skill2 = (document.getElementById("skill2") as HTMLInputElement).value;
        const skill3 = (document.getElementById("skill3") as HTMLInputElement).value;
        const skill4 = (document.getElementById("skill4") as HTMLInputElement).value;
        const skill5 = (document.getElementById("skill5") as HTMLInputElement).value;
        const skill6 = (document.getElementById("skill6") as HTMLInputElement).value;
        const skill7 = (document.getElementById("skill7") as HTMLInputElement).value;
        const skill8 = (document.getElementById("skill8") as HTMLInputElement).value;
        const skill9 = (document.getElementById("skill9") as HTMLInputElement).value;
        const skill10 = (document.getElementById("skill10") as HTMLInputElement).value;

        const exp1 = (document.getElementById("exp-period1") as HTMLTextAreaElement).value;
        const exp2 = (document.getElementById("exp-period2") as HTMLTextAreaElement).value;
        const organization = (document.getElementById("org-name") as HTMLTextAreaElement).value;

        const github = (document.getElementById("github") as HTMLInputElement).value;
        const linkedin = (document.getElementById("linkedin") as HTMLInputElement).value;




        // Create an object to store the CV data
        const cvData: CVFormData = {
            name,
            designation,
            email,
            address,
            phone,
            period1a,
            period1b,
            education1,
            period2a,
            period2b,
            education2,
            period3a,
            period3b,
            education3,
            exp1,
            exp2,
            organization,
            github,
            linkedin,
        };


        const cvContent: string = `
            <div class="cv_output">
                <h1 class="personal-info">${cvData.name}</h1>
                <h5 class="personal-info">${cvData.designation}</h5>

                <div class="division"></div>

                <h3>Contacts and Address</h3>
                <p><strong>Email:</strong> ${cvData.email}</p>
                <p><strong>Address:</strong> ${cvData.address}</p>
                <p><strong>Phone:</strong> ${cvData.phone}</p>

                <div class="division"></div>

                <h3>EDUCATION</h3>
                <div class="dynamic-edu">
                    <p><strong>From: </strong>${cvData.period1a}</p>
                    <p><strong>To: </strong>${cvData.period1b}</p>
                </div>
                <p class="edu1"><strong>Bachelors: </strong>${cvData.education1}</p>
                <div class="dynamic-edu">
                    <p><strong>From: </strong>${cvData.period2a}</p>
                    <p><strong>To: </strong>${cvData.period2b}</p>
                </div>
                <p class="edu1"><strong>College: </strong>${cvData.education2}</p>
                <div class="dynamic-edu">
                    <p><strong>From: </strong>${cvData.period3a}</p>
                    <p><strong>To: </strong>${cvData.period3b}</p>
                </div>
                <p class="edu1"><strong>School: </strong>${cvData.education3}</p>

                <div class="division"></div>

                <h3>Skills</h3>
                <p>${skill1}</p>
                <p>${skill2}</p>
                <p>${skill3}</p>
                <p>${skill4}</p>
                <p>${skill5}</p>
                <p>${skill6}</p>
                <p>${skill7}</p>
                <p>${skill8}</p>
                <p>${skill9}</p>
                <p>${skill10}</p>

                <div class="division"></div>

                <h3>Experience</h3>
                <div class= "exp-period">
                    <p><strong>From: </strong>${cvData.exp1}</p>
                    <p><strong>To: </strong>${cvData.exp2}</p>
                </div>
                <p><strong>Organization: </strong>${cvData.organization}</p>

                <div class="division"></div>

                <h3>Socials</h3>
                <div class="dynamic-github">
                    <img src="/github.png" alt="" width="25" height="25">
                    <p>${cvData.github}</p>
                </div>

                <div class="dynamic-linkedin">
                    <img src="/linkedin.png" alt="" width="25" height="25">
                    <p>${cvData.linkedin}</p>
                </div>

                <div class="division"></div>

            </div>
        `;

        // Display the CV in the cv-output div
        cvOutput.innerHTML = cvContent;
    });
}
