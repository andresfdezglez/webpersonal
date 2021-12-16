var index = "Sobre mí Andrés Fernández González Información personal Graduado en Ingeniería Informática del Software Desarrollador en Capgemini Información de contacto Correo Electrónico UO264699 @uniovi.es Teléfono 727702571 Instagram @andres.pano";
var aficiones = "Aficiones Fútbol Karim Benzema Mi jugador favorito es el delantero Karim Benzema Real Madrid Mi equipo favorito es el Real Madrid Yo Actualmente juego en el equipo de la Universidad de Oviedo Naturaleza Animales Una de mis pasiones es avistar la fauna salvaje Rutas Me gusta hacer rutas, ya sea corriendo o andando Reserva Natural de Muniellos Suelo visitar la Reserva natural de Muniellos, ya que mi pueblo está en esa zona";
var musica = "Música Violadores del Verso Vivir para contarlo Mi disco favorito de Violadores del Verso es Vivir para contarlo Violadores del Verso Este grupo está formado por Kase O, Sho Hai, Lírico y RdeRumba Cantando Mi canción favorita es Cantando Extremoduro Yo, minoria absoluta Mi disco favorito de Extremoduro es Yo, minoría absoluta Extremoduro Extremoduro Otro de mis grupos favoritos es Extremoduro La vereda de la puerta de atrás Mi canción favorita es La vereda de la puerta de atrás";
var series = "Series Peaky Blinders Thomas Shelby Mi personaje favorito es el protagonista, Thomas Shelby Peaky Blinders Peaky Blinders es una de mis series favoritas Tráiler Peaky Blinders Esta serie trata sobre la familia gitana Shelby y su banda de gángsters, un grupo de personas características por sus boinas con cuchillas y dueñas de los asuntos ilegales, que dominan las apuestas clandestinas y se rigen mediante extorsiones Breaking Bad Walter White El protagonista y uno de mis personajes favoritos es Walter White Breaking Bad Una de mis series favoritas es Breaking Bad Tráiler Breaking Bad Es una serie que trata acerca de un profesor de química llamado Walter White con cáncer terminal se asocia con un exalumno suyo para fabricar y vender metanfetamina a fin de que su familia no pase apuros económicos";
var html = '';


function filtrar() {

    html = '';

    filtrarIndex();
    filtrarAficiones();
    filtrarMusica();
    filtrarSeries();

    document.getElementById('container').innerHTML = '<h1>Resultados de búsqueda</h1>' +
        html;

    if (html === '') {
        document.getElementById('container').innerHTML = '<h1>Sin resultados</h1>'
    }
}

function filtrarIndex() {
    const busqueda = document.getElementById("buscador").value.toLowerCase();
    let indexPalabras = index.toLowerCase();


    if (indexPalabras.indexOf(busqueda) !== -1) {
        html = html + '<div class=resultado>Coincidencias en <div class=nav-item><a class="enlace" href="index.html" title="index">Index</a> </div></div>'
    }
}

function filtrarAficiones() {
    const busqueda = document.getElementById("buscador").value.toLowerCase();
    let indexPalabras = aficiones.toLowerCase();


    if (indexPalabras.indexOf(busqueda) !== -1) {
        html = html + '<div class=resultado>Coincidencias en <div class=nav-item> <a class="enlace" href="aficiones.html" title="aficiones">Aficiones</a> </div></div>'
    }
}

function filtrarMusica() {
    const busqueda = document.getElementById("buscador").value.toLowerCase();
    let indexPalabras = musica.toLowerCase();


    if (indexPalabras.indexOf(busqueda) !== -1) {
        html = html + '<div class=resultado>Coincidencias en <div class=nav-item> <a class="enlace" href="index.html" title="musica">Música</a> </div></div>'
    }
}

function filtrarSeries() {
    const busqueda = document.getElementById("buscador").value.toLowerCase();
    let indexPalabras = series.toLowerCase();


    if (indexPalabras.indexOf(busqueda) !== -1) {
        html = html + '<div class=resultado>Coincidencias en <div class=nav-item> <a class="enlace" href="series.html" title="series">Series</a> </div></div>'
    }
}