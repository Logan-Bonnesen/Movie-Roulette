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



// function getTitle() {
// fetch("https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=netflix&type=movie&genre=27&page=1&output_language=en&language=en", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "streaming-availability.p.rapidapi.com",
// 		"x-rapidapi-key": "5905109ec5msh57a2f97f237f422p10f34bjsn176a53ffa732"
// 	}
// })
// .then(function(response) {
//         return response.json();
// })
// .then(function(data){
// 	console.log(data);
//     var boxes1 = ''
//     var boxes2 = ''
//     var boxes3 = ''
//     var boxes4 = ''
//     var boxes5 = ''
//     var boxes6 = ''
                 
//                 for (let i = 0; i < 6; i++) {
//                     var div = document.createElement('div')
//                     div.classList = "column notification is-info"
//                     boxes.appendChild(div)

//                     var title = data.results[i].title
//                     var titleEl = document.createElement('p')
//                     titleEl.textContent = title
//                     div.appendChild(titleEl)


//                     var img = data.results[i].posterURLs[185]
//                     console.log(img)
//                     var imgEl = document.createElement('img')
//                     imgEl.setAttribute('src', img)
//                     div.appendChild(imgEl)





                    // boxes1 = `<div class="tile is-vertical is-parent has-text-centered is-3">
                    // <div class="tile is-child box"></div>
                    // <div class="title">${data.results[i].title}</div>
                    // <div><img src=${data.results[i].posterURLs[185]}></div>`
                    // boxes2 = `<div class="tile is-child box">
                    // <div class="title">${data.results[2].title}</div>
                    // <div><img src=${data.results[2].posterURLs[185]}></div>`
                    // boxes3 = `<div class="tile is-child box">
                    // <div class="title">${data.results[3].title}</div>
                    // <div><img src=${data.results[3].posterURLs[185]}></div>`
                    // boxes4 = `<div class="tile is-child box">
                    // <div class="title">${data.results[4].title}</div>
                    // <div><img src=${data.results[4].posterURLs[185]}></div>`
                    // boxes5 = `<div class="tile is-child box">
                    // <div class="title">${data.results[5].title}</div>
                    // <div><img src=${data.results[5].posterURLs[185]}></div>`
                    // boxes6 = `<div class="tile is-child box">
                    // <div class="title">${data.results[6].title}</div>
                    // <div><img src=${data.results[6].posterURLs[185]}></div>`

                // document.getElementById('boxes1').innerHTML = boxes1;
                // document.getElementById('smallBoxes2').innerHTML = boxes2;
                // document.getElementById('smallBoxes3').innerHTML = boxes3;
                // document.getElementById('smallBoxes4').innerHTML = boxes4;
                // document.getElementById('smallBoxes5').innerHTML = boxes5;
                // document.getElementById('smallBoxes6').innerHTML = boxes6;
//                 }
                
// });
// }


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


inlineFormInputName.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("sButton").click();
    }})
