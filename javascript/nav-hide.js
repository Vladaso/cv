var prevScrollpos = window.pageYOffset;
    var buttonPressed = false;

    function stopHide() {
        buttonPressed = !buttonPressed;
        setTimeout(() => {

        }, 1000);
    }

    document.getElementById("navbar-toggler").addEventListener("click", stopHide);

    window.addEventListener("scroll", function() {
        var currentScrollPos = window.pageYOffset;
        if (!buttonPressed) {
            var navbar = document.getElementById("navbar");

            if (prevScrollpos > currentScrollPos) {
                navbar.style.top = "0";
            } else {
                navbar.style.top = "-12%";
            }
            prevScrollpos = currentScrollPos;
        }
    });