import './Hero.module.css'
import { Text } from '../Text/Text'
import mugorange from '../../assets/Mug_and_Orange.png'
import fruit from '../../assets/FruitImage.png'

export const Hero = () => {
  return (
    <div>


     <div className="hero">
      <div className="hero-text">
        <Text variant={'h2'}>Premium Restaurant  </Text>
           {/* <button style={{color:'white' , backgroundColor:'orange', height:'50px',width:'120px'}}> SIGN UP</button> */}
      <Text variant='h1' >Anida Dedelay</Text>
      <Text variant={'h2'}> BEST HEALTHY SALAD SERVED </Text>
      <button style={{color:'white' , backgroundColor:'orange', height:'50px',width:'120px'}}> LEARN MORE</button>
    
     </div>
       <img src={fruit} alt="fruit" />
     </div>
     <div className="section">
      <div className="container">
        <Text variant={'h1'} >Orange Benefit  </Text>
         <img src={mugorange} alt="OrangeMug" /> 
            <button style={{color:'white' , backgroundColor:'orange', height:'50px',width:'120px'}}> LEARN MORE</button>
        </div>
     </div>
    </div>
  )
}
