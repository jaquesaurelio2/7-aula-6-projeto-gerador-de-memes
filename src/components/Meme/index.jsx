import styles from "./index.module.css";
import memesData from "../../memesData";

export default function Meme() {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <input
          type="text"
          className={styles.input}
          placeholder="Texto superior"
        />
        <input
          type="text"
          className={styles.input}
          placeholder="Texto inferior"
        />
        <button className={styles.button}>Obter novo meme 🖼</button>
      </div>
      <div className={styles.meme}>
        <img src="" alt="meme" />
        <h2 className={styles.topText}></h2>
        <h2 className={styles.bottomText}></h2>
      </div>
    </div>
  );
}
