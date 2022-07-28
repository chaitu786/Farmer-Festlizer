import { Box, Button, Heading, Hide, Show, Stack,Text } from '@chakra-ui/react'
import React from 'react'
import "./Farmers.css"

export const Summary = () => {
  return (
    <>
    <Show above={'sm'}>
    <Box mt={{md:'40'}} ml={'12'} borderRadius={'20px'} width={{md:'md',lg:'lg',xl:'xl'}} className='MainCartItem'>
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
                <Button w={'56'} textAlign="center" ml={'44'}>Continue</Button>
            </Stack>
        </Stack>

    </Box>
    </Show>
    
    </>
  )
}
