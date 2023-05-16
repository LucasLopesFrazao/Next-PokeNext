import styles from "./page.module.css";

export async function getPokemons() {
  const maxPokemons = 255;
  const api = `https://pokeapi.co/api/v2/pokemon/`;

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  // add pokemon index

  data.results.forEach((item, index) => {
    item.id = index + 1;
  });

  return data.results;
}

export default async function Home() {
  const pokemons = await getPokemons();
  return (
    <div>
      <h1>PokeNext</h1>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>{pokemon.name} - {pokemon.id}</li>
        ))}
      </ul>
    </div>
  );
}
