window.addEventListener("scroll", function () {
    const header = this.document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

const projectModals = document.querySelectorAll(".project-modal");
const projectCards = document.querySelectorAll(".project-card");
const projectCloseBtns = document.querySelectorAll(".project-close-btn");

var projectModal = function (modalClick) {
    projectModals[modalClick].classList.add("active");
    
}
    

projectCards.forEach((projectCard, i) => {
    projectCard.addEventListener("click", () => {
        projectModal(i);
    });
});


projectCloseBtns.forEach((projectCloseBtn) => {
    projectCloseBtn.addEventListener("click", () => {
        projectModals.forEach((projectModalView) => {
            projectModalView.classList.remove("active")
        })
    })
})



