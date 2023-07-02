import { AspectRatio, Box, Button, Center, Flex, Heading, Image, Show, Spinner, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import "../../Components/Home/Farmers.css"
import {FcBiohazard} from "react-icons/fc"
import { useDispatch,useSelector,} from 'react-redux'
import {AiOutlineDelete} from "react-icons/ai"
import {BsBookmarkCheck} from "react-icons/bs"
import { Get_Cart_Data,Delete_Cart,PermenentDelete_Cart } from '../../Redux/AppReducer/Action'
import { useAlert } from 'react-alert'

export const Cart = () => {
    const Cart_Data=useSelector((state)=>state.Reducer.Cart)
    const alert = useAlert()
    const [loading,setLoading] = useState(true)

    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(Get_Cart_Data(setLoading))
    },[dispatch])

    const handleCompleted=(Id)=>{
        setLoading(true)
        dispatch(Delete_Cart(Id,alert,setLoading))
    }

    const handleDelete=(Id)=>{
        setLoading(true)
        dispatch(PermenentDelete_Cart(Id,alert,setLoading))
    }
    console.log(Cart_Data,"ji")
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
   <Box mt={{md:'24'}}>
    <Stack>
        <Center>
        <Box>
            <FcBiohazard fontSize={'100'}/>
            <Text fontSize={{base:"2xl",md:'3xl',lg:'3xl',xl:'3xl'}} fontStyle={'oblique'} color={{base:"#397ec3",md:"#2cbcbc"}}>Farmer Cart</Text>
        </Box>
        </Center>
        <Flex  flexDirection={{base:'column',md:'row'}}>
        <Box style={{height:'90vh',overflowY:"scroll",}} className="imagescroll">
       
            {
                Cart_Data?.map((el)=>(
                    <Stack direction={{base:"column",md:"row",lg:'row',xl:'row'}}  width={{base:"sm",md:'auto',lg:'auto',xl:'xl'}}  ml={{base:'1',md:'16',lg:"16",xl:'16'}} mt='5' borderRadius={'20px'} className='MainCartItem'>
                        <Box padding={{base:"8"}}  >
                            <Image src={`https://farmer-backend.onrender.com/static/${el.Image_Url}`} width={{base:"sm",md:"auto",lg:'auto',xl:'auto'}}></Image>
                        </Box>
                        <Box padding={{base:"8"}}>
                        <Text>{el.Title}</Text>
                        <Text>{el.Desc}</Text>
                        <Box display={'flex'} >
                        <Button onClick={()=>handleDelete(el._id)} leftIcon={<AiOutlineDelete fontSize={'20px'}/>} width={{base:'fit-content',md:"auto"}} overflow={'hidden'}>Delete</Button>
                        <Button onClick={()=>handleCompleted(el._id)} leftIcon={<BsBookmarkCheck fontSize={'20px'}/>} w={{base:'fit-content',md:"auto"}} overflow={'hidden'} ml={'10'}>Completed ?</Button>
                        </Box>
                        </Box>
               
                    </Stack>
                ))
            }
       </Box>
       <Box ml={{md:'28'}} mt={{base:'10',md:'12'}}>
        <Center>
             <iframe width={{base:'sm',md:'md',lg:'lg',xl:'xl'}} height="315" src="https://www.youtube.com/embed/2ilvok75Tqs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Center>
       </Box>
       </Flex>
       
    </Stack>
   </Box>
   
  </>
  )
}
