import React, {useState, useEffect} from 'react'


const MinimizedNavbar = (props) => {


  


  
 return (
   <div className='navbar-container'>
      
       <header className="sticky">
           <img src="images/background5.jpg" className='banner' alt="" />
           <p href="#" className='logo'><p>Hi, Im</p><p className='artificial'>Artificial</p>  </p>
          
           <img className='robot' src="./images/Logo.png" alt="" />
           <nav>
               <ul>
                  <li
                  onClick={() => props.homeClick()}
                  >
                       Home
                  </li>
                   <li
                  
                   >
                       ARTificials World
                   </li>
                   <li
                   onClick={() => props.customArtClick()}
                   >
                       Custom Art
                   </li>
                  
               </ul>
           </nav>
       </header>
      
      
   </div>
 )
}


export default MinimizedNavbar



