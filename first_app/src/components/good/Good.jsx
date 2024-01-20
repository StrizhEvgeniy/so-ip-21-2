import React from "react";
import styles from "./Good.module.css";

export default function Good() {
  //React Element
  return (
    <div className={styles.good}>
      <h2 className={styles.title}>Монитор</h2>
      <img className={styles.image} src="monitor.jpg" alt="" />
      <div className={styles.footer}>
        <div className={styles.price}>5795</div>
        <div className={styles.stock}>В наличии 1</div>
      </div>
    </div>
  );
}
