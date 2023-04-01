import Link from 'next/link'
import React from 'react'
import Styles from "./styles.module.css"
import { FaPlayCircle } from "react-icons/fa"
function Header() {
    return (
        <header className={`${Styles.header} container fluid`}>
            <div className={Styles.headerWrapper}>
                <Link href="/" className={Styles.logo}>
                    <FaPlayCircle />HERFILMS
                </Link>
                <nav className={Styles.navigationMenu}>
                    <Link href="/">Movies</Link>
                    <Link href="/">Series</Link>
                    <Link href="/">Kids</Link>

                </nav>
            </div>
        </header>

    )
}

export default Header