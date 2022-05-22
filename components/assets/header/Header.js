import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Header = () => (
    <div class="header">
        <div class="social-media">
           <div class="social-btn"><i class="fa-brands fa-facebook-square"></i></div>
            <div class="social-btn"><i class="fa-brands fa-instagram-square"></i></div>
            <div class="social-btn"><i class="fa-brands fa-behance-square"></i></div>
            <div class="social-btn"><i class="fa-brands fa-linkedin"></i></div>
            <div class="social-btn"><i class="fa-brands fa-github-square"></i></div>
        </div>


        <motion.div
            class="logo-wrapper"
        animate={{ scale: 1 }}
      whileHover={{ scale: 1.2}}>
    <Image
    src="/../public/logo/logo150.png"
            width={80} height={80}>
    </Image>
        </motion.div>
        <div class="navbar">

            <div class="header-btn">
                <Link href="/">
                    <a href="/">Home </a>
                </Link>
            </div>
            <div class="header-btn">
                <Link href="/projects">
                    <a href="/projects">Projetos </a>
                </Link>
            </div>
            <div class="header-btn">
                <Link href="/about">
                    <a href="/about">Sobre </a>
                </Link>
            </div>
            <div class="header-btn">
                <Link href="/">
                    <a href="/">Posts </a>
                </Link>
            </div>
        </div>

    </div>
);

export default Header
