var imdbApiKey = 'k_flc35q5h'
var watchModeApiKey = 'Ec21JVame9BKXdK9NqLodse4afGCe0nl4nOejc7w'
var launchButton = document.querySelector('.launchModal')



// var launch = document.querySelector("#launchModal")
// launch.addEventListener("click", function(){
//     var modal = document.querySelector(".modal")
//     modal.addClass = 'is-active'
// });
// var closeModal = document.querySelector('.modal-close')
// closeModal.addEventListener('click', function(){
// modal.removeClass = 'is-active'
// });




var sButton = document.getElementById('sButton');
sButton.addEventListener('click', function (event) {
    event.preventDefault();
    console.log('hello')
    userInput();
})


function userInput() {

    var service = $('#service').val();
    console.log(service)
    var genre;
    var genreChoice = $('#genre').val();

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



function getTitle(service, genre) {
fetch(`https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=${service}&type=movie&genre=${genre}7&page=1&output_language=en&language=en`, {
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
    
                for (let i = 0; i < 6; i++) {
                    var modalButton = document.createElement('button')
                    modalButton.addClass = 'launchModal'
                    boxes.appendChild(modalButton)


                    var div = document.createElement('div')
                    div.classList = "column notification is-info"
                    modalButton.appendChild(div)

                    var title = data.results[i].title
                    var titleEl = document.createElement('p')
                    titleEl.textContent = title
                    div.appendChild(titleEl)


                    var img = data.results[i].posterURLs[185]
                    console.log(img)
                    var imgEl = document.createElement('img')
                    imgEl.setAttribute('src', img)
                    div.appendChild(imgEl)

                }
launchModal(modalButton)
                
});

}

function launchModal(modalButton) {
// var launch = document.querySelector(".launchModal")
modalButton.addEventListener("click", function(){
    var modal = document.querySelector(".modal")
    modal.addClass = 'is-active'
});
var closeModal = document.querySelector('.modal-close')
closeModal.addEventListener('click', function(){
modal.removeClass = 'is-active'
});
}


// $(".launchModal").click(function() {
//     $(".modal").addClass("is-active");
// });  
//  $(".modal-close").click(function() {
//    $(".modal").removeClass("is-active");
// });




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
