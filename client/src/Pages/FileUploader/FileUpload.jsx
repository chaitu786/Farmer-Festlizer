import React, { useState } from 'react'
import { useRef } from 'react'
import axios from "axios"

const FileUpload = () => {
    const[data,setData]=useState({})
    const inputFile=useRef()

    const handleSubmit=(e)=>{
        e.preventDefault()
        const formData= new FormData()
        formData.append("Title",data.Title)
        formData.append("Desc",data.Desc)
        formData.append("Category",data.Category)
        formData.append("Image_Url",inputFile.current.files[0])

        axios.post("http://localhost:8080/uploadIssue",formData,{
            headers:{"Content-Type":"multiple/form-data"}
        })
    }
    const handleChange=(e)=>{
        const {name,value}=e.target
        setData({
            ...data,
            [name]:value
        })
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} name="Title" placeholder='Title'/>
            <input type="text" onChange={handleChange} name="Desc" placeholder='Description'/>
            <input type="text" onChange={handleChange} name="Category" placeholder='Category'/>
            <input type="file" ref={inputFile}/>
            <input type="submit" />
        </form>
    </div>
  )
}

export default FileUpload