var imdbApiKey = 'k_flc35q5h'
var watchModeApiKey = 'Ec21JVame9BKXdK9NqLodse4afGCe0nl4nOejc7w'



var sButton = document.getElementById('sButton');

function getTitle(event) {
    event.preventDefault();
    var movieTitle = document.getElementById('inlineFormInputName').value;

    if (!movieTitle) {
        console.error("You need to search for a movie or show");
        return;
    }
    var queryString = './search_results.html?q=' +movieTitle 
    location.assign(queryString);

}

sButton.addEventListener('click', getTitle);
   








/////////jquery button search////////////////////////////

// $("#search-city").on("click", function() {
//     var searchValue = $("#city-input").val()
//     var arrayToJoin = searchValue.split(" ")
//     var turnSplitArrayToString = arrayToJoin.join("%20")

//     testSearch(turnSplitArrayToString)


// })

///////////////////watchmode api////////////////////

// function testSearch(turnSplitArrayToString){
    // var testArray = ["the", "great", "escape"];
    // console.log(testArray.join("%20"));
    // var inputValue = document.querySelector("#searchInput")
    
    // var queryUrlTwo = 'https://api.watchmode.com/v1/networks/?apiKey=Ec21JVame9BKXdK9NqLodse4afGCe0nl4nOejc7w&search_field=name&search_value=' + turnSplitArrayToString;
    // fetch(queryUrlTwo)
    // .then (function (response) {
    //     return response.json();
    // })
    // .then (function (data) {
    //     console.log(data);
    
    //  for (var i=0; i < data.results.length; i++) {
    //      var movieID = data.results[i]
    //      console.log(movieID)
    //      console.log(data.results)
    //  }
    // });
    // }
   ///////////////////////////////////////////////// 