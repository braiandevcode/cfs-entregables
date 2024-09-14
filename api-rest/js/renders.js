// FUNCION PARA RENDERIZAR LAS VISTAS DE TARJETAS
const d = document;
export const renderData = async (data, fragment, id) => {
  // SI EXISTE LA DATA
  if (data) {
    const card = d.createElement("div");
    card.classList.add("cards__card", "d-flex", "jc-center", "ai-center");

    // CONTENEDOR PARA IMAGEN DEL POKEMON
    const imgContainer = d.createElement("div");
    const img = d.createElement("img");
    img.src = data.sprites.front_default || "/api-rest/images/poke-default.jpg";
    img.alt = data.name;

    imgContainer.appendChild(img);
    card.appendChild(imgContainer);

    // NOMBRE DE POKEMON
    const name = d.createElement("h4");
    name.textContent = data.name;
    card.appendChild(name);
    // AÑADIMOS EN CADA ITERACION A LA TARJETA EN EL FRAGMENTO.
    fragment.append(card);
  }
};
