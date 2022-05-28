import React,{useRef} from 'react'
import './InputFile.scss'

const InputFile = ({photo,setPhoto}) => {

    const inputRef = useRef()


    const clickToInput = () =>{
        inputRef.current.click()
    }

    const getFilesWithInput = (e) => {
        setPhoto(e.target.files)
        
    }

  return (
     <div className='inputFileContainer'> 
    <button onClick={clickToInput} 
            className='inputLabel' 
            htmlFor="raised-button-file"
            type='button'
            >
        Upload
    </button> 
    <input
        ref={inputRef}
        onChange={getFilesWithInput}
        accept=".jpg,.jpeg"
        style={{ display: 'none' }}
        id="raised-button-file"
        multiple
        type="file"
/>  
    <input 
        className='inputText' 
        type="text" 
        placeholder={photo ?photo.name :'Upload your photo' }
        disabled 
        />
    

    </div>
  )
}

export default InputFile