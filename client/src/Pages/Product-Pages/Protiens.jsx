import React from 'react'
import { Box } from '@chakra-ui/react';
import ProtienFiltetComp from './ProtienFilterComp';
import ProtienComp from './ProtienComp';
import Navbar from '../Navbar';
import SubNav from '../SubNav';

const Protiens = () => {
  return (
    <Box>
      <Navbar />
      <SubNav />
      <Box display="flex" bg="white" color="black" w="95%" m="auto" justifyContent="space-between" pt="100px">
        <Box w="19%"> 
          <ProtienFiltetComp />
        </Box>
        <Box w="78%">
          <ProtienComp />
        </Box>
      </Box>
    </Box>
  )
}

export default Protiens
