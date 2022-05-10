import React from 'react'
import style from '../Footer/Foot.module.css'

export default function Foot() {
  return (
    <>
        
        <div className={style.main}>
        <p className={style.p}>For any issue or feedback kindly mail us at <b><span className={style.blue}>contactgrovyo@gmail.com</span></b></p><br/><footer className={style.footer}>
    
        <div className={style.logo}>
        GROVYO
        </div>
        <div className={style.made}>
        Made with ❤️ in India</div>
        <br/>
        <div className={style.div}>
        <a className={style.lin} href='about'>About</a> <span className={style.bold}>|</span>
        <a className={style.lin} href='contact'>Contact</a>
        </div>
      </footer>
      
        </div>
        <br/>
    </>
  )
}
