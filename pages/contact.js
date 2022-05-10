import React,{useRef} from 'react'
import Navbar from './components/Navbar/Navbar'
import Foot from './components/Footer/Foot'
import styles from '../pages/components/Home/Home1.module.css'
import Head from 'next/head'

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y40v6ia', 'template_7hg9o6t', form.current, 'fA8woDy_8_PxjM5PE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
      <Navbar/>
      <Head>
        <title>Contact Us | Grovyo</title>
        <meta name="description" content="For any issue or feedback kindly mail us at contactgrovyo@gmail.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className={styles.main5} id="preregister">
      <h1><span className={styles.blue}>Pre-Registeration</span> form</h1>
      <p>Fill the Pre-Registration form below to get notified when the app releases,<br/><b>And join the <span className={styles.blue}>Revolution.</span></b></p>
      <b><p>Note- Check your spam folder.</p></b>
      <div className={styles.box}>
      <form ref={form} onSubmit={sendEmail}>
      <input type="text" className={styles.name} placeholder={'Name'} name={'user_name'}/>
      <br/>
      <input type="Email" className={styles.email} placeholder={'Email'} name={'user_email'}/><br/>
      <input type="text" className={styles.number} placeholder={'Number'} name={'user_number'}/>
      <br/>
      <br/>
      <button className={styles.newbut} value='Send'>Register</button></form>
      
      </div>


      <br/>
      <b>
      <p>Note- We will not spam you and your data will be 100% safe.</p></b>
      

      </div>
      <Foot/>
    </>
  )
}
