var form = document.getElementById('resume-form');
var exportButton = document.getElementById('export-pdf');
var pdf = new jsPDF();
function demoFromHTML() {
    var pdf = new jsPDF('p', 'pt', 'letter');
    source = $('#content')[0];
    specialElementHandlers = {
        '#bypassme': function (element, renderer) {
            return true
        }
    };

    margins = {
        top: 80,
        bottom: 60,
        left: 40,
        width: 522
    };
    pdf.fromHTML(source,
        margins.left,
        margins.top, {
        'width': margins.width,
        'elementHandlers': specialElementHandlers
    },

    );
}

exportButton.addEventListener('click', function (event) {
    event.preventDefault();

    var h2 = document.getElementById('letter2').innerText;


    var nameInput = document.getElementById('name');
    var name = nameInput.value.trim();
    var nameError = document.getElementById('name-error');

    if (name === '') {
        nameError.textContent = 'Full name is required';
        nameError.style.color = 'red';
        nameInput.focus();
        return;
    } else if (!/^[a-zA-Z\s]*$/.test(name)) {
        nameError.textContent = 'Full name should only contain alphabetic characters';
        nameError.style.color = 'red';
        nameInput.focus();
        return;
    } else {
        nameError.textContent = '';
    }

    var phoneNumberInput = document.getElementById('phone-number');
    var phoneNumber = phoneNumberInput.value.trim();
    var phoneNumberError = document.getElementById('phone-number-error');

    /*if (phoneNumber === '') {
         phoneNumberError.textContent = 'Phone number is required';
         phoneNumberError.style.color='red';
         phoneNumberInput.focus();
         return;
     } else if (!/^\d{10}$/.test(phoneNumber)) {
         phoneNumberError.textContent = 'Phone number should be in the format xxxxxxxxxx';
         phoneNumberError.style.color='red';
         phoneNumberInput.focus();
         return;
     } 
     else {
         phoneNumberError.textContent = '';
     }*/

    var emailInput = document.getElementById('email');
    var email = emailInput.value.trim();
    /* var emailError = document.getElementById('email-error');
 
     if (email === '') {
         emailError.textContent = 'Email address is required';
         emailError.style.color = 'red';
         emailInput.focus();
         return;
     } else if (!/\S+@\S+\.\S+/.test(email)) {
         emailError.textContent = 'Invalid email address format';
         emailError.style.color='red';
         emailInput.focus();
         return;
     } 
     else {
      emailError.textContent = ''; 
     }*/

    var link = document.getElementById('linkedin').value;
    var linkedinInput = document.getElementById('linkedin');
    /* var linkedin = linkedinInput.value.trim();
     var linkedinError = document.getElementById('linkedin-error');
     function isValidUrl(url) {
         var pattern = /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]+\/?$/;
         return pattern.test(url);
     }
 
     if (linkedin !== '' && !isValidUrl(linkedin)) {
             window.open(linkedin, '_blank');
         linkedinError.textContent = 'Invalid LinkedIn profile URL format';
         linkedinError.style.color='red';
         linkedinInput.focus();
         return;
     }
     else {
          linkedinError.textContent = ''; 
     }*/

    var h3 = document.getElementById('letter3').innerText;
    var obj = document.getElementById('objectives').innerText;
    var obj = document.getElementById('objectives').value;
    var teach = document.getElementById('teachingexp').value;
    var eduText = "";
    var eduHeight = 0;
    var educationEntries = document.querySelectorAll('.education-entry');

    educationEntries.forEach(function (entry, index) {
        var institution = entry.querySelector('.education-institution').value.trim();
        var degree = entry.querySelector('.education-degree').value.trim();
        var fromDate = entry.querySelector('.education-from-date').value.trim();
        var toDate = entry.querySelector('.education-to-date').value.trim();
        var percentageCGPA = entry.querySelector('.education-percentage-cgpa').value.trim();

        eduText += `${index + 1}. Institution: ${institution}\n   Degree: ${degree}\n   From: ${fromDate}\n   To: ${toDate}\n   Percentage/CGPA: ${percentageCGPA}\n`;
        eduHeight += pdf.getStringUnitWidth(`${index + 1}. Institution: ${institution}\n   Degree: ${degree}\n   From: ${fromDate}\n   To: ${toDate}\n   Percentage/CGPA: ${percentageCGPA}\n`) * 1;
    });
    var skills = document.getElementById('skills').value;
    var prof = document.getElementById('professional').value;
    var honer = document.getElementById('honors').value;
    var ref = document.getElementById('reference').value;

    var verticalPosition = 20;

    var text = `${h2}:`;
    pdf.setFont("times");
    pdf.setFontStyle("bold");
    pdf.setFontSize(16);
    pdf.text(text, 15, verticalPosition);
    verticalPosition += 5;

    text = `Name: ${name}\nPhoneNumber: ${phoneNumber}\nEmail: ${email}\nLinkedIn: ${link}\n`;
    pdf.setFont("courier");
    pdf.setFontStyle("normal");
    pdf.setFontSize(12);
    pdf.text(text, 20, verticalPosition);
    verticalPosition += 22;

    var text = `${h3}:`;
    pdf.setFont("times");
    pdf.setFontStyle("bold");
    pdf.setFontSize(16);
    pdf.text(text, 15, verticalPosition);
    verticalPosition += 5;

    text = `Objectives and Summary:\n${obj}\n\n\nTeaching Experience:\n${teach}\n`;
    pdf.setFontSize(12);
    pdf.setFontStyle("italic");
    pdf.text(text, 20, verticalPosition);
    verticalPosition += 35;

    text = `\nEducation :`;
    pdf.setFont("times")
    pdf.setFontStyle("bold");
    pdf.setFontSize(16);
    pdf.text(text, 15, verticalPosition);
    verticalPosition += 12;

    text = `\n${eduText}\n`;
    pdf.setFontSize(12);
    pdf.setFont("courier");
    pdf.setFontStyle("normal");
    pdf.text(text, 15, verticalPosition);
    verticalPosition += eduHeight;

    text = `\nSkills:`;
    pdf.setFont("times");
    pdf.setFontStyle("bold");
    pdf.setFontSize(16);
    pdf.text(text, 15, verticalPosition);
    verticalPosition += 12;

    text = ` \n${skills}`;
    pdf.setFont("courier");
    pdf.setFontStyle("normal");
    pdf.setFontSize(12);
    pdf.text(text, 20, verticalPosition);
    verticalPosition += 10;

    text = `\nProfessional Development:`;
    pdf.setFont("times");
    pdf.setFontStyle("bold");
    pdf.setFontSize(16);
    pdf.text(text, 15, verticalPosition);
    verticalPosition += 10;

    text = `\n${prof}`;
    pdf.setFont("courier");
    pdf.setFontStyle("normal");
    pdf.setFontSize(12);
    pdf.text(text, 20, verticalPosition);
    verticalPosition += 10;

    text = `\nHonors/Rewards:`;
    pdf.setFont("times");
    pdf.setFontStyle("bold");
    pdf.setFontSize(16);
    pdf.text(text, 15, verticalPosition);
    verticalPosition += 10;

    text = `\n${honer}`;
    pdf.setFont("courier");
    pdf.setFontStyle("normal");
    pdf.setFontSize(12);
    pdf.text(text, 20, verticalPosition);
    verticalPosition += 10;

    text = `\nReference:`;
    pdf.setFont("times");
    pdf.setFontStyle("bold");
    pdf.setFontSize(16);
    pdf.text(text, 15, verticalPosition);
    verticalPosition += 10;

    text = `\n${ref}`;
    pdf.setFont("courier");
    pdf.setFontStyle("normal");
    pdf.setFontSize(12);
    pdf.text(text, 20, verticalPosition);

    pdf.save("Resume.pdf");


    alert('Form submitted successfully!');
});
document.addEventListener("DOMContentLoaded", function () {
    const addEducationButton = document.getElementById("add-education");
    addEducationButton.addEventListener("click", addEducationEntry);

    function addEducationEntry() {
        const educationSection = document.getElementById("education");
        if (educationSection) {
            const newEducationEntry = document.createElement("div");
            newEducationEntry.classList.add("education-entry");

            newEducationEntry.innerHTML = `
        <input type="text" class="education-institution" placeholder="Institution" required>
        <input type="text" class="education-degree" placeholder="Degree" required>
        <input type="text" class="education-from-date" placeholder="From" required>
        <input type="text" class="education-to-date" placeholder="To" required>
        <input type="text" class="education-percentage-cgpa" placeholder="Percentage/CGPA" required>
        <button class="remove-education">Remove</button>`;

            const lastEducationEntry = educationSection.querySelector('.education-entry:last-child');
            if (lastEducationEntry) {
                lastEducationEntry.before(newEducationEntry);
            } else {
                educationSection.appendChild(newEducationEntry);
            }
        } else {
            console.error("Education section not found");
        }
    }


    document.addEventListener("click", function (event) {
        if (event.target.classList.contains("remove-education")) {
            const educationEntry = event.target.parentElement;
            const educationSection = educationEntry.parentElement;
            educationSection.removeChild(educationEntry);
        }
    });
});