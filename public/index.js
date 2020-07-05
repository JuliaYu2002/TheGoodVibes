const the_good_vibes = document.getElementById("the-good-vibes");
let selected_mood;

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

let emojis = {
    happy: document.getElementById("happy"),
    random: document.getElementById("random"),
    romantic: document.getElementById("romantic"),
    serene: document.getElementById("serene"),
    international: document.getElementById("international"),
    hyped: document.getElementById("hyped"),
}

for (let emoji in emojis) {
    emojis[emoji].onclick = (e) => {
        // console.log(e.srcElement);
        selected_mood = e.srcElement.id;
        console.log(selected_mood);
        for (let em in emojis) {
            emojis[em].parentElement.classList.remove("selected");
        }
        e.srcElement.parentElement.classList.add("selected");

    };
}