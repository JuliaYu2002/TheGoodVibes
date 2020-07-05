window.onload = async () => {
    // use this link as a test for now: http://localhost:3000/playlist/?playlists=1kzqdyFOm4PSBheh6Br3Nz,6U86PcQkkVFpjiElUVoz0c,2QwcMBmizP3fHUuEao1W07
    const playlists = new URLSearchParams(window.location.search).get('playlists').split(",");
    // Iterate through each array
    //     get the playlist data using await fetch("/get-playlist/ playlist_id ")
    //     Display the playlist information
}