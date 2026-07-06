import React from 'react'
import { Text } from '../Text/Text'
import mugorange from '../../assets/Mug_and_Orange.png'

export const OrangeBenefit = () => {
  return (
    <div>
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
