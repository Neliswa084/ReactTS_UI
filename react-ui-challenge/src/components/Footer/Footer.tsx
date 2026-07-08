import React from 'react'
import './Footer.module.css'
import Picture from '../../assets/Cherry.png'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <div className={styles['flexbox-container']}>
        <div className={styles['flexboxItem']}>
         <img src={Picture} alt="Fotter picture"/>
         <div className={styles['centered ']}>Hello</div>
        </div>
        <div className={styles['flexboxItem']}>
         hh
        </div>
        <div className={styles['flexboxItem']}>
         hhh
        </div>
    </div>
  )
}
