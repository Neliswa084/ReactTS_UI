import  './App.css'
import { Text } from './components/Text/Text'
import { Navbar } from './components/Navbar/Navbar'
import fruit from './assets/FruitImage.png'
import mugorange from'./assets/Mug_and_Orange.png'





function App() {


  return (
     <>
     
     <Navbar />

    <div className="hero">
      <div className="hero-text">
        <Text variant={'h2'}>Premium Restaurant  </Text>
           {/* <button style={{color:'white' , backgroundColor:'orange', height:'50px',width:'120px'}}> SIGN UP</button> */}
      <Text variant='h1' >Anida Dedelay</Text>
      <Text variant={'h2'}> BEST HEALTHY SALAD SERVED </Text>
      <button style={{color:'white' , backgroundColor:'orange', height:'50px',width:'120px'}}> LEARN MORE</button>
    
     </div>
  
     <img src={fruit} alt="fruit" style={{alignContent:'center'}}/>
     </div>
     <div className="hero">
        <Text variant={'h1'}>Orange Benefit  </Text>
        <img src={mugorange} alt="OrangeMug"/>
        
     </div>
    </>
  )
}

export default App
