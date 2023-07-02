import React, { useState } from 'react'
import { useRef } from 'react'
import axios from "axios"
import { Box, Center, FormControl, FormLabel, Heading, Input, Spinner, Stack, Textarea } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { useAlert } from 'react-alert'
import { Upload_Issue } from '../../Redux/AppReducer/Action'
import { useNavigate } from 'react-router-dom'

const FileUpload = () => {
    const[data,setData]=useState({})
    const inputFile=useRef()
    const dispatch=useDispatch()
    const alert=useAlert()
    const navigate = useNavigate()
    const [loading,setLoading] = useState(false)

    const handleSubmit=(e)=>{
        setLoading(true)
        e.preventDefault()
        const formData= new FormData()
        formData.append("Title",data.Title)
        formData.append("Desc",data.Desc)
        formData.append("Category",data.Category)
        formData.append("Image_Url",inputFile.current.files[0])

        dispatch(Upload_Issue(formData,alert,navigate,setLoading))
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
   {loading && (
      <Box
         position="fixed"
         top="0"
         left="0"
         width="100%"
         height="100%"
         zIndex="9999"
         backgroundColor="rgba(0, 0, 0, 0.3)"
      >
         <Spinner
            position="absolute"
            top="50%"
            speed="0.65s"
            emptyColor="gray.300"
            left="50%"
            transform="translate(-50%, -50%)"
            color="#CB3B7D"
            thickness="4px"
            size="xl"
         />
      </Box>
    )}
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
