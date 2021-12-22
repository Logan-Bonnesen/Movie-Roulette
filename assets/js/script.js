var imdbApiKey = 'k_flc35q5h'
var watchModeApiKey = 'Ec21JVame9BKXdK9NqLodse4afGCe0nl4nOejc7w'



var sButton = document.getElementById('sButton');
sButton.addEventListener('click', function (event) {
    event.preventDefault();
    var movieTitle = document.getElementById('inlineFormInputName').value;
    console.log(movieTitle);
    getTitle(movieTitle);
})

function getTitle(movieTitle) { ///// IMDB API CALL //////
    var queryUrl = 'https://imdb-api.com/en/API/SearchTitle/' + imdbApiKey + '/' + movieTitle + '/';
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
            useTitle(mID);
        })
        //     for (var i = 0; i < data.results.length; i++) {
        //         var movieSearch = data.results[i]
        //         console.log(movieSearch);
        //         //  console.log(data.results)
        //     }
        // })
};

function useTitle(mID){
    var queryUrlTwo = 'https://api.watchmode.com/v1/search/?apiKey=' + watchModeApiKey +'&search_field=imdb_id' +'&search_value='+ mID;
    fetch(queryUrlTwo)
    .then (function (response) {
        return response.json();
    })
    .then (function (data) {
        console.log(data);
        var watchID = data.title_results[0].id;
        console.log(watchID);
        showSources(watchID);
    //  for (var i=0; i < data.results.length; i++) {
    //      var movieID = data.results[i]
    //      console.log(movieID)
    //      console.log(data.results)
     })
};

function showSources(watchID) 
{
    var queryUrlTwo = 'https://api.watchmode.com/v1/title/' + watchID + '/sources/?apiKey=' + watchModeApiKey;
    fetch(queryUrlTwo)
    .then (function (response) {
        return response.json();
    })
    .then (function (data) {
        console.log(data);
        
    
    //  for (var i=0; i < data.results.length; i++) {
    //      var movieID = data.results[i]
    //      console.log(movieID)
    //      console.log(data.results)
     })
};


///////////////////watchmode api////////////////////

function testSearch(turnSplitArrayToString){
    var testArray = ["the", "great", "escape"];
    console.log(testArray.join("%20"));
    var inputValue = document.querySelector("#searchInput")
    
    var queryUrlTwo = 'https://api.watchmode.com/v1/networks/?apiKey=Ec21JVame9BKXdK9NqLodse4afGCe0nl4nOejc7w&search_field=name&search_value=' + turnSplitArrayToString;
    fetch(queryUrlTwo)
    .then (function (response) {
        return response.json();
    })
    .then (function (data) {
        console.log(data);
    
     for (var i=0; i < data.results.length; i++) {
         var movieID = data.results[i]
         console.log(movieID)
         console.log(data.results)
     }
    });
    }

inlineFormInputName.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("sButton").click();
    }




})



   ///////////////////////////////////////////////// 