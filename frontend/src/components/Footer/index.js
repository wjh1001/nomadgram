import React from "react";
import styles from "./styles.scss";

const Footer = (props,context) => (
    <footer className={styles.footer}>
        <div className={styles.column}>
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>About Us</li>
                    <li className={styles.listItem}>About Us</li>
                    <li className={styles.listItem}>Blog</li>
                    <li className={styles.listItem}>Press</li>
                    <li className={styles.listItem}>API</li>
                    <li className={styles.listItem}>Jobs</li>
                </ul>
            </nav>
        </div >
        <div className={styles.column}>
        <span className={styles.copyright}>2017</span>
        </div> 
    </footer>
 
);
export default Footer;