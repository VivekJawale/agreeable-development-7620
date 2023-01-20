import { Box, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import Styles from "./CartItem.module.css";
import {RiDeleteBin6Line} from "react-icons/ri"
import {BsHeart} from "react-icons/bs"
export default function CartItem() {
  const [quantity, setQuantity] = useState(data.quantity);
  return (
    <Flex className={Styles.main}>
      <VStack className={Styles.main1}>
        <Image src={data.img} alt={ data.title} />
      </VStack>
      <Box className={Styles.main2}>
        <Text as="h3">{data.title}</Text>
        <HStack>
          <HStack>

          <Text as="h3">₹ { data.price}</Text>
          <Text as="h3">{data.off}% OFF</Text>
          </HStack>
          <HStack>

            <Text as="h3">Earn 24 HK Cash</Text>
            <Image src="https://static1.hkrtcdn.com/hknext/static/media/common/earn-hk-cash.svg"/>
          </HStack>
        </HStack>
        <Text as="h3">MRP : <span className={Styles.mrp}>₹{data.mrp}</span></Text>
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

const data = {
  img: "https://img3.hkrtcdn.com/22586/prd_2258522_c_t.jpg",
  title: "HealthKart HK Vitals Super Strength Fish Oil Purity 84%, 60 softgels",
  price: 599,
  mrp:999,
  off: 40,
  quantity: 1,
};