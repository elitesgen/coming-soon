const toggleBtn = document.querySelector(".toggle-button");
const sideBar = document.querySelector(".side-bar");
const backdrop = document.querySelector(".backdrop");
const closeMenuBtn = document.querySelector(".menu-close-btn");

console.log(toggleBtn);
console.log(sideBar);

const openSideBar = (e) => {
  toggleBtn.style.display = "none";
  closeMenuBtn.style.display = "inline-block";

  sideBar.classList.remove("remove-side-bar");
  backdrop.classList.remove("remove-side-bar");
  sideBar.classList.add("open");
  backdrop.classList.add("open");
};

const closeSideBar = (e) => {
  toggleBtn.style.display = "block";
  closeMenuBtn.style.display = "none";

  sideBar.classList.add("remove-side-bar");
  backdrop.classList.add("remove-side-bar");
  sideBar.classList.remove("open");
  backdrop.classList.remove("open");
};

toggleBtn.addEventListener("click", openSideBar);
backdrop.addEventListener("click", closeSideBar);
closeMenuBtn.addEventListener("click", closeSideBar);