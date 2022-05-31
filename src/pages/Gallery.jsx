import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import PhotoGrid from '../components/PhotoGrid/PhotoGrid'
import photoContext from '../context/photos/photoContext'

const Gallery = () => {
  return (
    <div className='gallery my-3'>
      <PhotoGrid/>
      <Link to='/camera'>
      <i class="fas fa-camera plus-float"></i>
      </Link>
    </div>
  )
}

export default Gallery
