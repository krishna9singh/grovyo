import Link from 'next/link';
import React from 'react';
import style from'../Navbar/Navbar.module.css';

export default function Navbar() {
  return (
    <div className={style.nav}>
        <div className={style.logo}>
        <a href='localhost:3000'>
        GROVYO</a>
        </div>
        <div className={style.list}>
        <ul className={style.ul}>
        
        <div className={style.dropdown}>
        <Link href='#preregister'><a>
        <button className={style.button}>Pre-Register</button></a></Link>
        
      </div>
        </ul>
        </div>
        
    </div>
  )
}
