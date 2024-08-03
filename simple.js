let burger = document.querySelector(".burger");
let menu = document.querySelector(".menu");
let btn = document.querySelector(".button");
let form = document.querySelector(".form");
let main = document.querySelector(".main");
let cross = document.querySelector(".cross");
function AlertMessage() {
  alert("Under Consturction ✌️");
}

burger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  main.classList.toggle("blur");
  burger.style.display = "none";
  cross.style.display = "block";
});


cross.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  main.classList.toggle("blur");
  burger.style.display = "block";
  cross.style.display = "none";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let success = document.createElement("div");
  form.style.marginTop = "15px";
  success.style.width = "100%";
  success.style.height = "35px";
  success.style.backgroundColor = "rgb(209,231,221)";
  success.innerText = "Form Submitted Successfully. I will contact you soon.";
  success.style.color = "rgb(0, 128, 0)";
  success.style.fontSize = "16px";
  success.style.lineHeight = "15px";
  success.style.textAlign = "center";
  success.style.display = "flex";
  success.style.alignItems = "center";
  success.style.justifyContent = "center";
  success.style.borderRadius = "4px";
  success.style.opacity = "1"; // Initial opacity
  success.style.transition = "opacity 2s"; // Transition effect
  form.before(success);
  fadeOut(success);
});

let fadeOut = (element) => {
  setTimeout(() => {
    element.style.opacity = "0"; // Start fading out
    
    setTimeout(() => {
      element.style.display = "none";
      form.style.marginTop = "50px";
    }, 2000); // Match the duration of the transition
  }, 3000); // Delay before starting fade-out
};

function handleResize() {
  if (window.innerWidth > 500) {
    burger.style.display = "none";
    cross.style.display = "none";
    menu.classList.add("hidden");
    main.classList.remove("blur");
  } else {
    burger.style.display = "block";
    cross.style.display = "none";
  }
}
window.addEventListener("resize", handleResize);

// Initial check
handleResize();