import React from 'react'
import styles from './home.module.css'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";


const Home = () => {
  return (
    <div className={styles.HomeCont}>
        <section className={styles.homeContent}>
            <h1>Hi! I'm Mukesh Kumar Tiwary</h1>
            <div className={styles.changeText}>
                <h3>And I'm</h3>
                <h3>
                    <span className={styles.word}>Youtuber</span>
                    <span className={styles.word}>Web Designer</span>
                    <span className={styles.word}>Front-End Developer</span>
                    <span className={styles.word}>UI/UX Developer</span>
                    <span className={styles.word}>Graphic Designer</span>
                </h3>
            </div>
           
           <p>"As a passionate front-end developer with 2 years of experience, I specialize in creating visually stunning and user-friendly web interfaces that deliver seamless digital experiences."
           </p>


           <div className={styles.infoBox}>
              <div className={styles.emailInfo}>
                <h5>Email :</h5>
                <span>mukeshkumartiwary1997@gmail.com</span>
              </div>
           </div>



           <div className={styles.btnBox}>
            <a href='#' className={styles.btn}>Download CV</a>
            <a href='#' className={styles.btn}>Hire Me Now!</a>
           </div>



           <div className={styles.socialIcons}>
            <a href=''><FaFacebookF /></a>
            <a href=''><FaTwitter /></a>
            <a href=''><FaInstagram /></a>
            <a href=''><FaDribbble /></a>
            
           </div>

          
            
        </section>


      <section className={styles.homeImage}>
        <div className={styles.imgBox}>
            <img src='/images/man3.png' />
        </div>
      </section>





    </div>
  )
}

export default Home