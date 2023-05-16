import Image from "next/image";

import styles from "./page.module.css";

export default async function Pokemon({ params }) {
  const api = `https://pokeapi.co/api/v2/pokemon`;
  const res = await fetch(`${api}/${params.id}`);
  const pokemon = await res.json();
  const pokemonImage = await pokemon.sprites.other["official-artwork"].front_default;

  return (
    <div className={styles.pokemon_container}>
      <h1 className={styles.pokemon_title}>{pokemon.name}</h1>
      <Image
        src={pokemonImage}
        width="200"
        height="200"
        alt={pokemon.name}
      />
      <div>
        <h3>Number: </h3>
        <p># {params.id}</p>
      </div>
      <div>
        <h3>Type:</h3>
        <div className={styles.types_container}>
          {pokemon.types.map((item, index) => (
            <span
              key={index}
              className={`${styles.type} ${styles[`type_` + item.type.name]}`}
            >
              {item.type.name}{" "}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.data_container}>
        <div className={styles.data_height}>
          <h4>Height: </h4>
          <p>{pokemon.height * 10} cm</p>
        </div>
        <div className={styles.data_weight}>
          <h4>Weight:</h4>
          <p>{pokemon.weight / 10} kg</p>
        </div>
      </div>
    </div>
  );
}
