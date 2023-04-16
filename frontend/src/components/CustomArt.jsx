import React, {useState} from 'react'


const CustomArt = (props) => {


   const [topContainerImage, setTopContainerImage] = useState(props.topContainerImage);
   const [middleContainerImage, setMiddleContainerImage] = useState(props.middleContainerImage);
   const [bottomContainerImage, setBottomContainerImage] = useState(props.bottomContainerImage);
   const [titleColor, setTitleColor] = useState(props.titleColor);
   const [titleFont, setTitleFont] = useState(props.titleFont);


  
 return (
   <div className='custom-art-container'>
      
       <div style={{background: `url(${topContainerImage})`}} className='top-container'>
           <h1 className='top-title' >Welcome to</h1>
           <h1 style={{color: `${titleColor}`, fontFamily: `${titleFont}`}} className='bottom-title'>{props.themePark}</h1>
           <div className='row-images'>
               <span  className='box first'></span>
               <span className='symbol'>+</span>
               <span style={{background: `${props.image1}`, backgroundSize:`cover`, backgroundPosition:`center`, backgroundRepeat: `no-repeat`}} className='box '></span>
               <span className='symbol'>=</span>
               <span style={{background: `${props.image5}`, backgroundSize:`cover`, backgroundPosition:`center`, backgroundRepeat: `no-repeat`}} className='box'></span>
           </div>


       </div>
       <div style={{background: `url(${middleContainerImage})`, border: `5px solid black`}} className='middle-container'>
           <div className='row-images shift-up'>
               <span  className='box second'></span>
               <span className='symbol'>+</span>
               <span style={{background: `${props.image2}`, backgroundSize:`cover`, backgroundPosition:`center`, backgroundRepeat: `no-repeat`}} className='box'></span>
               <span className='symbol'>=</span>
               <span style={{background: `${props.image6}`, backgroundSize:`cover`, backgroundPosition:`center`, backgroundRepeat: `no-repeat`}} className='box'></span>
           </div>
       </div>
       <div style={{background: `url(${bottomContainerImage})`}} className='bottom-container'>
           <div className='row-images double-shift-up'>
               <span  className='box third'></span>
               <span className='symbol'>+</span>
               <span style={{background: `${props.image3}`, backgroundSize:`cover`, backgroundPosition:`center`, backgroundRepeat: `no-repeat`}} className='box'></span>
               <span className='symbol'>=</span>
               <span style={{background: `${props.image7}`, backgroundSize:`cover`, backgroundPosition:`center`, backgroundRepeat: `no-repeat`}} className='box'></span>
           </div>


           <div className='row-images last-shift-up'>
               <span  className='box fourth'></span>
               <span className='symbol'>+</span>
               <span style={{background: `${props.image4}`, backgroundSize:`cover`, backgroundPosition:`center`, backgroundRepeat: `no-repeat`}} className='box'></span>
               <span className='symbol'>=</span>
               <span style={{background: `${props.image8}`, backgroundSize:`cover`, backgroundPosition:`center`, backgroundRepeat: `no-repeat`}} className='box'></span>
           </div>
       </div>
   </div>
 )
}


export default CustomArt



