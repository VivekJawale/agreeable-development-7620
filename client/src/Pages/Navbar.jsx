import React from 'react'
import { Box, Button, Image, Input, InputGroup, Icon, Text, Link } from '@chakra-ui/react'
import logo from "./Images/download (1).png";
import { Search2Icon } from '@chakra-ui/icons';
import { FiShoppingCart } from 'react-icons/fi';

const Navbar = () => {
  return (
    <Box  p="15px 0px" boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" >
      <Box w="85%" m="auto" display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Link href="/">
            <Image m="0px" h="50px" src={logo} alt="logo" />
          </Link>
        </Box>
        <Box w="40%">
          <InputGroup m="0px" bg="#f1f4f4" rounded="5px" gap="10px" w="100%" display="flex" alignItems="center" p="10px 15px" fontSize="16px">
            <Icon m="0px"
              pointerEvents='none'
              color='gray.100'
              children={<Search2Icon />}
            />
            <Input m="0px" bg="none" w="100%" border="none" p="5px" outline="none" type='tel' placeholder='Search for Products....' />
          </InputGroup>
        </Box>
        <Box w="17%" display="flex" justifyContent="space-between" alignItems="center">
          <Button m="0px" p="11px 25px" rounded="5px" border="none" bg="#2eb8b8" fontSize="18px" color="white">Login</Button>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Icon m="0px" boxSize="25px" as={FiShoppingCart} />
            <Box w="22px" h="22px" display="flex" justifyContent="center" alignItems="center" bg="#f66809" rounded="50%">
                <Text m="0px" fontSize="16px" fontWeight="400" color="white">0</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Navbar
