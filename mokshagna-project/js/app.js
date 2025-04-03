
function init() {
    const hamburger = document.querySelector(".hamburger-logo");
    const sideBarCloseButton = document.querySelector(".close-button")
    const sideBarContainer = document.querySelector(".sidebar-container");

    const openSidebar = () => {
        sideBarContainer.classList.add("show-sidebar");
    }

    hamburger.addEventListener("click", openSidebar);

    const closeSideBar = () => {
        sideBarContainer.classList.remove("show-sidebar");
    }

    sideBarCloseButton.addEventListener("click", closeSideBar);
}
init();

function navBarRelatedCode() {
    const navContainer = document.querySelector(".nav-container");
    window.addEventListener("scroll", function () {
        const targetNumber = this.innerWidth >= 992 ? 70 : 50;
        if (this.scrollY >= targetNumber) {
            navContainer.classList.add("sticky-nav");
        }
        else {
            navContainer.classList.remove("sticky-nav");
        }
    })
}
navBarRelatedCode();