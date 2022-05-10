import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Foot from './components/Footer/Foot'
import Home1 from './components/Home/Home1'
import Navbar from './components/Navbar/Navbar'



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Grovyo</title>
        <meta name="description" content="A web and App based popular platform." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <Navbar/>
      <Home1/>
    
      <footer>
        <Foot/>
      </footer>
    </div>
  )
}
