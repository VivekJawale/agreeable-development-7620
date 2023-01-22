import { Box, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import Styles from "./CartItem.module.css";
import {RiDeleteBin6Line} from "react-icons/ri"
import {BsHeart} from "react-icons/bs"
export default function CartItem({data}) {
 const [quantity,setQuantity]=useState(1);
  return (
    <Flex className={Styles.main}>
      <VStack className={Styles.main1}>
        <Image src={data.image} alt={ data.name} />
      </VStack>
      <Box className={Styles.main2}>
        <Text as="h3">{data.name}</Text>
        <HStack>
          <HStack>

          <Text as="h3">₹ { data.price1}</Text>
          <Text as="h3">{data.discount}% OFF</Text>
          </HStack>
          <HStack>

            <Text as="h3">Earn 24 HK Cash</Text>
            <Image src="https://static1.hkrtcdn.com/hknext/static/media/common/earn-hk-cash.svg"/>
          </HStack>
        </HStack>
        <Text as="h3">MRP : <span className={Styles.mrp}>₹{data.price2}</span></Text>
        <Flex>
          <button onClick={()=>setQuantity(quantity-1)} disabled={quantity===1}>-</button>
          <button>{quantity }</button>
          <button onClick={()=>setQuantity(quantity+1)} disabled={quantity>=5}>+</button>
        </Flex>
      </Box>
      <HStack className={Styles.main3}>
        <RiDeleteBin6Line />
        <BsHeart/>
      </HStack>
    </Flex>
  );
}

