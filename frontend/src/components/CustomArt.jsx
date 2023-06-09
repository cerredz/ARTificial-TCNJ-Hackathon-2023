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
               <span  className='box first one'></span>
               <span className='symbol'>+</span>
               <span style={{background: `${props.image1}`, backgroundSize:`cover`, backgroundPosition:`center`, backgroundRepeat: `no-repeat`}} className='box two'></span>
               <span className='symbol'>=</span>
               <span style={{background: `${props.image5}`, backgroundSize:`cover`, backgroundPosition:`center`, backgroundRepeat: `no-repeat`}} className='box three'></span>
           </div>


       </div>
       <div style={{background: `url(${middleContainerImage})`, border: `5px solid black`}} className='middle-container'>
           <div className='row-images shift-up'>
               <span  className='box second four'></span>
               <span className='symbol'>+</span>
               <span style={{background: `${props.image2}`, backgroundSize:`cover`, backgroundPosition:`center`, backgroundRepeat: `no-repeat`}} className='box five'></span>
               <span className='symbol'>=</span>
               <span style={{background: `${props.image6}`, backgroundSize:`cover`, backgroundPosition:`center`, backgroundRepeat: `no-repeat`}} className='box six'></span>
           </div>
       </div>
       <div style={{background: `url(${bottomContainerImage})`}} className='bottom-container'>
           <div className='row-images double-shift-up'>
               <span  className='box third seven'></span>
               <span className='symbol'>+</span>
               <span style={{background: `${props.image3}`, backgroundSize:`cover`, backgroundPosition:`center`, backgroundRepeat: `no-repeat`}} className='box eight'></span>
               <span className='symbol'>=</span>
               <span style={{background: `${props.image7}`, backgroundSize:`cover`, backgroundPosition:`center`, backgroundRepeat: `no-repeat`}} className='box nine'></span>
           </div>


           <div className='row-images last-shift-up'>
               <span  className='box fourth ten'></span>
               <span className='symbol'>+</span>
               <span style={{background: `${props.image4}`, backgroundSize:`cover`, backgroundPosition:`center`, backgroundRepeat: `no-repeat`}} className='box eleven'></span>
               <span className='symbol'>=</span>
               <span style={{background: `${props.image8}`, backgroundSize:`cover`, backgroundPosition:`center`, backgroundRepeat: `no-repeat`}} className='box twelve'></span>
           </div>
       </div>
   </div>
 )
}


export default CustomArt



