// Our variables
const key = "3fea470774c8427b9943de6947c09392"
const url = `https://newsapi.org/v2/everything?q="Janis Joplin"OR"Bianca Jagger" &pageSize=100=${key}`


// Our main function
const recievedNews = (newsdata) => {

	// For each article object from the API, we create a new div in HTML.
    newsdata.articles.forEach((article) => {

					//Here we create and add html elements to our html file
					document.querySelector(".allNews").innerHTML +=
            `<div class="news">
            <h2>${article.title}</h2>
            <img src="${article.urlToImage}"/>
            </div>`
    })
}

//Fetch is a built in function in Javascript, it gets the data from the API and tranforms it into Javascript objects – JSON data.
fetch(url)
  .then(response => response.json())
  .then(recievedNews)
