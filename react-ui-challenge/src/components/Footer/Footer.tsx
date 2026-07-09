import {Text} from '../../components/Text/Text'
import Picture from '../../assets/Cherry.png'
import styles from './Footer.module.css'

import peachIcon from '../../assets/peach.png'
import lemonIcon from '../../assets/lemon.png'
import drinkIcon from '../../assets/coffee.png'

export default function Footer() {
  return (
    <div className={styles['flexbox-container']}>
      
        <div className={styles['flexboxItem']}>
         <img  src={Picture} alt="Fotter picture" className={styles['item-image']}/>
         <div className={styles['centered']}>Hello</div>
        </div>

     <div className={styles['flexboxItem']}>
  <Text variant='h2'>OUR MENU BENEFIT</Text>

  <div className={styles['benefit-row']}>

    <div className={styles['benefit-item']}>
     <img src={peachIcon} alt="fresh" className={styles.icon} />
      <Text variant='h2'>FRESH</Text>
      <Text variant='p'>Plays brand ao inontionaries</Text>
    </div>

    <div className={styles['benefit-item']}>
      <img src={lemonIcon} alt="fresh" className={styles.icon} />
      <Text variant='h2'>VITAMIN</Text>
      <Text variant='p'>Nispen sion proteins</Text>
    </div>

    <div className={styles['benefit-item']}>
    <img src={drinkIcon} alt="fresh" className={styles.icon} />
      <Text variant='h2'>ORE ANIC</Text>
      <Text variant='p'>Towageles warulus</Text>
    </div>

  </div>
</div>

        <div className={styles['flexboxItem']}>
            <Text variant={'h2'}>OPENING HOURS</Text>
              <Text variant={'p'}> Monday          17:00</Text>
              <Text variant={'p'}> Tuesday         13:60</Text>
              <Text variant={'p'}> Thursday        19:00</Text>
              <Text variant={'h2'}>QUICK LINKS</Text>
        </div>
    </div>
  )
}
