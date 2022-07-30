import React, { useState } from 'react'
import { useRef } from 'react'
import axios from "axios"
import { Box, Center, FormControl, FormLabel, Heading, Input, Stack, Textarea } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { useAlert } from 'react-alert'
import { Upload_Issue } from '../../Redux/AppReducer/Action'

const FileUpload = () => {
    const[data,setData]=useState({})
    const inputFile=useRef()
    const dispatch=useDispatch()
    const alert=useAlert()

    const handleSubmit=(e)=>{
        e.preventDefault()
        const formData= new FormData()
        formData.append("Title",data.Title)
        formData.append("Desc",data.Desc)
        formData.append("Category",data.Category)
        formData.append("Image_Url",inputFile.current.files[0])

        dispatch(Upload_Issue(formData,alert))
        // axios.post("http://localhost:8080/uploadIssue",formData,{
        //     headers:{"Content-Type":"multiple/form-data"}
        // })
    }
    const handleChange=(e)=>{
        const {name,value}=e.target
        setData({
            ...data,
            [name]:value
        })
    }
  return (
   
   <>
   <Heading textAlign={'center'} fontSize={{base:"2xl",md:'3xl'}} mt={'24'}>Farmer Details Upload</Heading>
   <Center>
   <Box  width={{base:"2xl",md:"3xl",lg:'4xl',xl:'5xl'}} p={{base:"10"}}>
<FormControl  isRequired>
  <FormLabel fontSize={{base:'sm',md:'md',lg:'lg',xl:"xl"}}>Title</FormLabel>
  <Input placeholder='Title...' type="text" onChange={handleChange} name="Title" isInvalid
    errorBorderColor='#808080'/>
  <hr style={{marginTop:'2%'}}/>
   <FormLabel fontSize={{base:'sm',md:'md',lg:'lg',xl:"xl"}}>Description</FormLabel>
  <Textarea placeholder='Desc....' type="text" onChange={handleChange} name="Desc"isInvalid
    errorBorderColor='#808080'/>
   <hr style={{marginTop:'2%'}}/>
   <FormLabel fontSize={{base:'sm',md:'md',lg:'lg',xl:"xl"}}>Category</FormLabel>
  <Input placeholder='Category...' type="text" onChange={handleChange} name="Category" isInvalid
    errorBorderColor='#808080'/>
   <hr style={{marginTop:'2%'}}/>
   <FormLabel fontSize={{base:'sm',md:'md',lg:'lg',xl:"xl"}} >File Upload</FormLabel>
  <Input  type="file" ref={inputFile} isInvalid
    errorBorderColor='#808080' />
   <hr style={{marginTop:'2%'}}/>
   <Input type='submit' bg={'brown'} color={'white'} fontSize={'2xl'} onClick={handleSubmit}/>
</FormControl>
</Box>
</Center>
  
   </>
  )
}
export default FileUpload
