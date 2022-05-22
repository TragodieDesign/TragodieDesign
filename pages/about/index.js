import Head from 'next/head'
import Image from 'next/image'
import Header from "../../components/assets/header/Header"
import Footer from "../../components/assets/footer/Footer"
import {motion} from 'framer-motion'
import styles from '../../styles/About.module.css'



export default function About () {
  return(
  <div className={styles.container}>
    <Head>
       <title>Sobre</title>
    </Head>
    <Header/>
    <div className={styles.main}>
      <h1>Hello About</h1>
<div className="home_banner">
        <Image src ={`/../../public/banners/imagem/Banner-1536x864.png`}
          width={1536}
          height={864}
        alt={"TragodieDesign"}>
        </Image>
        </div>

    </div>
    <Footer/>




    </div>

  )

}
