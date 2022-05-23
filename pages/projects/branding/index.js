import Head from 'next/head'
import Image from 'next/image'
import Header from '../../../components/assets/header/Header'
import Footer from '../../../components/assets/footer/Footer'

export default function AnimationProjects (){
  return(
    <div className={styles.container}>
    <Head>
    <title>
      Branding
    </title>
   </Head>
   <Header/>
   <Footer/>
    </div>
  )
}
