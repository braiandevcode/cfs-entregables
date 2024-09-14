import { getData } from "./ajax.js";
import { pokeApiConfig } from "./config_api.js"; //IMPORTO CONFIGURACION PARA LA PETICION
import { renderData } from "./renders.js";

// CREACION DE CONTANTES GLOBALES
const d = document;
const cards = d.querySelector(".cards");
// CREAR VARIABLE DE FRAGMENT PARA MEJORAR EL RENDIMIENTO
const fragment = d.createDocumentFragment();

// DESESTRUCTURO OBJETO DE CONFIGURACION
const { API, ENDPOINT, QUERY } = pokeApiConfig;

// FUNCION PARA CONSULTA A API
export const getPokemons = async () => {
  // INTENTAR CONSULTA
  try {
    const resultDataPokemon = await getData(`${API}${ENDPOINT}${QUERY}`);

    // GUARDAR RESULTADOS DE PETICION
    const resultPokemons = resultDataPokemon.results;

    // MAPEAR Y  GUARDAR EN NUEVO ARRAY DE PETICION ASINCRONA
    const pokePromises = await resultPokemons.map(async (poke) => {
      try {
        //PETICION ASINCRONA A CADA URL DEVUELTA EN LA PRIMER PETICION
        const dataPokemon = await getData(`${poke.url}`);
        return dataPokemon;
      } catch (err) {
        let message =
          err.statusText ??
          "Ocurrio un error al hacer la consulta de datos de cada pokemon"; //ASEGURAR POR SI NO CONTIENE MENSAJE TEXTUAL.
        console.log(`Error ${err.status}: ${message}`);
      }
    });

    // ESPERAR A QUE TODAS LAS CONSULTAS EN EL MAPEO SE RESUELVAN
    const pokemonsData = await Promise.all(pokePromises);

    // RECORRER CADA OBJETO DE DATOS DE LOS POKEMONS
    pokemonsData.forEach((pokemon) => {
      //console.log(pokemon);
      renderData(pokemon, fragment); //LLAMO A RENDER PARA LA VISTA
    });

    // INSERTAMOS EL FRAGMENTO
    cards.append(fragment);
  } catch (err) {
    let message = err.statusText ?? "Ocurrio un error al hacer la consulta"; //ASEGURAR POR SI NO CONTIENE MENSAJE TEXTUAL.
    console.log(`Error ${err.status || 500}: ${message}`);
  }
};
