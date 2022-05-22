import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import styles from "../../../styles/Header.module.css"

const Header = () => (
    <div class="header">
        <div className={socialmedianav}>
           <div className={socialbtn}><i class="fa-brands fa-facebook-square"></i></div>
           <div className={socialbtn}><i class="fa-brands fa-instagram-square"></i></div>
           <div className={socialbtn}><i class="fa-brands fa-behance-square"></i></div>
           <div className={socialbtn}><i class="fa-brands fa-linkedin"></i></div>
           <div className={socialbtn}><i class="fa-brands fa-github-square"></i></div>
        </div>


        <motion.div
            className={logowrapper}
        animate={{ scale: 1 }}
      whileHover={{ scale: 1.2}}>
    <Image
    src="/../public/logo/logo150.png"
            width={80} height={80}>
    </Image>
        </motion.div>
        <div className={navbar}>

        <div className={headerbtn}>
                <Link href="/">
                    <a href="/">Home </a>
                </Link>
            </div>
            <div className={headerbtn}>
                <Link href="/projects">
                    <a href="/projects">Projetos </a>
                </Link>
            </div>
            <div className={headerbtn}>
                <Link href="/about">
                    <a href="/about">Sobre </a>
                </Link>
            </div>
            <div className={headerbtn}>
                <Link href="/">
                    <a href="/">Posts </a>
                </Link>
            </div>
        </div>

    </div>
);

export default Header
