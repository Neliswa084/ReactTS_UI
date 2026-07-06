import  './App.css'
import { Text } from './components/Text/Text'
import { Navbar } from './components/Navbar/Navbar'
import fruit from './assets/FruitImage.png'





function App() {


  return (
     <>
     
     <Navbar />

    <div className="hero">
      
      <div className="hero-text">
      <Text variant='h1' >Anida Dedelay</Text>
      <Text variant={'h2'}> BEST HEALTHY SALAD SERVED </Text>
      <button style={{color:'white' , backgroundColor:'orange', height:'60px',width:'90px'}}> Learn More</button>
    
     </div>
       <img src={fruit} alt="fruit" />
     </div>

    </>
  )
}

export default App
