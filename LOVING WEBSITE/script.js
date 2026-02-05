let lastScrollY = window.scrollY;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  // agar niche scroll kar rahe ho
  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    navbar.classList.add("hide");
  } 
  // agar thoda bhi upar scroll kiya
  else {
    navbar.classList.remove("hide");
  }

  lastScrollY = currentScrollY;
});


function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

// SPECIAL MESSAGE TOGGLE
const specialBtn = document.querySelector(".btn-primary");
const messageSection = document.getElementById("specialMessage");

let alertAlreadyShown = false; // 👈 yahi key hai

specialBtn.addEventListener("click", function () {
  const isShowing = messageSection.classList.toggle("show");

  if (isShowing) {
    specialBtn.innerText = "Hide Message 🙈";

    // alert sirf ek hi baar, OK ke baad repeat nahi
    if (!alertAlreadyShown) {
      alert("You are so precious and please scroll a little bit baby ❤️😘");
      alertAlreadyShown = true;
    }

  } else {
    specialBtn.innerText = "Special Massage 🫣";
  }
});

const heart = document.getElementById("heart-cursor");

let mouseX = 0, mouseY = 0;
let heartX = 0, heartY = 0;

// mouse position
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  createTrail(e.clientX, e.clientY);
});

// smooth dragging effect
function animate() {
  heartX += (mouseX - heartX) * 0.15;
  heartY += (mouseY - heartY) * 0.15;

  heart.style.transform = `translate(${heartX}px, ${heartY}px) rotate(45deg)`;
  requestAnimationFrame(animate);
}
animate();

// trail hearts
function createTrail(x, y) {
  const trail = document.createElement("div");
  trail.className = "heart-trail";
  trail.style.left = x + "px";
  trail.style.top = y + "px";

  document.body.appendChild(trail);

  setTimeout(() => {
    trail.remove();
  }, 1000);
}
