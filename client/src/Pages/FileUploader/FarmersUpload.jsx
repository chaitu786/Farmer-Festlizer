import { Box, Button, Center, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react'
import { Get_data } from '../../Redux/AppReducer/Action'
import "./Farmers.css"

export const FarmersUpload = () => {
    const ProductData=useSelector((state)=>state.Reducer.Products?.data);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(Get_data())
    },[dispatch])
console.log(ProductData)
  return (
   <Center>
    <Box>
       {
        ProductData?.map((el)=>(
            <>
            <Stack direction={{base:"column",md:'row'}} border={'1px solid black'}
            width={{base:"sm",md:"md",lg:"lg",xl:"xl"}} mt={'10'}   borderRadius={"20px"} className='MainCartItem'>
            <Box padding={{base:"8",md:'8'}}>
                <Image src={el.Image_Url}  width={{base:"sm",md:"md",lg:"lg",xl:"xl"}}/>
            </Box>
            <Box padding={{base:"8",md:'10'}}>
                <Text>{el.Title}</Text>
                <Text>{el.Desc}</Text>
                <Box>
                    <ButtonCart/>
                </Box>
            </Box>
            </Stack>
            </>
        ))
       }
    </Box>
   </Center>
  )
}


function ButtonCart(){
  return <Button size={{base:"sm",md:'md',lg:'lg',xl:'xl'}}>ADD TO CART</Button>
}