import React from 'react';
import'./Success.scss';
import successImg from '../../libs/image/success.png'

const Success = () => {
  return (
    <div className='success-registartion'>
        <img className='success-registartion__img' src={successImg} alt="" />
    </div>
  )
}

export default Success