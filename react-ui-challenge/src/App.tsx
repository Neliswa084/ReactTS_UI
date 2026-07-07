import  './App.css'
import { Text } from './components/Text/Text'
import { Navbar } from './components/Navbar/Navbar'
import {Hero} from './components/Hero/Hero'
import { OrangeBenefit } from './components/OrangeBenefit/OrangeBenefit'
import { Cards } from './components/CardsImage/Cards'

import OrangeOne from './assets/Orange_One.png'
import OrangeTwo from './assets/Orange_two.png'
import FruitImage from './assets/picture3.png'
import { useState } from 'react'



function App() {

    // const [menu] = useState ([
    //      {name: "ARCU VOLUT FAT VITAE", image:OrangeOne, description: "Phestiers 1geart"},
    //      {name: "$19,99,90,99E", image:OrangeTwo, description: "Orviste past brorps"},
    //      {name: "SFIELY TUN DRENARD", image:FruitImage, description: "Ongand suniers"}
    // ])
  return (
     <>
     
     <Navbar />
     <Hero />
     <OrangeBenefit />
     <Cards />

     {/* {
      menu && menu.length> 0 && menu.map(product =>
      {
        return <Cards 
        
        name={product.name}
        description={product.description}
        image={product.image}
      />
      })
     } */}

    </>
  )
}

export default App
