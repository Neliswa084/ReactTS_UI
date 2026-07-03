import './App.css'
import { Text } from './components/Text/Text'
import { Navbar } from './components/Navbar/Navbar'



function App() {


  return (
     <>
     <Navbar /> <br /><br /><br />

     <div style={{backgroundColor:'rgb(32, 32, 34)'}} >
      <Text variant='h1'>Anida Dedelay</Text>
      <Text variant={'h2'}> BEST HEALTHY SALAD SERVED </Text>
      <button style={{color:'white' , backgroundColor:'orange', height:'60px',width:'60px'}}> Learn More</button>
    
     </div>

    </>
  )
}

export default App
