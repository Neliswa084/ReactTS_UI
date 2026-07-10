import { Text } from '../Text/Text'
import mugorange from '../../assets/Mug_and_Orange.png'
import styles from './OrangeBenefit.module.css'
import orange from '../../assets/orange.png'

export const OrangeBenefit = () => {
  return (
  <div className={styles.section}>
  <div className={styles.container}>

    <div className={styles.left}>
      <Text variant='h1'>Orange Benefit</Text>
      <div className={styles['icon-row']}>
        <img src={orange} className={styles['orange-icon']} alt="orange" />
        <Text variant={'p'}>Jus1 reogine eseds and summer in golled quasiunp </Text>
      </div>
      <button className={styles['learnMore-btn']}>LEARN MORE</button>
    </div>

    <div className={styles.right}>
      <img src={mugorange} alt="juice" />
    </div>
  </div>
</div>
  )
}

   