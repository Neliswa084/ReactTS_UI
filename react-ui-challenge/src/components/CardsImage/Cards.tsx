import React from 'react'
import Orange_One from '../../assets/Orange_One.png'
import OrangeTwo from '../../assets/Orange_two.png'
import Fruit from '../../assets/image.png'
import styles from './Cards.module.css'
import { Text } from '../Text/Text'

type CardProps={
  name: string,
  description: string,
  image: string
}

export const Cards: React.FC<CardProps> = ({name, description, image}) => { 
  return (
    <div className={styles['item-card']}> 
   <img className={styles['item-image']} src={image} alt={'image product'}/> 
   <Text variant={'h2'} >{name}</Text>
   <Text variant={'p'}>{description}</Text>
    </div>
  )
}
