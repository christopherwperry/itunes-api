/*
  Here is a rough idea for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
// 2. Create your `submit` event for getting the user's search term
// 3. Create your `fetch` request that is called after a submission
// 4. Create a way to append the fetch results to your page
// 5. Create a way to listen for a click that will play the song in the audio play

let search = document.querySelector('.input');
let button = document.querySelector('.button');
let results = document.querySelector('.results');
let audio = document.querySelector('.music-player');
let playing = document.querySelector('.now-playing');

button.addEventListener("click", function(){
  let search_item = search.value;
  let url = 'https://itunes.apple.com/search?term=';
  let limit = '&limit=15'
  let fullurl = url + search_item + limit;
  fetch(fullurl)
      .then(function(response) {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }
          response.json().then(function(data) {
            results.innerHTML = "";
            for(let i = 0; i < data.results.length; i++){
              let artwork = data.results[i].artworkUrl100;
              let track = data.results[i].trackName;
              let artist = data.results[i].artistName;
              let sample = data.results[i].previewUrl;
              let new_box = document.createElement("div");
              new_box.setAttribute("class", "result");
              new_box.addEventListener("click", function(){
                audio.src = sample;
                playing.innerHTML = "Now Playing: " + artist + " - " + track;
              });
              let result = `
              <img src="${artwork}">
              <p class="song-title">${track}</p>
              <p class="band-name">${artist}</p>
              `;
              new_box.innerHTML = result;
              results.appendChild(new_box);
            };
          })
        })
      });


function formSubmit() {
  let search_item = search.value;
  let url = 'https://itunes.apple.com/search?term=';
  let limit = '&limit=15'
  let fullurl = url + search_item + limit;
  console.log(fullurl);
  fetch(fullurl)
      .then(function(response) {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }
          response.json().then(function(data) {
            console.log(data);
            results.innerHTML = "";
            for(let i = 0; i < data.results.length; i++){
              let artwork = data.results[i].artworkUrl100;
              let track = data.results[i].trackName;
              let artist = data.results[i].artistName;
              let sample = data.results[i].previewUrl;
              let new_box = document.createElement("div");
              new_box.setAttribute("class", "result");
              new_box.addEventListener("click", function(){
                audio.src = sample;
                playing.innerHTML = "Now Playing: " + artist + " - " + track;
              });
              let result = `
              <img class="album-cover" src="${artwork}">
              <p class="song-title">${track}</p>
              <p class="band-name">${artist}</p>
              `;
              new_box.innerHTML = result;
              results.appendChild(new_box);
            };
          })
        })
}
