import  './App.css'
import { Navbar } from './components/Navbar/Navbar'
import {Hero} from './components/Hero/Hero'
import { OrangeBenefit } from './components/OrangeBenefit/OrangeBenefit'
import { useState } from 'react'
import { Cards } from './components/CardsImage/Cards'
import { LastSection } from './components/LastSection/LastSection'


import OrangeOne from './assets/Orange_One.png'
import OrangeTwo from './assets/Orange_two.png'
import Fruits from './assets/picture3.png'
import Footer from './components/Footer/Footer'

function App() {


  const [menu ] = useState([
    {name: "ARCU VOLUT FAT VITAE" , image: OrangeOne, description:"Phestiers 1geart"},
    {name: "$19,99,90,99E" , image: OrangeTwo, description:"Orviste past brops"},
    {name: "SFIELY TUN DENARD" , image: Fruits, description:"Ongand suniers"}
  ])

  return (
     <>
     <div id='app-container'>
  <div id='scrollable'>
     
     <Navbar />
     <Hero />
     <OrangeBenefit />
     <div className="cards-container">
        {
      
      menu && menu.length> 0 && menu.map(product =>
      {
        return <Cards name={product.name} 
        description={product.description}
        image={product.image} />
      })
     }
     </div>

     <LastSection />
     </div>
     <Footer/>
     
     </div>
     

    </>
  )
}

export default App
