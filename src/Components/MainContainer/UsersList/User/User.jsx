import React from 'react'


const User = ({name,email,phone,position,photo,plug}) => {
  return (
    <div className='user-card'>
        <img className='user-card__avatar' src={!photo ?plug :photo} alt="avatar" />
        <p className='user-card__name tooltip' data-text={name}>
            <span>{name}</span>
        </p>
        <div className='user-info'>
            <div className='tooltip' data-text={position}>
                <span>{position}</span>
            </div>
            <div className='tooltip' data-text={email}>
                <span >{email}</span>
            </div>
            <div>
                <span>{phone}</span>
            </div>
        </div>
    </div>
  )
}

export default User