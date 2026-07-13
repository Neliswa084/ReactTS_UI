import React from 'react'
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
