import React from "react";
import Link from "next/link";

import styles from "./styles.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div> Made by  <Link href="https://github.com/canerturan29" target="_blank" className={styles.link}>
                Caner Turan
            </Link> </div>

        </footer>
    );
}

export default Footer;