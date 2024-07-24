let moviesContainer = document.getElementById('filmsContainer');

function getMovies(){
    fetch("http://localhost/proyectos/api_peliculas/API/ObtenerPeliculas.php")
    .then(dataMovie => dataMovie.json())
    .then(movies=> {
        console.log(movies);
        movies.forEach(movie => {
            const container_movie = document.createElement("div");
            container_movie.setAttribute("class","container_movie col-10 col-sm-3 mb-3 position-relative");;

            const image_movie = document.createElement("img");
            image_movie.src = movie.url_portada;
            container_movie.appendChild(image_movie);

            const name_movie = document.createElement("p");
            name_movie.setAttribute("class","name_movie");
            name_movie.textContent = movie.titulo;
            container_movie.appendChild(name_movie);

            const duration_movie = document.createElement("p");
            duration_movie.setAttribute("class","duration_movie");
            duration_movie.textContent = `${movie.duracion} min`;
            container_movie.appendChild(duration_movie);

            const category_movie = document.createElement("p");
            category_movie.setAttribute("class","category_movie");
            category_movie.textContent = movie.categoria;
            container_movie.appendChild(category_movie);

            moviesContainer.appendChild(container_movie);
        });
    })
}
getMovies()