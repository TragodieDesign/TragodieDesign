import Head from 'next/head'
import Image from 'next/image'
import Header from '../../../components/assets/header/Header'
import Footer from '../../../components/assets/footer/Footer'

export default function PostsProjects (){
  return(
    <div className={styles.container}>
    <Head>
    <title>
      Posts estáticos
    </title>
   </Head>
   <Header/>
   <Footer/>
    </div>
  )
}
