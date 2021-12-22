var imdbApiKey = 'k_flc35q5h'

function getParams(){
    var searchPar = document.location.search.split('=')
    console.log(searchPar)
    var query = searchPar[1]
    console.log(query)

    getTitle(query)
}


function getTitle(query) {
    var queryUrl = 'https://imdb-api.com/en/API/SearchTitle/' + imdbApiKey + '/' +query;
    console.log(queryUrl)


   fetch(queryUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            var mID = data.results[0].id;
            var mTitle = data.results[0].title;
            console.log(mTitle);
            console.log(mID);
            var movieInfo = `
            <div class="movieTitle">Title ${data.results[0].title}</div>
            <div><img src=${data.results[0].image}></div>`
            document.getElementById('movieInfo').innerHTML = movieInfo;
        })
            // for (var i = 0; i < data.results.length; i++) {
            //     var movieSearch = data.results[i]
            //     console.log(movieSearch);
            //     //  console.log(data.results)
            // }
        }

getParams()
