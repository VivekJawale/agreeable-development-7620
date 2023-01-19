import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import Styles from "./CartNavbar.module.css"
import { CgShoppingCart } from "react-icons/cg"
import { SlLocationPin } from "react-icons/sl"
import {MdOutlinePayment} from "react-icons/md"

export default function CartNavbar() {
  return (
      <Flex className={Styles.main}>
          <Box className={Styles.logo}>
          <Image src='https://i.postimg.cc/Gm42FyKv/1673963138538-1.jpg' alt='logo' />
          </Box>
          <Flex className={Styles.main2}>
              <Box>
                  <CgShoppingCart className={` ${Styles.cart} ${Styles.icon}`} />
                  <Box>Cart</Box>
              </Box>
                  <Box className={` ${Styles.line} ${Styles.line1}`}></Box>
              <Box>
                  <SlLocationPin className={` ${Styles.cart} ${Styles.icon}`}/>
                  <Box>Address</Box>
              </Box>
                  <Box className={` ${Styles.line} ${Styles.line1}`}></Box>
              <Box>
                  <MdOutlinePayment className={` ${Styles.cart} ${Styles.icon}`}/>
                  <Box>Payment</Box>
              </Box>
          </Flex>
    </Flex>
  )
}
