//import axios from 'axios'
import React, { useState } from 'react'
import photoContext from './photoContext'
import downloadimg from  './download.jpg'

const PhotoState = (props) => {
  const [location, setLocation]=useState(null)
    const images=[{id:0,imgdata:downloadimg, location},
        {id:1,imgdata:downloadimg, location},
        {id:2,imgdata:downloadimg, location},
        {id:3,imgdata:downloadimg, location}]
    const [photos,setPhotos]=useState(images);
    const [isPhotosLoading, setIsPhotosLoading]=useState(true)
   
    
    

  return (
    <photoContext.Provider value={{photos, setPhotos, isPhotosLoading, setIsPhotosLoading, location, setLocation}}>
      {props.children}
    </photoContext.Provider>
  )
}

export default PhotoState