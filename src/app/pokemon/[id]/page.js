export default async function Pokemon({ params }) {
  const api = `https://pokeapi.co/api/v2/pokemon/`;
  const res = await fetch(`${api}/${params.id}`);
  const pokemon = await res.json();

  console.log(pokemon);

  return <h1>{pokemon.name}</h1>;
}
