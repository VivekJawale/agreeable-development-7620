import React from 'react'
import { Box, Link, Icon } from '@chakra-ui/react';
import Navbar from '../Navbar';
import SubNav from '../SubNav';
import { RiHome2Fill } from 'react-icons/ri';
import { ChevronRightIcon } from '@chakra-ui/icons';
import PrePostComp from './PrePostComp';
import PrePostFilterComp from './PrePostFilterComp';

const PrePost = () => {
  return (
    <Box>
      <Navbar />
      <Box pt={["90px", "90px", "70px"]}>
        <SubNav />
        <Box w={["90%", "90%", "80%"]} m="auto">
          <Box display="flex" gap="5px" alignItems="center">
            <Link href="/"><Icon color="#2eb8b8" as={RiHome2Fill} /></Link>
            <Icon color="#2eb8b8" as={ChevronRightIcon} />
            <Link color="#2eb8b8" fontSize="14px">Sports Nutritions</Link>
            <Icon color="#2eb8b8" as={ChevronRightIcon} />
            <Link href="/products/prepostworkout" fontSize="14px">Pre/Post Workout</Link>
          </Box>
        </Box>
        <Box display={["none", "none", "flex"]} bg="white" color="black" w="95%" m="auto" justifyContent="space-between" pt="30px">
          <Box display={["none", "none", "inline"]} w={["0%", "0%", "21%"]}> 
            <PrePostFilterComp />
          </Box>
          <Box w={["95%", "95%", "78%"]}>
            <PrePostComp />
          </Box>
        </Box>
        <Box display={["inline","inline", "none"]} w={["95%", "95%", "78%"]}>
            <PrePostComp />
        </Box>
      </Box>
    </Box>
  )
}

export default PrePost
