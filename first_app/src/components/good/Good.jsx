import React from "react";
import styles from "./Good.module.css";

export default function Good(props) {
  // props - properties
  //React Element
  const { title, image, price, stock } = props;
  return (
    <div className={styles.good}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={image} alt="" />
      </div>
      <div className={styles.footer}>
        <div className={styles.price}>{price}</div>
        <div className={styles.stock}>В наличии {stock}</div>
      </div>
    </div>
  );
}
