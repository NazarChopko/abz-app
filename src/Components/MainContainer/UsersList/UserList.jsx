import React from 'react'
import Button from '../../Button/Button'
import User from './User/User'
import plug from '../../../libs/image/plug.png'
import Preloader from '../../Preloader/Preloader'

const UserList = ({users,isNextPage,getUsers}) => {
  
  return (
    <div className='users-container'>
         
        
        <h2 className='users-container__title'>Working with GET request</h2>
         <div className='users-container__list'>
            {!users.length ?<Preloader/> :users.map((user)=><User key={user.id} {...user} plug={plug}/>)    
                 }
         </div>
        
        {
        !isNextPage 
          ?null 
          :<div className='users-container__button'><Button getUsers={getUsers} width={'120px'}>Show more</Button></div>
        }
    </div>
  )
}

export default UserList