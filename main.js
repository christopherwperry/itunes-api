//Establish variables to pull key elements from HTML to add function to.
let search = document.querySelector('.input');
let button = document.querySelector('.button');
let results = document.querySelector('.results');
let audio = document.querySelector('.music-player');
let playing = document.querySelector('.now-playing');

//Event listener responds to click on submit button and performs fetch of search term that is entered into input.
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
            console.log(data);
            results.innerHTML = "";
            for(let i = 0; i < data.results.length; i++){
              let artwork = data.results[i].artworkUrl100;
              let track = data.results[i].trackName;
              let artist = data.results[i].artistName;
              let sample = data.results[i].previewUrl;
              let page = data.results[i].artistViewUrl;
              let new_box = document.createElement("div");
              new_box.setAttribute("class", "result");
              new_box.addEventListener("click", function(){
                audio.src = sample;
                let template = `
                <p class="now-playing">Now Playing: ${artist} - ${track}</p>
                <a class="band-page" href="${page}">Artist Page</a>
                `
                playing.innerHTML = template;
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
