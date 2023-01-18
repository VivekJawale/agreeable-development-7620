import { Box, Link, Text, Icon } from '@chakra-ui/react'
import React from 'react'
import { HiMenuAlt1, HiLocationMarker } from 'react-icons/hi';
import { FaTag, FaBloggerB } from 'react-icons/fa';
import { RiCoupon3Fill } from 'react-icons/ri';
import { AiFillGift } from 'react-icons/ai';
import { BsFillChatDotsFill } from 'react-icons/bs';

const SubNav = () => {
  return (
    <Box>
      <Box w="80%" p="7px 0px" m="auto" display="flex" justifyContent="space-between" alignItems="center">
        <Box p="7px 17px" border="1px solid #a6a6a6" rounded="5px" display="flex" justifyContent="space-between" alignItems="center" >
          <Icon color="#2eb8b8" boxSize="22px" as={HiMenuAlt1} />
          <Text color="#595959" m="0">Shop By Category</Text>
        </Box>
        <Box  w="80%" display="flex" gap="5px" justifyContent="space-between" alignItems="center">
          <Link display="flex" justifyContent="space-between" alignItems="center">
            <Icon color="#2eb8b8" as={FaTag} />
            <Text fontSize="16px" color="#333333">Best Sellers</Text>
          </Link>
          <Link display="flex" gap="5px" justifyContent="space-between" alignItems="center">
            <Icon color="#666666" as={RiCoupon3Fill} />
            <Text fontSize="16px" color="#333333">Deals</Text>
          </Link>
          <Link display="flex" gap="5px" justifyContent="space-between" alignItems="center">
            <Icon color="#666666" as={FaBloggerB} />
            <Text fontSize="16px" color="#333333">Blogs</Text>
          </Link>
          <Link display="flex" gap="5px" justifyContent="space-between" alignItems="center">
            <Icon color="#666666" as={AiFillGift} />
            <Text fontSize="16px" color="#333333">Gift Card</Text>
          </Link>
          <Link display="flex" gap="5px" justifyContent="space-between" alignItems="center">
            <Icon color="#666666" as={BsFillChatDotsFill} />
            <Text fontSize="16px" color="#333333">Customer Support</Text>
          </Link>
          <Link display="flex" gap="5px" justifyContent="space-between" alignItems="center">
            <Icon color="#666666" as={HiLocationMarker} />
            <Text fontSize="16px" color="#333333">Store Locator</Text>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

export default SubNav
