import Image from "next/image";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>About</h1>
      <p>This is a pokedex project, using nextjs</p>
      <Image src="/../public/victreebel.png" width={360} height={360} />
    </div>
  );
}
