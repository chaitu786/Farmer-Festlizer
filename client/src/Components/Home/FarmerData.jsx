import { Box, Button, Center, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react'
import "./Farmers.css"
import { AddToCart, Get_All_Data } from '../../Redux/AppReducer/Action'
import { useAlert } from 'react-alert'

export const FarmersData = ({isFarmer}) => {
const ProductData=useSelector((state)=>state.Reducer.Products?.data);
  const dispatch=useDispatch()
  const alert = useAlert()
  useEffect(()=>{
    dispatch(Get_All_Data())
  },[dispatch])
  console.log(ProductData)
  const handleCart=(Id)=>{
    dispatch(AddToCart(Id,alert))
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
                            <Box padding={{base:"8",md:'8'}}>
                                <Image src={`http://localhost:8080/static/${el.Image_Url}`}  width={{base:"sm",md:"md",lg:"lg",xl:"xl"}}/>
                            </Box>
                            <Box padding={{base:"8",md:'10'}}>
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