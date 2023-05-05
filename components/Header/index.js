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

            </div>
        </header>

    )
}

export default Header