

document.addEventListener("DOMContentLoaded", () => {
    anime({
      targets: '.fade-up',
      opacity: [0, 1],
      translateY: [40, 0],
      duration: 1200,
      easing: 'easeOutQuad',
      delay: anime.stagger(200)
    });

    anime({
      targets: '.slide-in-left',
      opacity: [0, 1],
      translateX: [-100, 0],
      duration: 1000,
      easing: 'easeOutExpo',
      delay: anime.stagger(150)
    });

    anime({
      targets: '.slide-in-right',
      opacity: [0, 1],
      translateX: [100, 0],
      duration: 1000,
      easing: 'easeOutExpo',
      delay: anime.stagger(150)
    });
  });

// Navigation menu scroll down
window.addEventListener("scroll", ()=>{
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    const navbar = document.querySelector(".nav");
    if(scrollY > 50){
        navbar.classList.add("scroll");
    }else{
        navbar.classList.remove("scroll");
    }
    if (window.scrollY > 200) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
})


scrollTopBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

// --------------------- Navbar reponsiveness -------------------------------
const navbar = document.querySelector("nav");
const menu = document.querySelector("#menu");

menu.addEventListener("click", () =>{
    navbar.classList.toggle("responsive");
    console.log("hello");
    
})
// Our popup, closebtn, openBtn for the popup, and the home for making the overlay darker when clicked
const popup = document.querySelector(".popup");
const learn__btn = document.querySelector(".learn");
const close_btn = document.getElementById("close_btn");
const home = document.querySelector(".home");

// Popup menu
learn__btn.addEventListener("click", ()=>{
    if(popup){
        popup.classList.add("show");
        home.classList.add("balls__deep")
    }
})
close_btn.addEventListener("click", ()=>{
    if(popup){
        popup.classList.remove("show");
        home.classList.remove("balls__deep");
    }
})
// the counter animation
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  const target = +counter.getAttribute('data-target');
  const increment = target / 100;
  let count = 0;
  const updateCount = () => {
    if (count < target) {
      count += increment;
      counter.innerText = Math.ceil(count);
      setTimeout(updateCount, 25);
    } else counter.innerText = target;
  };
  updateCount();
});

