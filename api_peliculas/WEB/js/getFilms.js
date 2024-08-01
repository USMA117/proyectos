let moviesContainer = document.getElementById('filmsContainer');
let modal_name_movie = document.getElementById('modal_name_movie');
let modal_trailer_movie = document.getElementById('modal_trailer_movie');
let modal_title_movie = document.getElementById('modal_title_movie');
let modal_duration_movie = document.getElementById('modal_duration_movie');
let modal_description_movie = document.getElementById('modal_description_movie');
let modal_img_movie = document.getElementById('modal_img_movie');
let modal_cast_movie = document.getElementById('modal_cast_movie');
let btn_close_modal = document.getElementById('btn_close_modal');

btn_close_modal.addEventListener('click', () =>{
    close_modal();
})


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
    modal_trailer_movie.src = "";
    cast_array = movie.elenco.split(", ");
    let url_trailer_embed = get_url_trailer_embed(movie.url_trailer);
    modal_name_movie.innerText = movie.titulo;
    modal_trailer_movie.src = url_trailer_embed;
    modal_img_movie.src = movie.url_portada;
    modal_title_movie.innerText = movie.titulo;
    modal_duration_movie.innerText = `${movie.duracion} min`;
    modal_description_movie.innerText = movie.descripcion;
    modal_cast_movie.innerText = `${cast_array[0]}, ${cast_array[1]}, ${cast_array[2]}`;
}

function get_url_trailer_embed(url_trailer){
    let id_video = url_trailer.split("?v=");
    let url_trailer_embed = `https://www.youtube.com/embed/${id_video[1]}`
    return url_trailer_embed;
}

function close_modal(){
    modal_trailer_movie.src = "";
    modal_name_movie.innerText = "";
    modal_img_movie.src = "";
    modal_title_movie.innerText = "";
    modal_duration_movie.innerText = "";
    modal_description_movie.innerText = "";
    modal_cast_movie.innerText = "";
}