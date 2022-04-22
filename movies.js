function fetchMovie(apiKey = '3f951fde1f94ff23e3aebbd24b292474') {
   
    let resultSearch = document.getElementById('resultSearch');

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&langua
    ge=fr-FR&page=1`)
        .then(response => response.json())
        .then(movies => {
            console.log(movies);
            movies.results.forEach(movie => {
                
                console.log(movie)
                const div = document.createElement('div')
                resultSearch.appendChild(div)

                const image = document.createElement('img');
                image.src = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2"+movie.poster_path;
                div.appendChild(image);

                const titre = document.createElement('h2')
                titre.innerText = movie.title
                div.appendChild(titre)
            });
        })
        .catch(err => console.log(err));
}
