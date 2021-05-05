$(function(){
    //Au clic de l'id display, on affcihe le texte
    $("#display").click(function(){
        $("#text").show();
    });
    // Au clic de l'id hide, on cache le texte
    $("#hide").click(function(){
        $("#text").hide();
    });
});




// OR méthode toggle()
/*
$(function(){
    // Inverse l'état de visibilité (hide/show) de text lors d'un clic sur #hide, et ainsi de suite...
    $("#hide").click(function(){
        $("#text").toggle();
    });
});
*/



// En JS vanilla, on aurait :
/*
let display_link = document.getElementById("display");
let hide_link = document.getElementById("hide");
let text = document.getElementById("text");

display_link.addEventListener("click", () => {
    text.style.display = "block";
});

hide_link.addEventListener("click", () => {
    text.style.display = "none";
});
*/