$(function() {

    function clearAllFields() {
        $("#name-field").val("");
        $("#age-field").val("");
        $("#email-field").val("");
        $("#why-field").val("");
        $("#projects-field").val("");
    }

    $("#submit-button").click(function() {
        const name = $("#name-field").val();
        const age = $("#age-field").val();
        const email = $("#email-field").val();
        const why = $("#why-field").val();
        const projects = $("#projects-field").val();
        if (!(name.trim() !== "" && age.trim() !== "" && email.trim() !== "" && why.trim() !== "" && projects.trim() !== "")) {
            $("#error-message").slideDown(500);
            return;
        }
        var emailString = "I would like to apply for the Diax team:%0A%0AName: " + name + "%0A%0AAge: " + age + "%0A%0AEmail: " + email + "%0A%0AWhy I want to join the Diax team: " + why + "%0A%0AProjects I have worked on:" + projects;
        $("#form").slideUp(300);
        $("#success-message").slideDown(300);
        window.open('mailto:comportment@diax.me?subject=Application+for+the+Diax+team&body=' + emailString.replace(" ", "+") + '', 'Apply for the Diax Team', 'height=500,width=500');
    });
    $("#cancel-button").click(clearAllFields);
});