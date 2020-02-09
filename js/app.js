function goBack() {
    window.history.back();
}

// Creates a variable called body, so we can reference it more easily below.
var body = document.querySelector("body"),
    // Creates a function called goLight that adds the 'dark' class to the body
    goLight = function () {
        body.className = "";
        body.className = "light";
    },
    // Creates a function called goDark that removes the 'dark' class from the body
    goDark = function () {
        body.className = "";
        body.classList.add("dark");
    },
    goTeal = function () {
        body.className = "";
        body.classList.add("teal");
    };

// Tells the first button to run the goLight function when clicked
document.querySelector(".theme1").addEventListener("click", goLight, false);

// Tells the second button to run the goDark function when clicked
document.querySelector(".theme2").addEventListener("click", goDark, false);


$(document).ready(function () {
    $('#mountain-trigger').on('click', function () {
        $('.tab-mountain').removeClass('active-tab').addClass('active-tab');
        $('.tab-windsurfen').removeClass('active-tab');
        $('.tab-snorkelen').removeClass('active-tab')

    });

    $('#windsurfen-trigger').on('click', function () {
        $('.tab-windsurfen').removeClass('active-tab').addClass('active-tab');
        $('.tab-mountain').removeClass('active-tab');
        $('.tab-snorkelen').removeClass('active-tab')
    });

    $('#snorkelen-trigger').on('click', function () {
        $('.tab-snorkelen').removeClass('active-tab').addClass('active-tab');
        $('.tab-mountain').removeClass('active-tab');
        $('.tab-windsurfen').removeClass('active-tab');
    })
});