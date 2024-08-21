//TODO: Currently unused, doesnt work, need to fix navbar sometimes looks funny
document.addEventListener("DOMContentLoaded", function() {
    const currentPath = window.location.pathname;
    const currentHash = window.location.hash;

    const navLinks = document.querySelectorAll(".nav-link");

    function removeActiveClass() {
        navLinks.forEach(link => {
            link.classList.remove("active");
        });
    }
    function setActiveLink(){
        navLinks.forEach(link => {
            if (currentPath.includes("index.html")) {
                if (link.textContent.trim() === "Home") {
                    removeActiveClass();
                    link.classList.add("active");
                }
            } else if (currentPath.includes("cv.html")) {
                if (link.textContent.trim() === "CV") {
                    removeActiveClass();
                    link.classList.add("active");
                }
            } else if (currentPath.includes("projects.html")) {
                if (link.textContent.trim() === "Projects") {
                    removeActiveClass();
                    link.classList.add("active");
                }
            } else if (currentPath.includes("achievements.html")) {
                if (link.textContent.trim() === "Achievements") {
                    removeActiveClass();
                    link.classList.add("active");
                }
            } else if (currentPath.includes("skills.html")) {
                if (link.textContent.trim() === "Skills") {
                    removeActiveClass();
                    link.classList.add("active");
                }
            } else if (currentPath.includes("blog.html")) {
                if (link.textContent.trim() === "Blog") {
                    removeActiveClass();
                    link.classList.add("active");
                }
            }
        });
    }

});