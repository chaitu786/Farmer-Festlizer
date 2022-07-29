import { Box, Image, Stack, Text,
    Table,
 Thead,
 Tbody,
 Tfoot,
 Tr,
 Th,
 Td,
 TableCaption,
 TableContainer,
 Heading,

} from '@chakra-ui/react'
import React from 'react'

export const FarmersSchemes = () => {
 return (
   <>
   <Stack mt={'12'} ml={{md:'10'}}>
       <Box display={'flex'}>
          <Image src="https://media1.tenor.com/images/1513d5c449d8d4a2816435d8679941d4/tenor.gif?itemid=15239864" width={'12'}/>
           <Text fontSize={{base:"sm",md:'md',lg:'lg',xl:'xl'}} fontStyle={'oblique'} color={'red'}>Government Schemes in Agriculture </Text>
       </Box>
       <Box>
          <marquee style={{color:"blue"}}>Latest and Flash News on Agriculture</marquee>
          <ul>
 <a href='https://vikaspedia.in/schemesall/schemes-for-farmers/agriculture-infrastructure-fund'><li style={{textDecoration:"underline"}}>Agriculture Infrastructure Fund </li></a>
 <a href='https://vikaspedia.in/schemesall/schemes-for-farmers/pradhan-mantri-kisan-samman-nidhi'><li style={{textDecoration:"underline"}}>Pradhan Mantri Kisan Samman Nidhi </li></a>
  <a href='https://vikaspedia.in/schemesall/schemes-for-farmers/pradhan-mantri-kisan-samman-nidhi'><li style={{textDecoration:"underline"}}>Credit facility for farmers </li></a>
   <a href='https://vikaspedia.in/schemesall/schemes-for-farmers/pradhan-mantri-kisan-samman-nidhi'><li style={{textDecoration:"underline"}}> Crop insurance schemes </li></a>
    <a href='https://vikaspedia.in/schemesall/schemes-for-farmers/pradhan-mantri-kisan-samman-nidhi'><li style={{textDecoration:"underline"}}> PM Kisan Maan Dhan Yojan</li></a>
     <a href='https://vikaspedia.in/schemesall/schemes-for-farmers/pradhan-mantri-kisan-samman-nidhi'><li style={{textDecoration:"underline"}}> Pradhan Mantri Krishi Sinchai Yojana</li></a>
      <a href='https://vikaspedia.in/schemesall/schemes-for-farmers/pradhan-mantri-kisan-samman-nidhi'><li style={{textDecoration:"underline"}}>Interest subvention for dairy sector  </li></a>
 
</ul>

          
       </Box>
   </Stack>
   <Box mt={'10'} >
       <Heading fontSize={{base:"sm",md:"md",lg:'md',xl:'md'}} ml={'5'} color={'chocolate'}>Minimum Support Prices - Fixed by Government (Rs.quintal)</Heading>
       <TableContainer>
 <Table variant='simple'>
   <Thead>
     <Tr>
       <Th>KHARIF CROPS</Th>
       <Th>2021-22	</Th>
       
     </Tr>
   </Thead>
   <Tbody>
     <Tr>
       <Td>PADDY</Td>
       <Td>1960</Td>
      
     </Tr>
     <Tr>
       <Td>JOWAR</Td>
       <Td>2738</Td>
       
     </Tr>
     <Tr>
       <Td>BAJRA</Td>
       <Td>2250</Td>
      
     </Tr>
      <Tr>
       <Td>MAIZE</Td>
       <Td>1870</Td>
      
     </Tr>
      <Tr>
       <Td>RAGI</Td>
       <Td>3295</Td>
      
     </Tr>
      <Tr>
       <Td>COTTON</Td>
       <Td>6025</Td>
      
     </Tr>
   </Tbody>
  
 </Table>
</TableContainer>
   </Box>
  </>
 )
}