let moviesContainer = document.getElementById('filmsContainer');
let modal_name_movie = document.getElementById('modal_name_movie');
let modal_trailer_movie = document.getElementById('modal_trailer_movie');
let modal_title_movie = document.getElementById('modal_title_movie');
let modal_duration_movie = document.getElementById('modal_duration_movie');
let modal_description_movie = document.getElementById('modal_description_movie');
let modal_img_movie = document.getElementById('modal_img_movie');
let modal_cast_movie = document.getElementById('modal_cast_movie');



function getMovies(){
    fetch("http://localhost/proyectos/api_peliculas/API/ObtenerPeliculas.php")
    .then(dataMovie => dataMovie.json())
    .then(movies=> {
        console.log(movies);
        movies.forEach(movie => {
            const container_movie = document.createElement("div");
            container_movie.setAttribute("class","container_movie col-10 col-sm-5 col-lg-3 mb-3 position-relative");;

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
            
            container_movie.setAttribute("data-bs-toggle","modal");
            container_movie.setAttribute("data-bs-target","#exampleModal");
            
            moviesContainer.appendChild(container_movie);
            container_movie.addEventListener("click",()=>{
                fill_modal(movie)
            });

        });
    })
}
getMovies();

function fill_modal(movie){
    cast_array = movie.elenco.split(", ");
    console.log(cast_array)
    modal_name_movie.innerText = movie.titulo;
    modal_img_movie.src = movie.url_portada;
    modal_title_movie.innerText = movie.titulo;
    modal_duration_movie.innerText = `${movie.duracion} min`;
    modal_description_movie.innerText = movie.descripcion;
    modal_cast_movie.innerText = `${cast_array[0]}, ${cast_array[1]}, ${cast_array[2]}`;
}

