var imdbApiKey = 'k_flc35q5h'
var imdbApiKey2 = 'k_5yosmfb0'
var useAll = '';
var userServiceChoice = "";
var userGenreChoice = "";
let genreHistory = [];
let serviceHistory = [];





    //capture user selction on the service
userServiceChoice = $('#service1').change(function() {
    console.log($(this).val());
    userServiceChoice = $(this).val();
    serviceHistory.push(userServiceChoice);
    localStorage.setItem('Service', JSON.stringify(serviceHistory))
    return userServiceChoice;
});

userGenreChoice = $('#genre1').change(function(){
    userGenreChoice = $(this).val();
    genreHistory.push(userGenreChoice);
    localStorage.setItem('Genre', JSON.stringify(genreHistory))


    return userGenreChoice
})


$('#sButton').click(function(){
    $(".launchModal").remove()
  
    console.log(userGenreChoice)
    userInput(userServiceChoice, userGenreChoice)
})





///////// Opening Modal /////////////////
$(document).ready(function(){
    $("#modalMain").addClass("is-active");
});
$(".modal-close").click(function() {
    $("#modalMain").removeClass("is-active");
 });
 $("#closebtn").click(function() {
    $("#modalMain").removeClass("is-active");
    var serv = $('#service').val();
    var service =serv.toLowerCase()
    console.log(service)
    
    
    var genreChoice = $('#genre').val();
    userInput(service, genreChoice)
 });
///////////////////////////////////////////

function userInput(service, genreChoice) {
var genre;



    if (genreChoice === 'Adventure'){
        genre = 12
    } else if(genreChoice === 'Biography') {
        genre = 1
    } else if(genreChoice === 'Drama'){
        genre = 18
    } else if(genreChoice === 'Horror'){
        genre = 27
    } else if(genreChoice === 'Action'){
        genre = 28
    } else if(genreChoice === 'Comedy'){
        genre = 35
    } else if(genreChoice === 'Thriller'){
        genre = 53
    }  else if(genreChoice === 'Crime'){
        genre = 80
    } else if(genreChoice === 'Mystery'){
        genre = 9648
    } else if(genreChoice === 'Romance'){
        genre = 10749
    } else {
        alert("You did not select a genre!");
        window.location.reload(true)
        console.log("User did not select a genre.")
    }
 console.log(genre)

    getTitle(service, genre)
    

}       
var convertTitleToNumber
var videoArray
function getTitle(service, genre) {
    convertTitleToNumber = [];
    videoArray = []
    var randPage = Math.floor(Math.random() *14)
    var usePage = (randPage + 1);
    console.log(randPage);

        fetch(`https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=${service}&type=movie&genre=${genre}&page=${usePage}&output_language=en&language=en`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "streaming-availability.p.rapidapi.com",
		"x-rapidapi-key": "370a1fc206msh9eb5024f3dbeaedp169a7djsna86f9b9fc615"
	}
})
.then(function(response) {
        return response.json();
})
.then(function(data, imdbNumber, videoNumber){
	console.log(data);
    var imdbNumber = ''
    var videoNumber = ''
    useAll = "";

for (let i = 0; i < 6; i++) {
       useAll += `<button class="launchModal is-child is-centered custom-launch"  id = "${i}">
       
          <p class="title has-text-centered">${data.results[i].title}</p>
          <figure class='figure'>
          <img src=${data.results[i].posterURLs[185]}>
          </figure>
          </button>`

     imdbNumber = `${data.results[i].imdbID}`
     videoNumber = `${data.results[i].video}`
     convertTitleToNumber.push(imdbNumber)
     videoArray.push(videoNumber)
     console.log(imdbNumber);
     document.getElementById('boxes').innerHTML = useAll;

    $(".launchModal").click(function() {
        $("#modal").addClass("is-active");
        var moiveIndex = $(this).attr("id");
        var movieMeta = convertTitleToNumber[moiveIndex];
        var videoIndex = $(this).attr('id')
        var videoMeta = videoArray[videoIndex]
        console.log(movieMeta);
        getInfo(movieMeta, videoMeta);
    });
     $(".modal-close").click(function() {
       $("#modal").removeClass("is-active");
    })
     
}

});
}

function getInfo(imdbNumber, videoNumber) { ///// 2nd IMDB API CALL //////
     
        
        
    var queryUrl = 'https://imdb-api.com/en/API/Title/' + imdbApiKey + '/' + imdbNumber;
    fetch(queryUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            $(".movie-info").empty();
          var movieTitle = $("<h5>)").text(data.title);
          $(".movie-info").append(movieTitle);
          var releaseDate = $("<p>").text('Release Date: ' +data.releaseDate)
           $(".movie-info").append(releaseDate);
          var runTime = $("<p>").text('Run Time: ' +data.runtimeStr);
          $(".movie-info").append(runTime);
          var imdbRating = $("<p>").text(data.imDbRating);
          var imdbText = "IMDB Rating: "
          $(".movie-info").append(imdbText, imdbRating);
          var tagline = $("<p>").text(data.plot);
          $(".movie-info").append(tagline);
          var movieLink = $('<a>').attr('href', 'https://www.youtube.com/watch?v=' +videoNumber).text('Click here for the movie trailer!')


          $(".movie-info").append(movieLink);
          $(document).ready(function() {
              var url = data.image
            $('#image').html(`<img src='${url}'>`);
        });
        $(document).ready(function(){
            movieLink.click(function(){
              window.open(this.href);
              return false;
            });
          });

          console.log(data.title);
          console.log(data.runtimeStr);
          console.log(data.releaseDate);
          console.log(data.imDbRating);
          console.log(data.tagline);

        })
    } 