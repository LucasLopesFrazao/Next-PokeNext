import styles from "./page.module.css";
import Image from "next/image";

export async function getPokemons() {
  const maxPokemons = 151;
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
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>
          Poke<span>Next</span>
        </h1>
        <Image
          src="/../public/pokebola.png"
          width="50"
          height="50"
          alt="pokenext"
        />
      </div>
      <div className={styles.pokemon_container}>
        {pokemons.map((pokemon) => (
          <p key={pokemon.id}>
            {pokemon.name} - {pokemon.id}
          </p>
        ))}
      </div>
    </>
  );
}
