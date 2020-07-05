const the_good_vibes = document.getElementById("the-good-vibes");
let vibe_button = document.getElementById("vibe-button");

let selected_mood;

let playlists = {
    happy: ["4OQq1cgV9FJ35t5YCCvB9r", "37i9dQZF1DX5Lm1ZiObdc3", "0vmOmFbo4upEmeeR9GebQo", "3hnSWVzDtrbgjKP5Ef4neK"],
    romantic: ["37i9dQZF1DX68aCfKW9xMy", "37i9dQZF1DX5IDTimEWoTd", "37i9dQZF1DWSRc3WJklgBs"],
    serene: ["13jKVe0FIrzqa2rNAvOkS3", "37i9dQZF1DX4PP3DA4J0N8", "2QwcMBmizP3fHUuEao1W07"],
    international: ["2MDDQeljbTOL5El6z0GM96", "37i9dQZF1DXaR954ExpGKR", "37i9dQZF1DWVCKO3xAlT1Q"],
    hyped: ["6Q19TwPEwcLpMmX6usSpdE", "37i9dQZF1DX9CCxc3fffni", "1TsJsf4QfjPnIpi6VkUkx9"]
}

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
        for (let em in emojis) {
            emojis[em].parentElement.classList.remove("selected");
        }
        e.srcElement.parentElement.classList.add("selected");
        vibe_button.classList.remove("hidden");
    };
}

vibe_button.onclick = () => {
    if (selected_mood == 'random') {
        window.location.replace("/playlist?playlists=" + randomProperty(playlists).join(","));
    } else {
        window.location.replace("/playlist?playlists=" + playlists[selected_mood].join(","));
    }
}

var randomProperty = function (obj) {
    var keys = Object.keys(obj);
    return obj[keys[keys.length * Math.random() << 0]];
};