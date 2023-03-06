import React, { Children } from "react";
import NavBar from "./NavBar";
import styles from "../styles/Layout.module.scss";


const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
