import React,{useContext} from 'react'
import './photogrid.css'
//import downloadimg from './download.jpg'
import photoContext from '../../context/photos/photoContext'


const PhotoGrid = () => {
  const {photos,setPhotos,isPhotosLoading, setIsPhotosLoading}=useContext(photoContext);
  //console.log("photos:",photos)
 
  return (
   <div className='grid-container'>
      {
          photos.map(image => 
          <div className='image-card'>
            <img className="image" src={image.imgdata} alt="img"/>
            {image.location &&
            <div className='location-tag'>
                <div>{image.location.longitude}x{image.location.latitude}</div>
            </div>}
            </div>)
        }    
   </div>
  )
}

export default PhotoGrid
