DROP DATABASE IF EXISTS peliculas_bd;
CREATE DATABASE peliculas_bd;
USE peliculas_bd;

CREATE TABLE peliculas (
    id_pelicula INT AUTO_INCREMENT PRIMARY KEY,
    url_portada VARCHAR(255) NOT NULL,
    titulo VARCHAR(255) NOT NULL,
    duracion INT NOT NULL,
    elenco TEXT NOT NULL,
    url_trailer VARCHAR(255) NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    descripcion TEXT NOT NULL
);

CREATE TABLE usuario{
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    user_password VARCHAR(255) NOT NULL
}


CREATE TABLE lista (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pelicula_id INT NOT NULL,
    FOREIGN KEY(pelicula_id) REFERENCES peliculas (id_pelicula)
);

INSERT INTO peliculas (url_portada, titulo, duracion, elenco,url_trailer, categoria, descripcion)
VALUES ('https://resizing.flixster.com/RxGReKiNeLRDhz_1DDe-JiurSSY=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p7825626_p_v8_ae.jpg', 
    'Inception', 
    148, 
    'Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page',
    'https://www.youtube.com/watch?v=YoHD9XEInc0',
    'Sci-Fi', 
    'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.');

INSERT INTO peliculas (url_portada, titulo, duracion, elenco, url_trailer, categoria, descripcion)
VALUES 
('https://resizing.flixster.com/hgcQ8juhhUYQofbQ6wsXfhicb3Y=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15987_p_v13_ap.jpg', 
    'The Shawshank Redemption', 
    142, 
    'Tim Robbins, Morgan Freeman, Bob Gunton',
    'https://www.youtube.com/watch?v=PLl99DlL6b4', 
    'Drama', 
    'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.');

INSERT INTO peliculas (url_portada, titulo, duracion, elenco, url_trailer, categoria, descripcion)
VALUES 
('https://resizing.flixster.com/aLKvx7GjWgFMOfboq5KNOX1kCCg=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p6326_p_v13_be.jpg', 
    'The Godfather', 
    175, 
    'Marlon Brando, Al Pacino, James Caan',
    'https://www.youtube.com/watch?v=UaVTIH8mujA', 
    'Crime', 
    'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.');

INSERT INTO peliculas (url_portada, titulo, duracion, elenco, url_trailer, categoria, descripcion)
VALUES 
('https://resizing.flixster.com/dJM7TJzf7qEp9NA2Kni0Cug9myc=/206x305/v2/https://resizing.flixster.com/Wg25mLoPWxjcxXzNyaSF4VGgGE4=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2ZiNjZiNWFkLWVhNzEtNDRhMC1iNGIwLTFmY2FkNzllNTJlMi5qcGc=', 
    'The Dark Knight', 
    152, 
    'Christian Bale, Heath Ledger, Aaron Eckhart',
    'https://www.youtube.com/watch?v=_PZpmTj1Q8Q',
    'Action', 
    'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.');

INSERT INTO peliculas (url_portada, titulo, duracion, elenco, url_trailer, categoria, descripcion)
VALUES 
('https://resizing.flixster.com/bwK3C8Xd98Mfs6Z7gYfH-wp6QHI=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15684_p_v12_ak.jpg', 
    'Pulp Fiction', 
    154, 
    'John Travolta, Uma Thurman, Samuel L. Jackson', 
    'https://www.youtube.com/watch?v=tGpTpVyI_OQ',
    'Crime', 
    'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.');

INSERT INTO peliculas (url_portada, titulo, duracion, elenco, url_trailer, categoria, descripcion)
VALUES 
('https://resizing.flixster.com/zZCVxTj9dWokzMMyqzV63YcNDHk=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/NowShowing/3509/3509_aa.jpg', 
    'Forrest Gump', 
    142, 
    'Tom Hanks, Robin Wright, Gary Sinise',
    'https://www.youtube.com/watch?v=bLvqoHBptjg', 
    'Drama', 
    'The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold from the perspective of an Alabama man with an IQ of 75.');

INSERT INTO peliculas (url_portada, titulo, duracion, elenco, url_trailer, categoria, descripcion)
VALUES 
('https://resizing.flixster.com/C9FzmCCRIYz2I-F3T2wZgJqDDzc=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p23069_p_v13_au.jpg', 
    'Fight Club', 
    139, 
    'Brad Pitt, Edward Norton, Meat Loaf', 
    'https://www.youtube.com/watch?v=BdJKm16Co6M',
    'Drama', 
    'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.');

INSERT INTO peliculas (url_portada, titulo, duracion, elenco, url_trailer, categoria, descripcion)
VALUES 
('https://resizing.flixster.com/kO9s-jGsOi3YXyHkzVlmO9Z5lzI=/206x305/v2/https://resizing.flixster.com/hTz9Ap43sCkvDiFvCkjmb1IWkUg=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2EwMGEwNmQxLTE1MGYtNGQwYS04ZDhlLWQ0MzYwOTQ5M2JlMC5qcGc=', 
    'The Matrix', 
    136, 
    'Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss',
    'https://www.youtube.com/watch?v=vKQi3bBA1y8', 
    'Sci-Fi', 
    'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.');

INSERT INTO peliculas (url_portada, titulo, duracion, elenco, url_trailer, categoria, descripcion)
VALUES 
('https://resizing.flixster.com/7c3qnZfPzZgID7Ft97PccFwEf9U=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10543523_p_v8_as.jpg', 
    'Interstellar', 
    169, 
    'Matthew McConaughey, Anne Hathaway, Jessica Chastain',
    'https://www.youtube.com/watch?v=zSWdZVtXT7E', 
    'Sci-Fi', 
    'A team of explorers travel through a wormhole in space in an attempt to ensure humanity survival.');

INSERT INTO peliculas (url_portada, titulo, duracion, elenco, url_trailer, categoria, descripcion)
VALUES 
('https://resizing.flixster.com/NOThcrrGmuUx6I5WNDq3oGqXbjc=/206x305/v2/https://resizing.flixster.com/u_a3AuTtJEV_zBm9hwr9kbU19F8=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2Y4ODg4N2FiLTAwYmYtNDMyMS05NWQ2LTIwMTA4ZmMyOTgzMy5qcGc=', 
    'The Lion King', 
    88, 
    'Matthew Broderick, Jeremy Irons, James Earl Jones', 
    'https://www.youtube.com/watch?v=lFzVJEksoDY',
    'Animation', 
    'Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.');
