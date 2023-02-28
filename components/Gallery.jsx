import React from "react";
import Image from "next/image";
import styles from "../styles/gallery.module.css";

export const Gallery = ({ images, obj }) => {
  return (
    <div className={styles.gallery}>
      {/* This will be placed on the META tag */}
      {/* <title>{obj}</title> */}
      {/* This will be placed on the META tag */}
      <h1 className={styles.title}>{obj}</h1>
      <div className={styles.grid_gallery}>
        {images.map((item) => {
          console.log(item.src.small);
          const itemImageSource = item.src.small;
          return (
            <Image
              src={itemImageSource}
              width={200}
              height={200}
              alt="alt"
              key={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};
