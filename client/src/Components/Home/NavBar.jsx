import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Flex, Show, Stack,  BreadcrumbItem, BreadcrumbLink, Breadcrumb,  Avatar,   } from '@chakra-ui/react'
import React from 'react'
import {FcBiohazard} from "react-icons/fc"

export const NavBar = () => {
  return (
    <>
<Show above='sm'>
<Box width={'full'} height={'20'} bg={'ThreeDFace'} boxShadow= {'rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em'} position={'sticky'} top={0} zIndex={1}>
   <Flex justifyContent={'space-between'}>
         <Stack direction={'row'} mt={'1.5'} ml={'20'}>
            <FcBiohazard fontSize={56}/>
                <Breadcrumb spacing='12px' separator={<ChevronRightIcon color='gray.500' />}  >
                          <BreadcrumbItem>
                                <BreadcrumbLink href='#' fontSize={'lg'}>Home</BreadcrumbLink>
                          </BreadcrumbItem>
                          <BreadcrumbItem>
                                <BreadcrumbLink href='#'fontSize={'lg'}>About</BreadcrumbLink>
                          </BreadcrumbItem>
                          <BreadcrumbItem isCurrentPage>
                                  <BreadcrumbLink href='#'fontSize={'lg'}>Contact</BreadcrumbLink>
                          </BreadcrumbItem>
                </Breadcrumb>
         </Stack>
         <Stack mt={'1.5'} mr={'20'}>
                <Breadcrumb spacing='12px' separator={<ChevronRightIcon color='gray.500' />}  >
                          <BreadcrumbItem>
                                <BreadcrumbLink href='#' fontSize={'lg'}>SignUp</BreadcrumbLink>
                          </BreadcrumbItem>
                          <BreadcrumbItem>
                                <BreadcrumbLink href='#'fontSize={'lg'}>Login</BreadcrumbLink>
                          </BreadcrumbItem>
                           <Avatar bg='teal.500' />
                </Breadcrumb>
         </Stack>
         
   </Flex>
</Box>
</Show>

<Show>

</Show>
</>

  )
}
