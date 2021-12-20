var imdbApiKey = 'k_flc35q5h'




var queryUrl = 'https://imdb-api.com/en/API/SearchTitle/' + imdbApiKey +'/friday night lights/';
fetch(queryUrl)
.then (function (response) {
    return response.json();
})
.then (function (data) {
    console.log(data);


 for (var i=0; i < data.results.length; i++) {
     var movieID = data.results[i]
     console.log(movieID)
    //  console.log(data.results)
 }
});
 

//sdfsdfslk

