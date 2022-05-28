import React from 'react'

const Button = ({children,width ='100px',height ='34px',getUsers,typeClass='button',isDisabled = false}) => {
  return (
    <button 
    className={typeClass}
    style={{width,height}}
    onClick={getUsers}
    disabled={isDisabled}
    >
      {children}
    </button>
  )
}

export default Button