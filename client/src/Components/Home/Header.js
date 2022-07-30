import React, { useEffect, useState } from "react";
import { Link, Box, Flex, Text, Button, Stack, useDisclosure } from "@chakra-ui/react";

import Logo from "../Home/Logo"
import { Logout } from "../../Redux/AppReducer/Action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isCart,setIsCart]=useState(false)
  const [isLogin,setIsLogin]=useState(false)
  let role=localStorage.getItem("role")
  const login=localStorage.getItem("isLogin")
  const dispatch=useDispatch()
  const navigate=useNavigate()
  useEffect(()=>{
    if(role==="Farmer"){
      setIsCart(true)
    }
    if(login==="true"){
      setIsLogin(true)
  }
  },[role,login])
  const handleLogout=()=>{
    console.log(1);
    dispatch(Logout())
  }
  const handleClick=()=>{
    navigate("/")
  }
  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Logo
        w="100px"
        color={["white", "white", "primary.500", "primary.500"]}
        onclick={handleClick}
      />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} isCart={isCart} isLogin={isLogin} handleLog={handleLogout} role={role}/>
    </NavBarContainer>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = ({ isOpen, isCart, isLogin, handleLog, role }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <Box>{isCart?(<MenuItem to="/create">Create</MenuItem>):(<MenuItem to="/">Home</MenuItem>)}</Box>
        <MenuItem to="http://localhost:8080/chat/">Chat</MenuItem>
        <MenuItem to="/weather">Weather</MenuItem>
        <Box>{isCart?(<MenuItem to="/myposts">My Posts</MenuItem>):(<MenuItem to="/cart">Cart</MenuItem>)}</Box>
        <>
          <Button
            size="sm"
            rounded="md"
            color={["primary.500", "primary.500", "white", "white"]}
            bg={["white", "white", "primary.500", "primary.500"]}
            _hover={{
              bg: ["primary.100", "primary.100", "primary.600", "primary.600"]
            }}
          >
           {isLogin?(<Text onclick={()=>handleLog}>{role}</Text>):(<MenuItem to="/signup" isLast>Login</MenuItem>)}
          </Button>
        </>
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p={8}
      
      color={["white", "white", "primary.700", "primary.700"]}
      boxShadow= {'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px'}
      position={{base:'fixed',md:'fixed'}}
      top={{base:'0',md:0}}
      zIndex={100}
      bg={["primary.500", "primary.500",'white','white']}
      
      
      

      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBar;
