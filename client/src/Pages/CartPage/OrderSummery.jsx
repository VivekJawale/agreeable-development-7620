import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Styles from "./Summery.module.css";


export default function OrderSummery() {
  return (
    <VStack className={Styles.main3}>
        <HStack>
          <Text as="h2">Order Summary </Text>
          <Text as="h4">
            ( {5} Items)
          </Text>
        </HStack>
        <HStack>
          <Text as="h3">Total MRP</Text>
          <Text as="h4">₹ {999}</Text>
        </HStack>
        <HStack>
          <Text as="h3">Total Discounts</Text>
          <Text as="h4">-₹{400}</Text>
        </HStack>
              <HStack>
                  <Text as="h3">Shipping Charges</Text>
                  <Text as="h4">FREE</Text>
        </HStack>
    <Box id={Styles.line}></Box>
              <HStack>
                  <Text as="h3">Payable Amount</Text>
                  <Text as="h4">₹ {599 }</Text>
              </HStack>
              <HStack>
              <Text as="h5">You will Save ₹{400} & Earn ₹{24} HK Cash on this order</Text>
              </HStack>
      </VStack>
  )
}