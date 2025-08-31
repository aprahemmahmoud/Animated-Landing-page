
const otherLinks = document.querySelector(".other-links a");
const megamenu = document.querySelector(".megamenu");

otherLinks.addEventListener("click", function(e) {
    e.preventDefault();
    megamenu.classList.toggle("show");
});

document.addEventListener("click", function(e) {
    if (!megamenu.contains(e.target) && !otherLinks.contains(e.target)) {
    megamenu.classList.remove("show");
    }
});

