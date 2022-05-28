import React from 'react'
import field from '../../../libs/image/field.png'
import Button from '../../Button/Button'

const FirstBlock = () => {
  return (
    <div className='firstBlock'>
        <img className='fieldPhoto' src={field} alt="" />
        <div className='descriptionBlock'>
            <div className='textBlock'>
                <h3 className='descriptionBlock__title'>Test assignment for front-end developer</h3>
                <p className='descriptionBlock__subtitle'>What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</p>
            </div>
            <Button>Sign up</Button>
        </div>
    </div>
  )
}

export default FirstBlock