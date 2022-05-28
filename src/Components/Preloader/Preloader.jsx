import React from 'react'
import preloader from '../../libs/image/Preloader.png'

const Preloader = () => {
  return (
    <div className='preloader' >
        <img className='preloader-bounce'src={preloader} alt="" />
    </div>
  )
}

export default Preloader