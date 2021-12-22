var imdbApiKey = 'k_flc35q5h'
var watchModeApiKey = 'Ec21JVame9BKXdK9NqLodse4afGCe0nl4nOejc7w'



var sButton = document.getElementById('sButton');
sButton.addEventListener('click', function (event) {
    event.preventDefault();
    var movieTitle = document.getElementById('inlineFormInputName').value;
    console.log(movieTitle);
    // getTitle(movieTitle);
    getTitle();
})



function getTitle() {
fetch("https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=netflix&type=movie&genre=27&page=1&output_language=en&language=en", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "streaming-availability.p.rapidapi.com",
		"x-rapidapi-key": "5905109ec5msh57a2f97f237f422p10f34bjsn176a53ffa732"
	}
})
.then(function(response) {
        return response.json();
})
.then(function(data){
	console.log(data);
    var boxes1 = ''
    var boxes2 = ''
    var boxes3 = ''
    var boxes4 = ''
    var box1 = `<div class="movieTitle">${data.results[0].title}</div>
                 <div><img src=${data.results[0].posterURLs[342]}></div>`
                 document.getElementById('movieInfo').innerHTML = box1;
                 
                for (let i = 1; i < 5; i++) {
                    boxes1 = `<div class="tile is-child box">
                    <div class="title">${data.results[1].title}</div>
                    <div><img src=${data.results[1].posterURLs[185]}></div>`
                    boxes2 = `<div class="tile is-child box">
                    <div class="title">${data.results[2].title}</div>
                    <div><img src=${data.results[2].posterURLs[185]}></div>`
                    boxes3 = `<div class="tile is-child box">
                    <div class="title">${data.results[3].title}</div>
                    <div><img src=${data.results[3].posterURLs[185]}></div>`
                    boxes4 = `<div class="tile is-child box">
                    <div class="title">${data.results[4].title}</div>
                    <div><img src=${data.results[4].posterURLs[185]}></div>`
                document.getElementById('smallBoxes1').innerHTML = boxes1;
                document.getElementById('smallBoxes2').innerHTML = boxes2;
                document.getElementById('smallBoxes3').innerHTML = boxes3;
                document.getElementById('smallBoxes4').innerHTML = boxes4;
                }
                
});
}


// function getTitle(movieTitle) { ///// IMDB API CALL //////
//     var queryUrl = 'https://imdb-api.com/en/API/SearchTitle/' + imdbApiKey + '/' + movieTitle + '/';
//     fetch(queryUrl)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);
//             var mID = data.results[0].id;
//             var mTitle = data.results[0].title;
//             console.log(mTitle);
//             console.log(mID);
//             var movieInfo = `
//             <div class="movieTitle">Title ${data.results[0].title}</div>
//             <div><img src=${data.results[0].image}></div>`
//             document.getElementById('movieInfo').innerHTML = movieInfo;
//             useTitle(mID);
//         })
//             for (var i = 0; i < data.results.length; i++) {
//                 var movieSearch = data.results[i]
//                 console.log(movieSearch);
//                 //  console.log(data.results)
//             }
//         })
// };


























// function getTitle(movieTitle) { ///// IMDB API CALL //////
//     var queryUrl = 'https://imdb-api.com/en/API/SearchTitle/' + imdbApiKey + '/' + movieTitle + '/';
//     fetch(queryUrl)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);
//             var mID = data.results[0].id;
//             var mTitle = data.results[0].title;
//             console.log(mTitle);
//             console.log(mID);
//             var movieInfo = `
//             <div class="movieTitle">Title ${data.results[0].title}</div>
//             <div><img src=${data.results[0].image}></div>`
//             document.getElementById('movieInfo').innerHTML = movieInfo;
//             useTitle(mID);
//         })
//             for (var i = 0; i < data.results.length; i++) {
//                 var movieSearch = data.results[i]
//                 console.log(movieSearch);
//                 //  console.log(data.results)
//             }
//         })
// };

// function useTitle(mID){
//     var queryUrlTwo = 'https://api.watchmode.com/v1/search/?apiKey=' + watchModeApiKey +'&search_field=imdb_id' +'&search_value='+ mID;
//     fetch(queryUrlTwo)
//     .then (function (response) {
//         return response.json();
//     })
//     .then (function (data) {
//         console.log(data);
//         var watchID = data.title_results[0].id;
//         console.log(watchID);
//         showSources(watchID);

//            for (var i=0; i < data.results.length; i++) {
//          var movieID = data.results[i]
//          console.log(movieID)
//          console.log(data.results)
//      })
// };

// function showSources(watchID) 
// {
//     var queryUrlTwo = 'https://api.watchmode.com/v1/title/' + watchID + '/sources/?apiKey=' + watchModeApiKey;
//     fetch(queryUrlTwo)
//     .then (function (response) {
//         return response.json();
//     })
//     .then (function (data) {
//         console.log(data);
        
//      })
// };


//  for (var i=0; i < data.results.length; i++) {
    //      var movieID = data.results[i]
    //      console.log(movieID)
    //      console.log(data.results)

/////////jquery button search////////////////////////////

// $("#search-city").on("click", function() {
//     var searchValue = $("#city-input").val()
//     var arrayToJoin = searchValue.split(" ")
//     var turnSplitArrayToString = arrayToJoin.join("%20")

//     testSearch(turnSplitArrayToString)


// })

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
   ///////////////////////////////////////////////// 