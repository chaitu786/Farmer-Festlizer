import { Box, Button, Center, Heading, Image, Stack, Text, color } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react'
import "./Farmers.css"
import { AddToCart, Get_All_Data } from '../../Redux/AppReducer/Action'
import { useAlert } from 'react-alert'

export const FarmersData = ({isFarmer,setLoading}) => {
const Products=useSelector((state)=>state.Reducer.Products?.data);
let ProductData = Products ? [...Products].reverse() : []
console.log(ProductData,'alsdjknaksjda');
  const dispatch=useDispatch()
  const alert = useAlert()
  useEffect(()=>{
    dispatch(Get_All_Data(setLoading))
  },[dispatch])
  console.log(ProductData)
  const handleCart=(Id)=>{
    setLoading(true)
    dispatch(AddToCart(Id,alert,setLoading))
  }
  let x = ProductData.filter((el)=>el.Status == true)
  console.log(x,'askjdbasd');
  if(x.length == 0){
    return (
      <Box display={"flex"} alignContent={'center'} justifyContent={'center'}>
        <Box>
          <Heading textAlign={'center'} color={"green"}>No Issues Found As of Now.</Heading>
          <Heading as={"h2"} textAlign={'center'} color={"green"}>Thank You For Visiting.</Heading>
          <Heading as={'h3'} textAlign={'center'} color={"green"}>Visit Later for Issues</Heading>
        </Box>
      </Box>
    )
  }
  return (
   <Center >
    <Box>
       {
        ProductData?.map((el)=>(
            <>
                {
                    el.Status?(
                        <Stack direction={{base:"column",md:'row'}} border={'1px solid black'}
                        width={{base:"sm",md:"md",lg:"lg",xl:"xl"}} mt={'10'}   borderRadius={"20px"} className='MainCartItem'>
                            <Box padding={{base:"8",md:'8'}} w={["100%",'40%']}>
                                <Image src={`https://farmer-backend.onrender.com/static/${el.Image_Url}`}  width={{base:"sm",md:"md",lg:"lg",xl:"xl"}} height={"100%"}/>
                            </Box>
                            <Box padding={{base:"8",md:'10'}} w={["100%",'60%']}>
                                <Text>{el.Title}</Text>
                                <Text>{el.Desc}</Text>
                                <Box>
                                    <ButtonCart Id={el._id} isFarmer={isFarmer} handleCart={handleCart}/>
                                </Box>
                            </Box>
                        </Stack>
                    ):("")
                }
            </>
        ))
       }
    </Box>
   </Center>
  )
}


function ButtonCart({Id, isFarmer, handleCart}){
  return(
    <Box>
        {
            isFarmer?( <Button size={{base:"sm",md:'md',lg:'lg',xl:'xl'}} onClick={()=>handleCart(Id)}>Collect Issue</Button>):("")
        }
    </Box>
  )
}
