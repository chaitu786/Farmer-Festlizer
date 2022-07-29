import { Box, Button, Center, Flex, Heading, Image, Show, Stack, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import "./Farmers.css"
import {FcBiohazard} from "react-icons/fc"
import { useDispatch,useSelector,} from 'react-redux'
import {AiOutlineDelete} from "react-icons/ai"
import {BsBookmarkCheck} from "react-icons/bs"

// import { Get_data } from '../Redux/AppReducer/Action'
import { Summary } from './Summary'

export const Cart = () => {
    // const Product_data=useSelector((state)=>state.Reducer.Products)
    const Product_data=[]
    // const dispatch=useDispatch();
    // useEffect(()=>{
    //     dispatch(Get_data())
    // },[])
    // console.log(Product_data)
  return (
    <>
   <Box>
    <Stack>
        <Center>
        <Box>
            <FcBiohazard fontSize={'100px'}/>
            <Text fontSize={{base:"2xl",md:'3xl',lg:'3xl',xl:'3xl'}} fontStyle={'oblique'} color={{base:"#397ec3",md:"#2cbcbc"}}>Farmer Cart</Text>
        </Box>
        </Center>
        <Flex  flexDirection={'row'}>
        <Box style={{height:'90vh',overflowY:"scroll",}} className="imagescroll">
       
            {
                Product_data?.map((el)=>(
                    <Stack direction={{base:"column",md:"row",lg:'row',xl:'row'}}  width={{base:"sm",md:'auto',lg:'auto',xl:'xl'}}  ml={{base:'1',md:'16',lg:"16",xl:'16'}} mt='5' borderRadius={'20px'} className='MainCartItem'>
                            <Box padding={{base:"8"}}  >
                                <Image src={el.Image} width={{base:"sm",md:"auto",lg:'auto',xl:'auto'}}></Image>
                            </Box>
                <Box padding={{base:"8"}}>
                <Text>{el.Problem}</Text>
                <Text>{el.location}</Text>
                <Box display={'flex'} >
                   <Button leftIcon={<AiOutlineDelete fontSize={'20px'}/>} width={{base:'fit-content',md:"auto"}} overflow={'hidden'}>Delete</Button>
                   <Button leftIcon={<BsBookmarkCheck fontSize={'20px'}/>} w={{base:'fit-content',md:"auto"}} overflow={'hidden'} ml={'10'}>Collections</Button>
                </Box>
            </Box>
               
                    </Stack>
                ))
            }
           
       
       </Box>
        <Box>
        <Summary/>
        </Box>
       </Flex>
      
    </Stack>
   
   </Box>
   <Show breakpoint='(max-width: 500px)'>
  <Box mt={{md:'40'}} ml={'1'} borderRadius={'20px'} width={{base:"sm",md:'md',lg:'lg',xl:'xl'}} className='MainCartItem'>
        <Stack >
            <Stack justifyContent={'center'}>
                <Heading textAlign={'center'} fontSize={'2xl'}>Summary</Heading>
            </Stack>
            <hr/>
             <Stack  direction={'row'} justifyContent={'space-around'}>
                <Text> ITEMS</Text>
                <Text>4</Text>
            </Stack>
            <Stack  direction={'row'} justifyContent={'space-around'}>
                <Text>SubTotal</Text>
                <Text>47768</Text>
            </Stack>
             <Stack  direction={'row'} justifyContent={'space-around'}>
                <Text>Charges</Text>
                <Text>50</Text>
            </Stack>
            <hr></hr>
            <Stack  direction={'row'} justifyContent={'space-around'}>
                <Heading fontSize={'3xl'}>Total</Heading>
                <Heading fontSize={'3xl'}>4000</Heading>
            </Stack>
            <Stack>
                <Button borderRadius={'10px'} color={'black.400'} bg={'whatsapp.400'}>Continue</Button>
            </Stack>
        </Stack>

    </Box>
</Show>
  </>
  )
}
