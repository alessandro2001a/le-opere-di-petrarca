/* Funzioni comuni a tutte le pagine del sito.
   Entrambe sono copiate dagli esempi "How To" di W3Schools,
   il riferimento indicato dal corso. */

/* Menu di navigazione responsive.
   Copiato da W3Schools: How To > Responsive Top Navigation.
   Toggle between adding and removing the "responsive" class
   to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/* Pulsante "torna su".
   Copiato da W3Schools: How To > Scroll Back To Top Button. */
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
