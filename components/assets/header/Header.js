import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import styles from "../../../styles/Header.module.css"
import { ReactElement } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => (
    <div className={styles.container}>
        <div className={styles.header}>
                    <div className={styles.socialmedianav}>
                <div className={styles.socialbtn}>
                    <FontAwesomeIcon icon="fa-brands fa-facebook-square" />
                </div>
            <div className={styles.socialbtn}>
                <FontAwesomeIcon icon="fa-brands fa-instagram-square" />
            </div>
            <div className={styles.socialbtn}>
                <FontAwesomeIcon icon="fa-brands fa-behance-square" /></div>
            <div className={styles.socialbtn}>
                <FontAwesomeIcon icon="fa-brands fa-linkedin" />
            </div>
            <div className={styles.socialbtn}>
                <FontAwesomeIcon icon="fa-brands fa-github-square"/>
            </div>

                    </div>
            <motion.div
            className={styles.logowrapper}
        animate={{ scale: 1 }}
      whileHover={{ scale: 1.2}}>
    <Image
    src="/../public/logo/logo150.png"
            width={80} height={80} alt="TragodieDesign">
    </Image>
        </motion.div>
        <div className={styles.navbar}>

        <div className={styles.headerbtn}>
                <Link href="/">
                    Home
                </Link>
            </div>
            <div className={styles.headerbtn}>
                <Link href="/projects">
                    <a href="/projects">Projetos </a>
                </Link>
            </div>
            <div className={styles.headerbtn}>
                <Link href="/about">
                    Sobre
                </Link>
            </div>
            <div className={styles.headerbtn}>
                <Link href="/">
                    Posts
                </Link>
            </div>
        </div>
        </div>
    </div>

);

export default Header
