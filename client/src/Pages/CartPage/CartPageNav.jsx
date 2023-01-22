import { Box, Flex, Image } from '@chakra-ui/react'
import React, { useState } from 'react'
import Styles from "./CartNav.module.css"
import { CgShoppingCart } from "react-icons/cg"
import { SlLocationPin } from "react-icons/sl"
import {MdOutlinePayment} from "react-icons/md"
import { shallowEqual, useSelector } from 'react-redux'
import {BsCheckCircleFill} from 'react-icons/bs'

export default function CartNavbar() {

    const { onCart, onAdd } = useState([])

  return (
      <Flex className={Styles.main}>
          <Box className={Styles.logo}>
          <Image src='https://i.postimg.cc/Gm42FyKv/1673963138538-1.jpg' alt='logo' />
          </Box>
          <Flex className={Styles.main2}>
              <Box>
                  {!onCart ? 
                      <CgShoppingCart className={` ${Styles.cart} ${Styles.icon}`} id={ Styles.icon} />:
                  <BsCheckCircleFill className={` ${Styles.cart} ${Styles.icon}`}/>}
                  <Box>Cart</Box>
              </Box>
                  <Box className={ onCart ?` ${Styles.line} ${Styles.line1}`:Styles.line}></Box>
              <Box>
                  {!onAdd || !onCart ?
                      <SlLocationPin className={onCart ?` ${Styles.cart} ${Styles.icon}`:Styles.icon} id={ Styles.icon}/> :
                      <BsCheckCircleFill className={` ${Styles.cart} ${Styles.icon}`} />}
                  <Box>Address</Box>
              </Box>
                  <Box className={ onCart && onAdd?` ${Styles.line} ${Styles.line1}`:Styles.line}></Box>
              <Box>
                  <MdOutlinePayment className={onAdd && onCart ?` ${Styles.cart} ${Styles.icon}`:Styles.icon} id={ Styles.icon} />
                  <Box>Payment</Box>
              </Box>
          </Flex>
    </Flex>
  )
}
