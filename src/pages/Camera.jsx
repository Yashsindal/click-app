import React, {useRef, useEffect, useState, useContext} from 'react'
import photoContext from '../context/photos/photoContext';


const Camera = () => {
const videoRef = useRef(null);
const photoRef = useRef(null);

const [hasPhoto, setHasPhoto] = useState(false);

const {photos, setPhotos, location}=useContext(photoContext);


//console.log("hasPhoto=",hasPhoto)
const getVideo=()=>{
        navigator.mediaDevices
        .getUserMedia({
            video : { width:1920, height:1080 }
        })
        .then(stream =>{
            let video = videoRef.current;
            video.srcObject = stream;
            video.play()
        })
        .catch(err =>{
            console.error(err);
        })
}

const takePhoto=()=>{
        //setting height and width of photo
        const width = 414;
        const height = width / (16/9);

        //getting current value of video and photo ref(canvas)
        let video = videoRef.current;
        let photo = photoRef.current;
        photo.width=width;
        photo.height = height;

        //drawing the context on canvas 
        let ctx = photo.getContext('2d');
        //console.log("photo=",photo)
        //console.log("ctx=",ctx)
        ctx.drawImage(video, 0, 0,width, height);

        //converting canvas to dataURL (its a type to store encoded file)
        let pic=photo.toDataURL("image/jpg");
        //console.log("pic=",pic)

        //adding the clicked photo into client state
        setPhotos((prev)=>{return [...prev,{imgdata:pic, location:location}]})

        //saving the clicked photo into database

        setHasPhoto(true);
}

const closePhoto = ()=>{
        let photo = photoRef.current;
        let ctx= photo.getContext('2d');
        ctx.clearRect(0,0,photo.width, photo.height);
        setHasPhoto(false);
}

useEffect( ()=>{
        getVideo()
        },[videoRef]
)

  return (
    <div className="cameraContainer">
        <div className='camera'>
                <video ref={videoRef}></video>  
        </div>
        <div className='camera-label'>
            <i className="fa-regular fa-circle-dot" onClick={takePhoto}></i>
        </div>
       
        <span onClick={closePhoto} className="close" style={!(hasPhoto)?{display:"none"}:{}} >&times;</span>
          
        <canvas ref={photoRef} className="canvas-content" style={!(hasPhoto)?{display:"none"}:{}}></canvas>          
          
    </div>
  )
}

export default Camera
