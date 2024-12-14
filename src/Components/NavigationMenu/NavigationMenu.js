import React from 'react'
import styles from './navigationmenu.module.css'
import { TiThMenu } from "react-icons/ti";

const NavigationMenu = () => {
  return (
    <div className={styles.NavigationMenuCont}>
        <section className={styles.menuLogo}>
            <h1><span>L</span>ucky.</h1>
        </section>

      <ul className={styles.navlist}>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Skills</a></li>
        <li><a href='#'>Services</a></li>
        <li><a href='#'>Protfolio</a></li>
        <li><a href='#'>Contect</a></li>
      </ul>

    <section className={styles.mobileMenuButton}>
        <button><TiThMenu /></button>
    </section>

    </div>
  )
}

export default NavigationMenu