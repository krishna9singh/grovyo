import React,{useRef, useState} from 'react'
import styles from './Home1.module.css'
import Image from 'next/image'
import im from '../static/i.png'
import con from '../static/concept.png'
import con2 from '../static/concept2.png'
import con3 from '../static/concept3.png'
import Link from 'next/link'
import CountUp from 'react-countup'
import emailjs from '@emailjs/browser'


export default function Home1() {
 
  const [buttonText, setButtonText] = useState("Register");
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
      <div className={styles.main}>
      <div className={styles.first}>
      <div className={styles.su}><Link href='#preregister' className={styles.lin}>Register Now ➤</Link></div><br/><span className={styles.ed}>
      Have an <span className={styles.blue}>Idea?</span> <br/>Let{"'"}s Bring it<br/>to Reality...<br/></span>
      <div className={styles.pack}>
      
      <Link href='#preregister'>
      <button className={styles.button}>Pre-Register</button></Link>
      </div></div>
      <div className={styles.second}>
      <Image layout='fixed' src={im} height={500} width={500} alt='Image'/>
      </div>

      
      </div>
      <div className={styles.main2}>
      <div className={styles.secp}>
      <h1>Why People Love Using <span className={styles.blue}>Grovyo?</span></h1></div>
      
      <div className={styles.sub}>
      <Image  layout='fixed'src={con2} height={500} width={1100} alt='concept2' />
      
      </div>
      <Link href='futuregrovyo'>
      <button className={styles.midbut}>Learn More</button></Link>
      </div>
      <div className={styles.line}/>
      <div className={styles.main3}>
      <h1>What is <span className={styles.blue}>Grovyo?</span></h1>
      <div className={styles.mid}>
      
      <Image  layout='fixed' src={con3} height={450} width={1000} alt='concept3' /></div></div>
      <div className={styles.line}/>

      <div className={styles.main4}><br/>
      <h1>How things <span className={styles.blue}>work?</span></h1><br/>
      <span className={styles.con}>
      <Image layout='fixed' src={con} height={700} width={1000} alt='concept'/></span>
      </div>

      <div className={styles.main5} id="preregister">
      <h1>So, What are you <span className={styles.blue}>waiting</span> for?</h1>
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
      <button className={styles.newbut} value='Send' onClick={() => {
        setButtonText("Done");
        setTimeout(() => {
          setButtonText("Register");
        }, 2000);
      }}>{buttonText}</button></form>
      
      </div>
    

      <br/>
      <b>
      <p>Note- We will not spam you and your data will be 100% safe.</p></b>
      

      </div>
      <div className={styles.line}/>
      <div className={styles.main6}><br/>
      <h1 className={styles.h}>Total Number of <span className={styles.blue}>Pre-Registered</span> Users Yet</h1>
      <CountUp start={0} end={107} duration={7} className={styles.counter}/>
      </div>
      
      <div className={styles.main7}>
   
      </div>
      
    </>
    
  )
  
}

