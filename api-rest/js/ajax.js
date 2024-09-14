// FUNCION GENERAL PARA CONSULTAS
export const getData = async (url) => {
  // HACER PETICION POR METODO GET
  const getData = await fetch(url);

  // SI FALLA LA PETICION RETORNAR OBJETO DE ERROR
  if (!getData.ok) {
    throw {
      status: getData.status,
      statusText: getData.statusText,
    };
  }

  // PARSEAR A OBJETO JAVASCRIPT
  const dataJson = await getData.json();

  // RETORNAR DATOS EN JSON
  return dataJson;
};
