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
    } else {
        genre = 10749
    }
 console.log(genre)

    getTitle(service, genre)
    

}       
var convertTitleToNumber
function getTitle(service, genre) {
    convertTitleToNumber = [];
    var randPage = Math.floor(Math.random() *14)
    var usePage = (randPage + 1);
    console.log(randPage);

        fetch(`https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=${service}&type=movie&genre=${genre}&page=${usePage}&output_language=en&language=en`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "streaming-availability.p.rapidapi.com",
		"x-rapidapi-key": "5905109ec5msh57a2f97f237f422p10f34bjsn176a53ffa732"
	}
})
.then(function(response) {
        return response.json();
})
.then(function(data, imdbNumber){
	console.log(data);
    var imdbNumber = ''
    useAll = "";

for (let i = 0; i < 6; i++) {
       useAll += `<button class="launchModal is-child is-centered custom-launch"  id = "${i}">
       
          <p class="title has-text-centered">${data.results[i].title}</p>
          <figure>
          <img src=${data.results[i].posterURLs[185]}>
          </figure>
          </button>`

     imdbNumber = `${data.results[i].imdbID}`
     convertTitleToNumber.push(imdbNumber)
     console.log(imdbNumber);
     document.getElementById('boxes').innerHTML = useAll;

    $(".launchModal").click(function() {
        $("#modal").addClass("is-active");
        var moiveIndex = $(this).attr("id");
        var movieMeta = convertTitleToNumber[moiveIndex];
        console.log(movieMeta);
        getInfo(movieMeta);
    });
     $(".modal-close").click(function() {
       $("#modal").removeClass("is-active");
    })
     
}

});
}

function getInfo(imdbNumber) { ///// 2nd IMDB API CALL //////
     
        
        
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
          var releaseDate = $("<p>").text(data.releaseDate);
           $(".movie-info").append(releaseDate);
          var runTime = $("<p>").text(data.runtimeStr);
          $(".movie-info").append(runTime);
          var imdbRating = $("<p>").text(data.imDbRating);
          var imdbText = "IMDB Rating: "
          $(".movie-info").append(imdbText, imdbRating);
          var tagline = $("<p>").text(data.plot);
          $(".movie-info").append(tagline);

          $(document).ready(function() {
              var url = data.image
            $('#image').html(`<img src='${url}'>`);
        });

          console.log(data.title);
          console.log(data.runtimeStr);
          console.log(data.releaseDate);
          console.log(data.imDbRating);
          console.log(data.tagline);

        })
    } 