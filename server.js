const express = require('express');
const app = express();
const Spotify = require('node-spotify-api');
require('dotenv').config();
const port = process.env.PORT || 3000;

const spotify = new Spotify({
    id: process.env.CLIENT_ID,
    secret: process.env.CLIENT_SECRET
});

const playlists = {
    moodbooster: "37i9dQZF1DX3rxVfibe1L0"
}

app.use(express.static("public/"));

app.listen(port, async () => {
    console.log("Server is up and running");

    // Simple demo that gets the 'mood booster' playlist from spotify

    let playlist = await getPlaylist(playlists['moodbooster']);
    for (let song of playlist) {
        console.log(song);
    }
});


const getPlaylist = async (id) => {
    return new Promise((resolve, reject) => {
        spotify
            .request(`https://api.spotify.com/v1/playlists/${id}/tracks`)
            .then(function (playlist) {
                resolve(playlist.items);
            })
            .catch(function (err) {
                console.error('Error occurred: ' + err);
                reject(err);
            });
    });

}