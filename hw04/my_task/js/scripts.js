const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

// Note: AudioPlayer is defined in audio-player.js
const audioFile = 'https://p.scdn.co/mp3-preview/bfead324ff26bdd67bb793114f7ad3a7b328a48e?cid=9697a3a271d24deea38f8b7fbfa0e13c';
const audioPlayer = AudioPlayer('.player', audioFile);

const search = (ev) => {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

const playTrack = (ev) => {
    const elem = ev.currentTarget;
    //preview URL has been stashed in the "data-preview-track attribute."
    const previewURL = elem.getAttribute('data-preview-track');
    console.log(previewURL);
    if (previewURL) {
        audioPlayer.setAudioFile(previewURL);
        audioPlayer.play();
        
    } else {
        console.log("there is no preview for this track")
    }
    document.querySelector('footer .track-item').innerHTML = elem.innerHTML;
};

const getTracks = (term) => {
    url = baseURL + "?type=track&q=" + term;
    fetch(url)
        .then (response => response.json())
        .then(data => displayTracks(data))
};

const getAlbums = (term) => {
    url = baseURL + "?type=album&q=" +term;
    fetch(url)
        .then (response => response.json())
        .then(data => displayAlbums(data))
};

const getArtist = (term) => {
    url = baseURL + "?type=artist&q=" + term;
    fetch(url)
        .then (response => response.json())
        .then(data => displayArtist(data[0]))
};


document.querySelector('#search').onkeyup = (ev) => {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
};

const displayArtist = (art) => {
    if(art == null){
        document.querySelector("#artist").innerHTML = "no artist found";
    } else {
    template = `<section class="artist-card" id="${art.id}">
                    <div>
                        <img src="${art.image_url}">
                        <h3>${art.name}</h3>
                        <div class="footer">
                            <a href="${art.spotify_url}" target="_blank">
                                View on spotify
                            </a>
                        </div>
                    </div>
                </section>`;
    document.querySelector('#artist').innerHTML = template;
    }
}

const displayTracks = (foundtracks) => {
    if(foundtracks[0] == null){
        document.querySelector("#tracks").innerHTML = "no tracks found:(";
    } else {
        document.querySelector("#tracks").innerHTML = "";
        const lentracks = foundtracks.length;
        for (t=0;t < Math.min(5, lentracks); t++){
            template = `<section class="track-item preview" data-preview-track="${foundtracks[t].preview_url}" onclick="playTrack(event)";>
                        <img src= "${foundtracks[t].album.image_url}">
                        <a href="${foundtracks[t].spotify_url}" target="_blank">
                            <i class="fas play-track fa-play" aria-hidden="true"> </i>
                            </a>
                        <div class="label">
                            <h3>${foundtracks[t].name}</h3>
                            <p>${foundtracks[t].artist.name}</p>
                        </div>
                    </section>`;
            document.querySelector("#tracks").innerHTML += template;

        }
    }
};


const displayAlbums = (foundalbums) => {
    if(foundalbums[0] == null){
        document.querySelector("#albums").innerHTML = "no albums found:(";
    } else {
        document.querySelector("#albums").innerHTML = "";
        const lenalbums = foundalbums.length;
        for (t=0;t < lenalbums; t++){
            template = `<section class="album-card" id="${foundalbums[t].id}" onclick="showAlbumTracks(event)">
                            <div>
                                <img src="${foundalbums[t].image_url}">
                                <h3>${foundalbums[t].name}</h3>
                            <div class="footer">
                            <a href="${foundalbums[t].spotify_url}" target="_blank">
                                View on spotify
                            </a>
                            </div>
                            </div>
                            </section>`;
            document.querySelector("#albums").innerHTML += template;

        }
    }
};

