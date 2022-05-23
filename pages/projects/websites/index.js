import Head from 'next/head'
import Image from 'next/image'
import Header from '../../../components/assets/header/Header'
import Footer from '../../../components/assets/footer/Footer'

export default function WebsitesProjects (){
  return(
    <div className={styles.container}>
    <Head>
    <title>
      Websites projects
    </title>
   </Head>
   <Header/>
   <Footer/>
    </div>
  )
}
