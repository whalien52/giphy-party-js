console.log("Let's get this party started!");

const search = document.querySelector("#search-btn");
search.addEventListener("click", function(e) {
    e.preventDefault();
    console.log('searching for...');
    let giphy = getGiphySearch();
});

const clear = document.querySelector("#clear-btn");
clear.addEventListener("click", function(e) {
    e.preventDefault();
    console.log('bai!');
    document.querySelector('#giphys').innerText = '';
});

async function getGiphySearch() {
    const api_key = "oc5EvJl5aYnwTLFKTLp7haWVfHMSqU6W";
    let search = document.querySelector('input').value;
    console.log(search);
    let response = await axios.get("https://api.giphy.com/v1/gifs/search?", {params: {api_key: api_key, q: search}});
    addImage(response);  
}

function addImage(response) {
    let len = response.data.pagination.count;
    let rand = Math.floor((Math.random() * len));
    let giphyContainer = document.querySelector('#giphys');
    let newGiphy = document.createElement('div');
    newGiphy.classList.add('giphy');
    newGiphy.innerHTML = "<img src='"+response.data.data[rand].images.fixed_height.url+"'>"
    giphyContainer.append(newGiphy);
}