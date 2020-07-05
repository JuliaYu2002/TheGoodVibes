window.onload = async () => {
    // use this link as a test for now: http://localhost:3000/playlist/?playlists=1kzqdyFOm4PSBheh6Br3Nz,6U86PcQkkVFpjiElUVoz0c,2QwcMBmizP3fHUuEao1W07
    let playlists;
    try {
        playlists = new URLSearchParams(window.location.search).get('playlists').split(",");
    } catch (error) {
        console.log(error);
    }
    // Iterate through each array
    //     get the playlist data using await fetch("/get-playlist/ playlist_id ")
    //     Display the playlist information
    if (playlists != null) {
        for (let i = 0; i < playlists.length; i++) {
            let playlist_id = playlists[i];
            fetch("/get-playlist/" + playlist_id).then(data => data.json()).then(playlist_data => {
                console.log(playlist_data);
                console.log(playlist_data.tracks.items[0].track.name)

                let card = document.createElement("DIV");
                card.classList.add("card", "bg-light", "justify-content-center", "mx-auto");

                let card_body = document.createElement("DIV");
                card_body.classList.add("card-body");

                let img = document.createElement("IMG");
                img.classList.add("card-img-top", "playlistImage");
                img.src = playlist_data.images[0].url;
                img.alt = "card image cap";

                let p = document.createElement("P");
                p.classList.add("card-text", "playlistName", "text-center");
                p.innerText = playlist_data.name;


                card_body.appendChild(img);
                card_body.appendChild(p);

                let p2 = document.createElement("P");
                p2.classList.add("card-text", "playlistName", "listFormat", "listTitle");
                p2.innerText = "Top songs:";
                card_body.appendChild(p2);


                let ol = document.createElement("OL");
                ol.classList.add("listFormat");
                card_body.appendChild(ol);

                for (let j = 0; j < 3; j++) {

                  let li = document.createElement("LI");
                  li.innerText = playlist_data.tracks.items[j].track.name;
                  ol.appendChild(li);

                }

                if ("spotify" in playlist_data.external_urls) {

                  let a = document.createElement("A");
                  a.classList.add("spotifyLinks", "text-center");
                  a.href = playlist_data.external_urls['spotify'];
                  a.innerText = "Click here to listen to the playlist!";

                  card_body.appendChild(a);

                }

                card.appendChild(card_body);
                document.getElementById("suggested-playlists").appendChild(card);
            });

        }
    }

}
