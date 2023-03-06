import React from "react";
import Image from "next/image";
import styles from "../styles/gallery.module.scss";

export const Gallery = ({ images }) => {
  return (
    <div className={styles.gallery}>
      <div className={styles.grid_gallery}>
        {images.map((item) => {
          const itemImageSource = item.src.small;
          return (
            <div className={styles["image-container"]}>
              <Image
                className={styles.image}
                src={itemImageSource}
                // width={200}
                // height={200}
                layout="fill"
                alt="alt"
                key={item.id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
