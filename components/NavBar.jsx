import React from "react";
import Link from "next/link";
import styles from "../styles/NavBar.module.scss";
import { AiOutlineHome, AiOutlineCar } from "react-icons/ai";
import { GrBike } from "react-icons/gr";
import { TfiRocket } from "react-icons/tfi";

const NavBar = () => {
  return (
    <nav className={styles["navbar-main"]}>
      <nav className={styles["nav-home"]}>
        <Link className={styles.link} href="/">
          <AiOutlineHome className={styles.icon} />
        </Link>
      </nav>
      <nav className={styles["nav-menu"]}>
        <Link className={styles.link} href="/cars">
          <AiOutlineCar className={styles.icon} />
        </Link>
        <Link className={styles.link} href="/bikes">
          <GrBike className={styles.icon} />
        </Link>
        <Link className={styles.link} href="/rockets">
          <TfiRocket className={styles.icon} />
        </Link>
      </nav>
    </nav>
  );
};

export default NavBar;
