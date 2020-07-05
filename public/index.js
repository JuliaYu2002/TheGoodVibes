const the_good_vibes = document.getElementById("the-good-vibes");

the_good_vibes.addEventListener("webkitAnimationEnd", (e) => {
    if (e.animationName == "fadeOut") {
        the_good_vibes.remove();
    }
}, false);
the_good_vibes.addEventListener("animationend", (e) => {
    if (e.animationName == "fadeOut") {
        the_good_vibes.remove();
    }
}, false);
the_good_vibes.addEventListener("oanimationend", (e) => {
    if (e.animationName == "fadeOut") {
        the_good_vibes.remove();
    }
}, false);