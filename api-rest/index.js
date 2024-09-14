import { getPokemons } from "./js/dataPokemons.js";

document.addEventListener("DOMContentLoaded", async () => {
  await getPokemons();
});
