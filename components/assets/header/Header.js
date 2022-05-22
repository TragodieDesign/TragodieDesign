import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import styles from "../../../styles/Header.module.css"

const Header = () => (
    <div className={styles.container}>
        <div className={styles.header}>
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
