import {Text} from '../Text/Text'
import styles from './Navbar.module.css'


export const Navbar = () => {
  return (
   
    <nav>
      
         <div className={styles.content}>

            <Text variant={'span'}style={{margin:0,color:'white'}} >Fruit Restaurant</Text>
            
       <div className={styles.links}>
        <a href='/#' className={styles.link}> HOME</a> 
        <a href='/#' className={styles.link}> MENU</a>
        <a href='/#' className={styles.link}> PAGES</a>
        <a href='/#' className={styles.link}> BLOG</a>
        <a href='/#' className={styles.link}> CONTACT US</a>

         <div className={styles ['profile-icon']}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
</svg>
</div>
  <div className={styles ['profile-icon']}>
           <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" viewBox="0 0 16 16">
       <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
        </svg>

        </div>
              </div>
       </div>

    </nav>
  )
}
