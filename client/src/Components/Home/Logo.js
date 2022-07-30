import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FcBiohazard } from "react-icons/fc";

export default function Logo(props) {
  const navigate=useNavigate()
  const handleClick=()=>{
    navigate("/")
  }
  return (
    <Box {...props}>
      <Text fontSize="lg" fontWeight="bold" onClick={handleClick}>
      <FcBiohazard fontSize={'40px'}/>
      </Text>
    </Box>
  );
}
