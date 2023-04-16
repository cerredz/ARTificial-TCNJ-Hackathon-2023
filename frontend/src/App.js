import React, {useState, useEffect} from 'react';

import {Navbar, ArtificialWorld, CustomArt, MinimizedNavbar, UserArt} from "./components/components"
const App = (props) => {

    
   const [homePage, setHomePage] = useState(true);
   const [customArt, setCustomArt] = useState(false);
   const [currentThemePark, setCurrentThemePark] = useState('');
   const [topImage, setTopImage] = useState('');
   const [middleImage, setMiddleImage] = useState('');
   const [bottomImage, setBottomImage] = useState('');
   const [titleColor, setTitleColor] = useState('')
   const [titleFont, setTitleFont] = useState('')
   const [activeNavIndex, setActiveNavIndex] = useState(1);
   const [image1, setImage1] = useState('');
   const [image2, setImage2] = useState('');
   const [image3, setImage3] = useState('');
   const [image4, setImage4] = useState('');
   const [image5, setImage5] = useState('');
   const [image6, setImage6] = useState('');
   const [image7, setImage7] = useState('');
   const [image8, setImage8] = useState('');
   const [imgPath, setImgPath] = useState('')
   const [img2Path, setImg2Path] = useState('')

   


   const handleMythicalMeadowsClick = () => {
     setHomePage(false);
     setCustomArt(true);
     setCurrentThemePark("Mythical Meadows");
     setTopImage('./images/topcontainer.jpg')
     setTitleColor("#ff0000");
     setTitleFont("Fantasy");
     setImage1("url(./images/fantasy1.png)")
     setImage5("url(./images/NYC+fantasy1.png)")
     setImage2("url(./images/fantasy3.png)")
     setImage6("url(./images/etower+fantasy3.png)")
     setImage3("url(./images/fantasy2.png)")
     setImage7("url(./images/tcnj+fantasy2.png)")
     setImage4("url(./images/fantasy4.png")
     setImage8("url(./images/thall+fantasy4.png)")
     setTopImage("./images/tree.png")
     setMiddleImage("./images/wind.png")
     setBottomImage("./images/bottomfantasy.jpg")
   }


   const handleGeometricGardensClick = () => {
     setHomePage(false);
     setCustomArt(true);
     setCurrentThemePark("Geometric Gardens");
     setTitleColor("#a611e1");
     setTitleFont("Cubism");
     setImage1("url(./images/cubism3.png)");
     setImage2("url(./images/cubism2.png)");
     setImage3("url(./images/cubism4.png)");
     setImage4("url(./images/cubism1.png)");
     setImage5("url(./images/NYC+cubism3.png)");
     setImage6("url(./images/etower+cubism3.png)");
     setImage7("url(./images/tcnj+cubism4.png)");
     setImage8("url(./images/thall+cubism1.png)");
     setTopImage("./images/bottomcub.jpg")
     setMiddleImage("./images/middlecub.png")
     setBottomImage("./images/bottomcub2.png")
     
   }


   const handlePaintedParadiseClick = () => {
     setHomePage(false);
     setCustomArt(true);
     setCurrentThemePark("Painted Paradise")
     setTitleColor("#2412e7");
     setTitleFont("Impressionism");
     setImage1("url(./images/imp3.png)");
     setImage2("url(./images/imp4.png)");
     setImage3("url(./images/imp1.jpg)");
     setImage4("url(./images/imp2.png)");
     setImage5("url(./images/NYC+imp3.png)");
     setImage6("url(./images/etower+imp4.png)");
     setImage7("url(./images/tcnj+imp1.png)");
     setImage8("url(./images/thall+imp2.png)");
     setTopImage("./images/topimp.jpg")
     setMiddleImage("./images/middleimp.jpg")
     setBottomImage("./images/bottomimp.jpg")
   }


   const handlePopPlanetClick = () => {
     setHomePage(false);
     setCustomArt(true);
     setCurrentThemePark("Pop Planet")
     setTitleColor("#e510be")
     setTitleFont("Pop-Art");
     setImage1("url(./images/pop3.png)");
     setImage2("url(./images/pop2.png)");
     setImage3("url(./images/pop4.png)");
     setImage4("url(./images/pop1.png)");
     setImage5("url(./images/NYC+pop3.png)");
     setImage6("url(./images/etower+pop2.png)");
     setImage7("url(./images/tcnj+pop4.png)");
     setImage8("url(./images/thall+pop1.png)");
     setTopImage("./images/toppop.jpg")
     setMiddleImage("./images/middlepop.jpg")
     setBottomImage("./images/bottompop.jpg")
   }


   const handleHomeClick = () => {
     setHomePage(true);
     setCustomArt(false);
     setActiveNavIndex(1);
      setTimeout(() => {
        window.scrollTo(0,0)
      },300)
   }


   const navArtWorldClick = () => {
    
     const target = document.getElementById('artificialsWorld');
     target.scrollIntoView({behavior: `smooth`});
     setActiveNavIndex(2);
   }


   const navHomeClick = () => {
    
     const target = document.getElementById('welcome');
     target.scrollIntoView({behavior: `smooth`});
     setActiveNavIndex(1);


   }


   const navCustomArtClick = () => {


     const target = document.getElementById('user-art');
     target.scrollIntoView({behavior: `smooth`});
       setActiveNavIndex(3);
   }


   const handleCustomArtClick = () => {
     setHomePage(true);
     setCustomArt(false);
     setTimeout(() => {
       const target = document.getElementById('user-art');
       target.scrollIntoView({behavior: `smooth`});


     }, 500)
     setActiveNavIndex(3);
    
   }

   const handlePicture1 = (url) => {
    setImgPath(url)
   }

   const handlePicture2 = (url2) => {
    setImg2Path(url2)
   }
  


   useEffect( () => {
     window.scrollTo(0,0);
   }, [homePage, customArt])


 return (
   <div>
     {homePage && (
       <div>
          
           <Navbar
           homeClick={navHomeClick}
           artWorldClick={navArtWorldClick}
           customArtClick={navCustomArtClick}
           activeNavIndex={activeNavIndex}
           />
           <ArtificialWorld
             mythicalMeadowsClick={handleMythicalMeadowsClick}
             geometricGardensClick={handleGeometricGardensClick}
             paintedParadiseClick={handlePaintedParadiseClick}
             popPlanetClick={handlePopPlanetClick}
            
            
           />
           <UserArt 
            img1Path={imgPath}
            img2Path={img2Path}
            handlePicture1={handlePicture1}
            handlePicture2={handlePicture2}
           />
       </div>
     )}


     {customArt && (
       <div>
         <MinimizedNavbar
         homeClick={handleHomeClick}
         customArtClick={handleCustomArtClick}
        
         />
         <CustomArt
         themePark={currentThemePark}
         topContainerImage={topImage}
         middleContainerImage={middleImage}
         bottomContainerImage={bottomImage}
         titleColor={titleColor}
         titleFont={titleFont}
         image1={image1}
         image2={image2}
         image3={image3}
         image4={image4}
         image5={image5}
         image6={image6}
         image7={image7}
         image8={image8}
        
         />
        
       </div>
     )}
     
   </div>
 )
}


export default App



