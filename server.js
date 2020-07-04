const express = require('express');
const app = express();
const Spotify = require('node-spotify-api');
require('dotenv').config();
const port = process.env.PORT || 3000;

const spotify = new Spotify({
    id: process.env.CLIENT_ID,
    secret: process.env.CLIENT_SECRET
});

app.use(express.static("public/"));

app.listen(port, async () => {
    console.log("Server is up and running");
});

app.get("/playlist/:id", async (req, res) => {
    let playlist = await getPlaylist(req.params.id);
    res.status(200).json(playlist);
});


app.get("/about", (req, res) => {
    res.status(200).send("/about")
});

app.get("/resources", (req, res) => {
    res.status(200).send("/resources");
});

app.get("*", (req, res) => {
    res.status(404).json({
        message: "This is not the page you were looking for"
    });
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