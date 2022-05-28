import {FormHelperText,FormControl,FormLabel,RadioGroup,FormControlLabel,Radio} from '@mui/material'
import React, { useState } from 'react'
import Button from '../../Button/Button'
import Input from './Input/Input'
import Success from '../../SuccessRegistartion/Success'

import {useForm} from "react-hook-form"
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import InputFile from '../../InputFile/InputFile'



const schema = yup.object().shape({
    name:yup
        .string()
        .min(2)
        .max(60)
        .required("Name is a required field"),
    email:yup
        .string()
        .email("Email should have correct format")
        .required("Email is a required field"),
    phone:yup
        .string()
        .matches(/^\+380\d{3}\d{2}\d{2}\d{2}$/)
        .required("Phone number is a required field"),
    position_id:yup
        .number()
        .required("Position number is a required field"),
})




const Form = ({position,postUser,getFirstPage}) => {

    const [photo,setPhoto] = useState('');
    const [isSuccess,setIsSuccess] = useState(false)
    
    const {register,handleSubmit,formState:{ errors,isValid },reset} = useForm({
        mode:"onBlur",
        resolver:yupResolver(schema),
    });
    
    const maxPhotoSize = 5242880;

    const onSubmit = async(info) => {
        try {
            const restInfo = {...info,photo:photo[0]}
            const res = await postUser(restInfo)
            
            if(res.status === 201){
                reset()
                setIsSuccess(true)
                getFirstPage()
                setTimeout(()=>{
                    setIsSuccess(false)
                },2000)
            }          
        } catch (error) {
            console.log(error)
        }
    };

   

  return (
    <div className='form-container'>
        <div className='title'>
            <h2 className='title__text'> Working with POST request </h2>
        </div>
        
        {
        isSuccess
            ?<Success/>
            :<form 
        name='myForm'
        onSubmit={handleSubmit(onSubmit)}
        className='form'
        noValidate
        autoComplete='off'>
        <FormControl
            className='form__element'>
                <Input 
                    {...register('name')}
                    id='name'
                    label='Your name'
                    variant="outlined"
                    placeholder='Your name'
                    error={!!errors.name}
                    helperText={errors?.name?.message}
                />
        </FormControl>
        <FormControl
            className='form__element'>
                <Input 
                    {...register('email')}
                    id='email'
                    label='Email'
                    variant="outlined"
                    placeholder='Email'
                    error={!!errors.email}
                    helperText={errors?.email?.message}
                /> 
                
        </FormControl>
            
        <FormControl
                className='form__element'>
                <Input 
                    {...register('phone')}
                    id='phone'
                    label='Phone'
                    variant="outlined"
                    placeholder='Phone'
                    error={!!errors.phone}
                    helperText={errors.phoneNumber ?errors.phoneNumber.message  :'+38 (XXX) XXX - XX - XX'}
                   /> 
                
        </FormControl>
        <FormControl
         className='form__element form__element-radio'
         error={!!errors.position_id}>
            <FormLabel id="demo-radio-buttons-group-label">Position</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                defaultValue={'Lawyer'}
            >
                { position && position.map((el)=>
                    <FormControlLabel key={el.id} value={Number(el.id)} control={<Radio {...register('position_id')} />} label={el.name} />
                )}
            
            </RadioGroup>
            </FormControl>
            
            <FormControl className='form__element'>
            <InputFile helperText='error' setPhoto={setPhoto} photo={photo[0]}/>
            {photo.length && photo[0].size > maxPhotoSize
                ?<FormHelperText error={true}>Photo size must be smaller than 5MB</FormHelperText>
                :''}
        </FormControl>   
            
            

    
        <FormControl className='form__element form__element-button'>
           <Button 
           isDisabled={
               !isValid || !photo || !photo.length || photo[0].size > maxPhotoSize
                    ?true
                    :false
           }
            >Sign up
           </Button>
        </FormControl>

        

        
        </form>}
    </div>

  )
}

export default Form