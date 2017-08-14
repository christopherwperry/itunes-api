/*
  Here is a rough idea for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
// 2. Create your `submit` event for getting the user's search term
// 3. Create your `fetch` request that is called after a submission
// 4. Create a way to append the fetch results to your page
// 5. Create a way to listen for a click that will play the song in the audio play



  /*

  let url = 'https://itunes.apple.com/search?term=';
  let fullurl = url + search;
  console.log(fullurl);
fetch(fullurl)
    .then(function(response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        } else {
          console.log("everything is fine");
        }
        response.json().then(function(data) {
          console.log(data);
          document.querySelector(".results").innerHTML = "";
          for(let i = 0; i < data.results.length; i++){
            let artwork = data.results[i].artworkUrl100;
            let track = data.results[i].trackName;
            let artist = data.results[i].artistName;
            let new_box = document.createElement("div");
            new_box.setAttribute("class", "result");
            let result = `
            <img src="${artwork}">
            <p class="song-title">${track}</p>
            <p class="band-name">${artist}</p>
            `;
            new_box.innerHTML = result;
            results.appendChild(new_box);
          }
        });
      });


    }, true);

  */
