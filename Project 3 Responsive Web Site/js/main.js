/**
 * Changes made:
 * Switched to JQuery where necessary
 * Renamed about section to Sunbreak section
 * Added documentation
 * Added part to account for new form page on "switching pages"
 */

$("document").ready(function() {
    $("#sections").hide();
    $("#headerImage").click(showHome);
    $("#homeButton" ).click(showHome);
    $("#weaponsButton" ).click(showWeapons);
    $("#monstersButton").click(showMonsters);
    $("#sunbreakButton" ).click(showSunbreak);
    $("#formButton" ).click(showForm);
    $("#form").hide()
});

function showHome() {
    /**
     * Will hide all sections when button is clicked
     */
    let sections = $("section");
    let newTheme = $("link")[1]
    if (newTheme.disabled) {
        sections.hide()
    }
    else {
        $("section").slideUp()
    }
}

function showWeapons() {
    /**
     * Will hide all sections when button is clicked, then show the weapons section
     */
    let sections = $("section");
    let newTheme = $("link")[1]
    if (newTheme.disabled) {
        sections.hide();
        $("#weapons").show();
    }
    else {
        if ($("#monsters").is(":visible")) {
            $("#monsters").slideUp(function() {
                $("#weapons").slideDown()
            })
        }
        else if ($("#sunbreak").is(":visible"))
        $("#sunbreak").slideUp(function() {
            $("#weapons").slideDown()
        })
        else if ($("#form").is(":visible"))
        $("#form").slideUp(function() {
            $("#weapons").slideDown()
        })
        else {
            $("#weapons").slideDown()
        }
    }
}

function showMonsters() {
    /**
     * Will hide all sections when button is clicked, then show the monsters section
     */
    let sections = $("section");
    let newTheme = $("link")[1]
    if (newTheme.disabled) {
        sections.hide();
        $("#monsters").show();
    }
    else {
        if ($("#weapons").is(":visible")) {
            $("#weapons").slideUp(function() {
                $("#monsters").slideDown()
            })
        }
        else if ($("#sunbreak").is(":visible"))
        $("#sunbreak").slideUp(function() {
            $("#monsters").slideDown()
        })
        else if ($("#form").is(":visible"))
        $("#form").slideUp(function() {
            $("#monsters").slideDown()
        })
        else {
            $("#monsters").slideDown()
        }
    }
}
    

function showSunbreak() {
    /**
     * Will hide all sections when button is clicked, then show the Sunbreak section
     */
    let sections = $("section");
    let newTheme = $("link")[1]
    if (newTheme.disabled) {
        sections.hide();
        $("#sunbreak").show();
    }
    else {
        if ($("#monsters").is(":visible")) {
            $("#monsters").slideUp(function() {
                $("#sunbreak").slideDown()
            })
        }
        else if ($("#weapons").is(":visible"))
        $("#weapons").slideUp(function() {
            $("#sunbreak").slideDown()
        })
        else if ($("#form").is(":visible"))
        $("#form").slideUp(function() {
            $("#sunbreak").slideDown()
        })
        else {
            $("#sunbreak").slideDown()
        }
    }
}

function showForm() {
    /**
     * Will hide all sections when button is clicked, then show the form section
     */
    let sections = $("section");
    let newTheme = $("link")[1]
    if (newTheme.disabled) {
        sections.hide();
        $("#form").show();
    }
    else {
        if ($("#monsters").is(":visible")) {
            $("#monsters").slideUp(function() {
                $("#form").slideDown()
            })
        }
        else if ($("#weapons").is(":visible"))
        $("#weapons").slideUp(function() {
            $("#form").slideDown()
        })
        else if ($("#sunbreak").is(":visible"))
        $("#sunbreak").slideUp(function() {
            $("#form").slideDown()
        })
        else {
            $("#form").slideDown()
        }
    }
}

function changeTheme() {
    /**
     * Changes the theme, as well as a few images
     */
    let newTheme = $("link")[1]
    if (newTheme.disabled) {
        newTheme.disabled = false
        $("button img").attr("src", "img/sunbreakLogo.png")
        $("figure img").attr("src", "img/vsMalzeno.jpg")
        $("figcaption").html("A group of hunters beginning their fight against Malzeno")
    }
    else {
        newTheme.disabled = true
        $("button img").attr("src", "img/Monster_Hunter_Rise_logo.webp")
        $("figure img").attr("src", "img/quest58_01.jpg")
        $("figcaption").html("A hunter wielding a longsword facing off against Magnamalo and Mizutsune")
    }
    
}