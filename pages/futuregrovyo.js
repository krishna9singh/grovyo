import React,{useRef} from 'react'
import Navbar from './components/Navbar/Navbar'
import Foot from './components/Footer/Foot'
import styles from '../pages/components/Home/Home1.module.css'
import Head from 'next/head'

export default function Futuregrovyo() {
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

    <Head>
        <title>Future of Grovyo</title>
        <meta name="description" content="The Idea of Grovyo came from the problem that there are many people who are actually trying to solve a problem" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <h1>What is the future of <span className={styles.blue}>Grovoyo?</span></h1>
      <h3><b>The <span className={styles.blue}>Idea</span> behind Grovyo</b></h3>
      <p>The Idea of Grovyo came from the problem that there are many people who are actually trying to solve a problem<br/>
         and create their startup but even if they succesfully solve that problem they still are not able to create a business<br/>
         out of it. So Grovyo will help them, they just have to come up with an idea and register on Grovyo and create content to start something of their own.<br/>
         We will not completely disclose the idea but this is an exact aim of what we are trying to do .<br/>
         <b>But this platform will be 100% revolutionary for individuals, creators and business owners.</b></p>
      
      <br/>

      <h3>Features in brief</h3>
      <p><li>In Grovyo you can create a community that will 100% support you.</li></p>
      <p><li>You can create your community both by boarding people and sharing content.</li></p>
      <p><li>You will get paid for the content you create by us.</li></p>
      <p><li>The payments will be on monthly basis.</li></p>
      <p><li>You can even start your membership.</li></p>
      <p><li>You just need to create content and share it with others and then once your brand becomes famous you can sell your product, merchandise.</li></p>
      <p><li>We will provide you a fully functional website for your business for free.</li></p>
      <p><li>So you do not need to worry about the costings or anything you only need to focus on planing and create something that people admire.</li></p>
      <p><li>Unlimilted number of people can join the community.</li></p>
      <p><li>The App is 100% made in India.</li></p>

      <br/>
      
      <h3>How it is useful for <span className={styles.blue}>Individuals?</span></h3>
      <p><li>You will get top class entertainment in one place as their favourite creators will be on platform.</li></p>
      <p><li>You can create content with them and you can join their community, chat with them and a lot of cool stuff.</li></p>
      <p><li>You will get paid for the content that you create even for a 30 second video and photo.</li></p>
      <p><li>You can start a brand of your own overnight.</li></p>
      <p><li>You will get a free website.</li></p>
      
      <br/>

      <h3>How it is useful for <span className={styles.blue}>Creators?</span></h3>
      <p><li>There a lot of ways to earn in the app for a creator.</li></p>
      <p><li>They can start a membership and give additional value.</li></p>
      <p><li>After achieving a milestone you will unlock ads and for those ads you will recieve a whopping 95% of the total revenue made by Grovyo.</li></p>
      <p><li>We will provide a completely free website for all your business needs.</li></p>
      <p><li>Creators will recieve a batch that will increase their aunthenticity.</li></p>
      
      <br/>

      <h3>How it is useful for <span className={styles.blue}>Business Owners?</span></h3>
      <p><li>Owners can board their existing community.</li></p>
      <p><li>They can get a free ecommerce site(if needed) and start managing their customer relations on their own.</li></p>
      <p><li>They will get reach as the app will be used by millions in India.</li></p>
      <br/>

      <p>
      <b>Note- Their are a lot of things that we have not disclosed yet as the app is still underconstruction.</b></p>
      <br/>
      <h3>Support us by sharing <span className={styles.blue}><a href='grovyo.com'>Grovyo</a></span> with your friends and family.</h3>


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
