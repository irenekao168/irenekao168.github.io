function toggleSongs(){
    elem = document.getElementById('songs-second-half')
    elem.classList.toggle('hidden')
}

document.getElementById("toggle-button").onclick = toggleSongs;
