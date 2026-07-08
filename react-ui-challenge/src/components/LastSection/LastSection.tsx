import React from 'react'
import {Text} from '../Text/Text'
import FruitImage from '../../assets/image.png'
import styles from '../LastSection/LastSection.module.css'

export const LastSection = () => {
  return (
    <>
    <div className={styles['container']}>
    <div className={styles['item-card']}>
       <Text variant={'h1'}>Just imagine seeds and summer in gell sunshine </Text>
       </div>

        <div  className={styles['item-card']}>
        <img className={styles['item-image']} src={FruitImage} alt={'image product'}/>
       </div>

       <div className={styles['card']}>
        <Text variant='h2'>EBEE WOUS BENEFIT </Text>
        <Text variant='p' > Hello come and buy our fresh fruit </Text>
         
        <button className={styles['headMore-btn']}>HEAD MORE</button>

       </div>
       </div>
   
      
    </>
  )
}
