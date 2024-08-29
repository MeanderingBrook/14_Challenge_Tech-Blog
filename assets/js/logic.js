// Populates Footer with Current Year
document.querySelector("#year").textContent = new Date().getFullYear();

// Dark Mode Function for Index Page
function darkModeIndex() {
  // Applies Dark Mode to page Body
  const bodyEl = document.body;
  bodyEl.classList.toggle("dark-mode");

  // Applies Dark Mode to page Header
  const headerEl = document.querySelector("header");
  headerEl.classList.toggle("dark-mode");

  // Applies Dark Mode to page Button
  const buttonsEl = document.querySelector(".buttons");
  buttonsEl.classList.toggle("dark-mode");

  // Applies Dark Mode to page Footer
  const footerEl = document.querySelector("footer");
  footerEl.classList.toggle("dark-mode");

  // Applies Dark Mode to page Footer Copyright
  const footerCoprEl = document.querySelector(".copyright");
  footerCoprEl.classList.toggle("dark-mode");

  // Applies Dark Mode to page Post Elements
  const cards = document.querySelectorAll(".card");
  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.toggle("dark-mode");
  }

  // Shows / Hides Dark Mode Sun / Moon Icons
  const moonimg = document.getElementById("moonimg");
  const sunimg = document.getElementById("sunimg");
  if (moonimg.style.display === "none") {
    moonimg.style.display = "inline";
    sunimg.style.display = "none";
  } else {
    moonimg.style.display = "none";
    sunimg.style.display = "inline";
  }
}

// Dark Mode Function for Form Page
function darkModeForm() {
  // Applies Dark Mode to page Body
  const bodyEl = document.body;
  bodyEl.classList.toggle("dark-mode");

  // Applies Dark Mode to page Header
  const headerEl = document.querySelector("header");
  headerEl.classList.toggle("dark-mode");

  // Applies Dark Mode to page Form (Post) Elements
  const formEl = document.querySelector(".form");
  formEl.classList.toggle("dark-mode");

  // Applies Dark Mode to page Button
  const buttonsEl = document.querySelector(".buttons");
  buttonsEl.classList.toggle("dark-mode");

  // Applies Dark Mode to page Footer
  const footerEl = document.querySelector("footer");
  footerEl.classList.toggle("dark-mode");

  // Applies Dark Mode to page Footer Copyright
  const footerCoprEl = document.querySelector(".copyright");
  footerCoprEl.classList.toggle("dark-mode");

  // Shows / Hides Dark Mode Sun / Moon Icons
  const moonimg = document.getElementById("moonimg");
  const sunimg = document.getElementById("sunimg");
  if (moonimg.style.display === "none") {
    moonimg.style.display = "inline";
    sunimg.style.display = "none";
  } else {
    moonimg.style.display = "none";
    sunimg.style.display = "inline";
  }
}
