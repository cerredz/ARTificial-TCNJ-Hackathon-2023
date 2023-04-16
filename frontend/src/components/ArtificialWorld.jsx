import React from 'react'


const ArtificialWorld = (props) => {


 const mythicalMeadowsClick = () => {
   props.mythicalMeadowsClick();
 }


 const geometricGardens = () => {
   props.geometricGardensClick();
 }


 const paintedParadise = () => {
   props.paintedParadiseClick();
 }


 const popPlanet = ()=> {
   props.popPlanetClick();
 }
 return (
   <div className='art-world'>
       <div id='welcome' className='welcome'>
         <h1 className='title'><span>Welcome</span>to My World!</h1>
         <h1 className='title'>Welcome</h1>
         <p>My Name is <span>Artificial, </span>and I use a nueral style transfer to bend reality</p>
       </div>
       <div id='artificialsWorld' className='outer-div'>
         <div className='top-left inner-div'>
             <h1
             className='sub-title top-left-title'
             onClick={mythicalMeadowsClick}
             >Visit Mythical Meadows</h1>
         </div>
         <div className='top-right inner-div '>
             <h1
             className='sub-title top-right-title'
             onClick={geometricGardens}>Visit Geometric Gardens</h1>
         </div>
         <div className='bottom-left inner-div'>
             <h1
             className='sub-title bottom-left-title'
             onClick={paintedParadise}>Visit Painted Paradise</h1>
         </div>
         <div className='bottom-right inner-div'>
             <h1
             className='sub-title bottom-right-title'
             onClick={popPlanet}>Visit Pop Planet</h1>
         </div>
       </div>
      
      
   </div>
 )
}


export default ArtificialWorld



