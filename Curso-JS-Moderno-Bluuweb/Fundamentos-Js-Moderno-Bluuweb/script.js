/* 
 //OBJETOS

const web = {
  nombre: 'bluuweb',
  links: {
    enlace: 'www.bluuweb.cl',
  },
  redesSociales: {
    youtube: {
      enlace: 'youtube.com/bluuweb',
      nombre: 'bluuweb yt',
    },
  },
};

const enlaceYT = web.redesSociales.youtube.enlace;
console.log(enlaceYT);

//CON DESTRUCTURING OBJECT

const { enlace, nombre } = web.redesSociales.youtube;
console.log(enlace, nombre); */

//FETCH API

/* fetch('https://pokeapi.co/api/v2/pokemon')
  .then((respuesta) => respuesta.json())
  .then((data) => {
    console.log(data);
    for (pokemon of data.results) console.log(pokemon.name);
  })
  .catch((error) => console.log(error));
 */
//ASYNC AWAIT

const obtenerPokemones = async () => {
  try {
    const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon');
    const data = await respuesta.json();
    /*   let arrayNombres = [];
    data.results.forEach((poke) => {
      arrayNombres.push(poke.name);
    });                                 CON FOREACH
    console.log(arrayNombres); */
    /* const arrayNombres = data.results.map((poke) => poke.name);
    console.log(arrayNombres);                                         CON MAP */
    const arrayNombres = data.results.filter(
      (poke) => poke.name !== 'bulbasaur'
    );
    console.log(arrayNombres);
  } catch (error) {
    console.log(error);
  }
};

obtenerPokemones();
