// ==========================
// Part 2: JavaScript Functions
// ==========================

// Example of global vs local scope
let globalCounter = 0;

// Function with parameter & return value
function addToCounter(value) {
  let localResult = globalCounter + value; // local variable
  globalCounter = localResult; // update global
  return localResult;
}

// Reusable function to toggle animation
function toggleAnimation(element, className) {
  element.classList.toggle(className);
}

// ==========================
// Part 3: Combining CSS + JS
// ==========================

const box = document.getElementById("animateBox");
const triggerBtn = document.getElementById("triggerBtn");
const resetBtn = document.getElementById("resetBtn");

// Animate box on click
triggerBtn.addEventListener("click", () => {
  let newValue = addToCounter(1); // using return value
  console.log("Animation triggered. Counter:", newValue);
  toggleAnimation(box, "animate");
});

// Reset box
resetBtn.addEventListener("click", () => {
  box.classList.remove("animate");
  box.classList.add("reset");
  console.log("Box reset. Counter reset to 0.");
  globalCounter = 0;
});

// ==========================
// Modal with animation
// ==========================
const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

openModal.addEventListener("click", () => {
  modal.style.display = "block";
});

closeModal.addEventListener("click", () => {
  modal.style.animation = "fadeOut 0.5s ease forwards";
  setTimeout(() => {
    modal.style.display = "none";
    modal.style.animation = ""; // reset animation
  }, 500);
});
