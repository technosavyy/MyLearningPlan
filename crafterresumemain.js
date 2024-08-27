
$(document).ready(function () {

    $('.add-experience').click(function () {
        // Clone the last experience entry and append it to add a new set of fields
        var newEntry = $('.experience-entry').last().clone();
        newEntry.find('input').val(''); // Clear input values in the new entry
        $('.experience-entry').last().after(newEntry); // Append the new entry after the last one
    });


    $('#submitAll').click(function () {
        // e.preventDefault();
        var firstName = $('#firstName').val();
        var lastName = $('#lastName').val();
        var degree = $('#degree').val();
        var university = $('#university').val();
        var city = $('#city').val();
        var state = $('#state').val();
        var age = $('#age').val();
        var gender = $('#gender').val();

        $('#candidatesTable').append(
            '<tr>' +
            '<td>' + firstName + '</td><td>' + lastName + '</td><td>' + degree +
            '</td><td>' + university + '</td><td>' + city + '</td><td>' + state + '</td>'
            + '<td>' + age + '</td>' + '<td>' + gender + '</td>'
            + '</tr>'
        );

        // Clear the form fields after submission

        //TODO
        // code for clear the form submission

    });

    $('#exportBtn').on('click', function () {
        window.jsPDF = window.jspdf.jsPDF;
        var doc = new jsPDF();
        var formData = $('#candidateForm').serializeArray();
        var yPos = 10;
        doc.text(20, yPos, "FirstName" + ': ' + $('#firstName').val());
        yPos += 10;
        var filename = $('#firstName').val() + "_" + $('#lastName').val() + "_resume.pdf"
        doc.save(filename);
    });

}
);
