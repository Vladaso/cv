var prevScrollpos = window.scrollY;
    var buttonPressed = false;

    function stopHide() {
        buttonPressed = !buttonPressed;
        setTimeout(() => {

        }, 1000);
    }

    document.getElementById("navbar-toggler").addEventListener("click", stopHide);

    window.addEventListener("scroll", function() {
        var currentScrollPos = window.scrollY;
        if (!buttonPressed) {
            var navbar = document.getElementById("navbar");
            if(Math.abs(prevScrollpos - currentScrollPos) > 100){
                if (prevScrollpos > currentScrollPos) {
                    navbar.style.top = "0";
                } else {
                    navbar.style.top = "-20%";
                }
                prevScrollpos = currentScrollPos;

            }
        }
    });