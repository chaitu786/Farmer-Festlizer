import React, { useState } from 'react'
import { useAlert } from 'react-alert'
import {useNavigate} from "react-router-dom"
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { Login_Success } from '../../Redux/AppReducer/Action';

export const Login = () => {
  const [data,setData]=useState({})
  const dispatch=useDispatch()
  const alert=useAlert()
  const navigate=useNavigate()
  const handleChange=(e)=>{
    const {name,value}=e.target
    setData({
      ...data,
      [name]:value
    })
  }

  const handleSubmit=()=>{
    dispatch(Login_Success(alert,data,navigate))
  }
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email" isRequired>
              <FormLabel>Mobile</FormLabel>
              <Input type="Number" onChange={handleChange} name="Mobile"/>
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input type="password" onChange={handleChange} name="Password"/>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={handleSubmit}
                >
                Login
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}
