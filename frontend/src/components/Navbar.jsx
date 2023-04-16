import React, {useState, useEffect} from 'react'


const Navbar = (props) => {


   const startingContainerStyle = {
       height: `100vh`,
       width: `100vw`
   }


   const [headerClassName, setHeaderClassName] = useState('')
   const [logoUrl, setLogoUrl] = useState('');
   const [containerStyle, setContainerStyle] = useState(startingContainerStyle);
   const [activeNav, setActiveNav] = useState(props.activeNavIndex)


   useEffect(() => {
       window.addEventListener('scroll', handleScroll);
       return () => {
         window.removeEventListener('scroll', handleScroll);
       };
     }, []);




   const handleScroll = () => {
       if(window.pageYOffset > 0) {
           setHeaderClassName('sticky');
           setLogoUrl('images/Logo.png');
           setContainerStyle({})
       }else {
           setHeaderClassName('');
           setLogoUrl('')
           setContainerStyle({
               height: `100vh`,
               width: `100vw`
           })
       }


      
   }
 return (
   <div style={containerStyle} className='navbar-container'>
      
       <header className={headerClassName}>
           <img src="images/background5.jpg" className='banner' alt="" />
           <p href="#" className='logo'><p>Hi, Im</p><p className='artificial'>Artificial</p>  </p>
          
           <img className='robot' src={logoUrl} alt="" />
           <nav>
               <ul>
                  <li
                  id='nav-1'
                  


                   onClick={() => props.homeClick()}
                  >
                       Home
                  </li>
                   <li
                   id='nav-2'
                  
                   onClick={() => props.artWorldClick()}
                   >
                       ARTificials World
                   </li>
                   <li
                   id='nav-3'
                  
                   onClick={() => props.customArtClick()}
                   >
                       Custom Art
                   </li>
                   <li
                   id='nav-4'
                   onClick={() => props.aboutArtClick()}
                   >
                       About ART
                   </li>
               </ul>
           </nav>
       </header>
      
      
   </div>
 )
}


export default Navbar



