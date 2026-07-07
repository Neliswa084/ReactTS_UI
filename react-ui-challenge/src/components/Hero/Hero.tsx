import './Hero.module.css'
import { Text } from '../Text/Text'
import fruit from '../../assets/FruitImage.png'
import styles from './Hero.module.css'
export const Hero = () => {
  return (
    <div>


     <div className={styles.hero}>
      <div className={styles['hero-text']}>
        <Text variant={'h2'}>Premium Restaurant  </Text>
           {/* <button style={{color:'white' , backgroundColor:'orange', height:'50px',width:'120px'}}> SIGN UP</button> */}
      <Text variant='h1' >Anida Dedelay</Text>
      <Text variant={'h2'}> BEST HEALTHY SALAD SERVED </Text>
      <button className={styles['learnMore-btn']}> LEARN MORE</button>
    
     </div>
      <div className={styles['hero-image']}>
       <img src={fruit} alt="fruit" />
        <button className={styles['signin-btn']}>SIGN IN</button>
        </div>
     </div>
    </div>
  )
}
  