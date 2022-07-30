import { Checkbox, Image, Select, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'
import {FcBiohazard} from "react-icons/fc"
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { useAlert } from 'react-alert'
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useDispatch } from 'react-redux';
import {useNavigate} from "react-router-dom"
import { Sigup_Success } from '../../Redux/AppReducer/Action';
import { Link as RouterLink } from 'react-router-dom';


export const SignUp = () => {
  const [data,setData]=useState({})
  const alert = useAlert();
  const dispatch=useDispatch();
  const navigate=useNavigate()
  const handleChange=(e)=>{
    const {name,value}=e.target
    setData({
      ...data,
      [name]:value
    })
  }

  const handleSignup=()=>{
    dispatch(Sigup_Success(alert,data,navigate))
  }

  return (
    <Tabs isFitted variant='enclosed' mt={'28'}>
  <TabList mb='1em'mr={'12'}>
    <Tab color={'darkmagenta'} fontWeight={'semibold'}>COMPANY</Tab>
    <Tab color={'darkmagenta'} fontWeight={'semibold'}>FARMERS</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Flex justifyContent={'center'} p={{md:'10'}}>
       <FcBiohazard fontSize={'35'}/>
      <Text fontSize={{base:"sm",md:'md',lg:'lg',xl:"xl"}} color={'darkorange'}>COMPANY SIGNUP</Text>

      </Flex>
      <SplitScreen handleChange={handleChange} handleSubmit={handleSignup}/>
    </TabPanel>
    <TabPanel>
      <Flex justifyContent={'center'} >
         <FcBiohazard fontSize={'35'}/>
      <Text fontSize={{base:"sm",md:'md',lg:'lg',xl:"xl"}} color={'darkorange'}>FARMERS SIGNUP</Text>
      </Flex>
      <SignupCard handleChange={handleChange} handleSubmit={handleSignup}/>
    </TabPanel>
  </TabPanels>
</Tabs>
    
  )
}


export default function SignupCard({handleChange,handleSubmit,}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" name='First_Name' onChange={handleChange}/>
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" name='Last_Name' onChange={handleChange}/>
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" name='Mail' onChange={handleChange}/>
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} name='Password' onChange={handleChange} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
             <FormControl id="mobile" isRequired>
              <FormLabel>Mobile Number</FormLabel>
              <Input type="number" name='Mobile' onChange={handleChange} />
            </FormControl>
            <FormControl id="Role" isRequired >
              <FormLabel>Role</FormLabel>
              <Select placeholder='Select' name='role' onChange={handleChange}>
             <option value='Farmer'>Farmer</option>
              </Select>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }} onClick={handleSubmit}>
                Sign up
              </Button>
             
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <RouterLink to='/login' color={'blue.400'}>Login</RouterLink>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

 function SplitScreen({handleChange,handleSubmit}) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" name='First_Name' onChange={handleChange}/>
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" name='Last_Name' onChange={handleChange}/>
                </FormControl>
              </Box>
            </HStack>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input type="email"  name='Mail' onChange={handleChange}/>
          </FormControl>
           <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'}  name='Password' onChange={handleChange}/>
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
          <FormControl id="Mobile" isRequired>
            <FormLabel>Mobile Number</FormLabel>
            <Input type="number" name='Mobile' onChange={handleChange}/>
          </FormControl>
          <FormControl id="Role" isRequired>
            <FormLabel>Role</FormLabel>
           <Select placeholder='Select' name='role' onChange={handleChange}>
             <option value='Seller'>Seller</option>
              </Select>
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox>Remember me</Checkbox>
              <Link color={'blue.500'}>Forgot password?</Link>
            </Stack>
            <Button colorScheme={'blue'} variant={'solid'} onClick={handleSubmit}>
              Sign Up
            </Button>
             <Text align={'center'}>
                Already a user? <RouterLink to='/login' color={'blue.400'}>Login</RouterLink>
              </Text>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://www.bing.com/th?id=ATOOLB9F845C9AFB4FBB62206C75A9A48529B9AA5BA0F4DB47FE57C84C6CD1A1E3A79&w=472&h=280&c=1&rs=2&o=6&dpr=1.3&pid=SANGAM'
          }
        />
      </Flex>
    </Stack>
  );
}