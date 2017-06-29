$(function() {

    function clearAllFields() {
        $("#name-field").val("");
        $("#age-field").val("");
        $("#email-field").val("");
        $("#why-field").val("");
        $("#projects-field").val("");
    }

    $("#submit-button").click(function() {
        var name = $("#name-field").val();
        var age = $("#age-field").val();
        var email = $("#email-field").val();
        var why = $("#why-field").val();
        var projects = $("#projects-field").val();
        if (!(name.trim() != "" && age.trim() != "" && email.trim() != "" && why.trim() != "" && projects.trim() != "")) {
            $("#error-message").slideDown(500);
            return;
        }
        var emailString = "New Application:\nName: " + name + "\nAge: " + age + "\nEmail: " + email + "\nWhy I want to join the Diax team: " + why + "\nProjects I have worked on:" + projects;
        $("#form").slideUp(300);
        $("#success-message").slideDown(300);
        //Send emailString to an email
    });
    $("#cancel-button").click(clearAllFields);
});