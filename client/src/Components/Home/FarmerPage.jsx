import { Image, Input, useFocusEffect, } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {FcBiohazard} from "react-icons/fc"
import {FcSearch} from "react-icons/fc"

import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
  Hide,
  Show
} from '@chakra-ui/react';
import "./Farmers.css"
import { FarmersData } from './FarmerData';
import { FarmersSchemes } from './FarmerSchemes';
import { Logout } from '../../Redux/AppReducer/Action';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const FarmerPage = () => {
    const [isLogin,setIsLogin]=useState(false)
    const [farmer,setisFarmer]=useState(false)
    const User=localStorage.getItem("user")?.split(",")||["","",""]
    const login=localStorage.getItem("isLogin")
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const handleLogout=()=>{
      console.log(1);
      dispatch(Logout())
    }
    const handleLogin=()=>{
      navigate("/login")
    }
    useEffect(()=>{
        if(login==="true"){
            setIsLogin(true)
        }
        if(User[3]==="Seller"){
            setisFarmer(true)
        }
    },[])

  return (
    <>
    <Box display={'flex'} mt={{md:'24'}}>
      <Box >
<Stack direction={'row'} mt={'10'} ml={{base:"5"}}>
    <FcBiohazard fontSize={'40px'}/>
      <Input placeholder='Explore' width={{base:"64",md:'64',lg:'64',xl:'64'}} / > 
        <FcSearch fontSize={'40px'}/>  
</Stack> 
<SocialProfileSimple name={User[0]} name1={User[1]} number={User[2]} role={User[3]} isLogin={isLogin} isFormer={farmer} handleLogout={handleLogout} handleLogin={handleLogin}/>
</Box>
<Box mt={{base:'32',md:'10',lg:"10",xl:'10'}} ml={{base:'-350px',md:"10",lg:'10',xl:'10'}} style={{height:'100vh',overflowY:"scroll"}} className="imagescroll">
<FarmersData isFarmer={farmer}/>
</Box>
<Show above='sm'>
<Box >
  <FarmersSchemes/>
</Box>
</Show>
</Box>
</>
  )
}

 function SocialProfileSimple({name,name1,number, role, isLogin, handleLogout, handleLogin }) {
    console.log(name,"find");
  return (
    <>
    <Show above='sm'>
    <Center justifyContent={"left"} ml={{base:"5",md:"10",lg:"10",xl:"10"}} mt={'5'}>
      <Box
        maxW={'320px'}
        w={{base:"sm",md:"md",lg:"lg",xl:'xl'}}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={{base:"base",md:"md",lg:"lg",xl:'xl'}}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
        <Avatar
          size={{base:'sm',md:'md',lg:'lg',xl:'xl'}}
          src={
            ' '
          }
          alt={'Avatar Alt'}
          mb={4}
          pos={'relative'}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: 'green.300',
            border: '2px solid white',
            rounded: 'full',
            pos: 'absolute',
            bottom: 0,
            right: 3,
          }}
        />
        <Heading fontSize={{base:'sm',md:'md',lg:'lg',xl:"2xl"}} fontFamily={'body'}>
          {name} {name1}
        </Heading>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
          @{number}
        </Text>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
          @{role}
        </Text>
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}>
          Farmer, Farming, Fertilizer and Seller. Govt. work enquires 
          <Link href={'#'} color={'blue.400'}>
            #Farming
          </Link>{' '}
          in your Land
        </Text>

        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            #Farming
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            #Fertilizers
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            #Soil
          </Badge>
        </Stack>

        <Stack mt={8} direction={'row'} spacing={4}>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            _focus={{
              bg: 'gray.200',
            }}>
            Info
          </Button>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={'blue.400'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'blue.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}>
            {
                isLogin?(<Text onClick={handleLogout}>Logout</Text>):(<Text onClick={handleLogin}>Login</Text>)
            }
          </Button>
        </Stack>
      </Box>
    </Center>
    </Show>
    
    </>
  );
}