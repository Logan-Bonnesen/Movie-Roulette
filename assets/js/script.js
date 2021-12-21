var imdbApiKey = 'k_flc35q5h'
var watchModeApiKey = 'Ec21JVame9BKXdK9NqLodse4afGCe0nl4nOejc7w'

$("#search-city").on("click", function() {
    var searchValue = $("#city-input").val()
    var arrayToJoin = searchValue.split(" ")
    var turnSplitArrayToString = arrayToJoin.join("%20")

    testSearch(turnSplitArrayToString)


})

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




function testSearch(turnSplitArrayToString){
// var testArray = ["the", "great", "escape"];
// console.log(testArray.join("%20"));
// var inputValue = document.querySelector("#searchInput")

var queryUrlTwo = 'https://api.watchmode.com/v1/search/?apiKey=Ec21JVame9BKXdK9NqLodse4afGCe0nl4nOejc7w&search_field=name&search_value=' + turnSplitArrayToString;
fetch(queryUrlTwo)
.then (function (response) {
    return response.json();
})
.then (function (data) {
    console.log(data);


//  for (var i=0; i < data.results.length; i++) {
//      var movieID = data.results[i]
//      console.log(movieID)
    //  console.log(data.results)
//  }
});
}


var testArray = ["the", "great", "escape"];
console.log(testArray.join("%20"));