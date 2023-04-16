

import React, {useState, useEffect} from 'react'




const UserArt = (props) => {


 const [imageDataUrl1, setImageDataUrl1] = useState('');
 const [imageDataUrl2, setImageDataUrl2] = useState('');
 const [finalImage, setFinalImage] = useState('')
 const [userInput, setUserInput] = useState(false)
 


 const [image1Url, setImage1Url] = useState(props.imgPath1);
 const [image2Url, setImage2Url] = useState(props.imgPath2);


 function handleFileInputChange(event) {
   const file = event.target.files[0];
   setImage1Url(file.name) // prints the name of the file
   props.handlePicture1(image1Url)
   const reader = new FileReader();
   reader.onloadend = () => {
     setImageDataUrl1(reader.result);
   }
   reader.readAsDataURL(file);
 }


function handleFileInputChange2(event) {
   const file = event.target.files[0];
   setImage2Url(file.name)
   setImageDataUrl2(file.name)
   props.handlePicture2(image2Url)
   const reader = new FileReader();
   reader.onloadend = () => {
       setImageDataUrl2(reader.result);
     }
   reader.readAsDataURL(file);
 }


 const uploadImage = () => {
    if(userInput === false){
        setUserInput(true)
    }else {
        setTimeout(() => {
            setUserInput(false);
        }, 30000)
    }
   fetch(`http://localhost:5000/calculate/${image1Url}/${image2Url}`)
     .then(response => response.json())
     .then(data => console.log(data))
     .catch(error => console.log(error));
 };

 

useEffect(() => {
    setFinalImage("./images/custom.jpg")
    const target = document.getElementById('user-art');
    target.scrollIntoView({ behavior: 'smooth' });
  }, [userInput]);


 





 return (
   <div id='user-art' className='user-art-container '>
     <h1 className='title'>Create Your Own Art</h1>
     <div className='row-images'>

            {userInput && (
        <>
            <input type="file" accept="image/*" onChange={handleFileInputChange} />
            {imageDataUrl1 && (
            <div>
                <img className="img" src={imageDataUrl1} alt="Uploaded Image" />
            </div>
            )}
            <span>+</span>
            <input type="file" accept="image/*" onChange={handleFileInputChange2} />
            {imageDataUrl2 && (
            <div>
                <img className="img" src={imageDataUrl2} alt="Uploaded Image" />
            </div>
            )}
            <span>=</span>
        </>
        )}

        {!userInput && (
            <span id='generate' style={{background: `url(./images/custom.jpg)`}} className='final-image'></span>
        )}

       
         
         
        
     </div>
     <div className='button-container'>
       <button  type='text'  onClick={uploadImage}className='generate-btn'>Generate</button>
     </div>
   </div>
 )
}


export default UserArt

