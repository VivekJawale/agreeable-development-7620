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
      <Box pt={["90px", "90px", "70px"]}>
        <SubNav />
        <Box display={["none", "none", "flex"]} bg="white" color="black" w="95%" m="auto" justifyContent="space-between" pt="30px">
          <Box display={["none", "none", "inline"]} w={["0%", "0%", "21%"]}> 
            <ProtienFiltetComp />
          </Box>
          <Box w={["95%", "95%", "78%"]}>
            <ProtienComp />
          </Box>
        </Box>
        <Box display={["inline","inline", "none"]} w={["95%", "95%", "78%"]}>
            <ProtienComp />
        </Box>
      </Box>
    </Box>
  )
}

export default Protiens
