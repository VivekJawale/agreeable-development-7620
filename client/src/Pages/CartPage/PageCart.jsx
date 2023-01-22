import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import CartItem from "./cartPageItem";
import Styles from "./PageCart.module.css";
// import CartItem from "./CartItem";
import Summery from "./Summery";
// import Summery from "./Summery";
export default function PageCart({ props }) {
console.log(props)
  return (
    <Box w="80%" display="flex" margin="auto" gap={6} padding="1.5rem 0" >
      <Stack className={Styles.main}>
        <HStack className={Styles.main1}>
          <Text as="h4">Shopping Cart ({1} item)</Text>
          <Link to="#">My Wishlist</Link>
        </HStack>
        <Box className={Styles.main2}>
          {props.map((e) => {
            return (<CartItem data={e} />)
          })}
        </Box>
        <HStack className={Styles.main3}>
          <Link to="#">Continue Shopping</Link>
        </HStack>
      </Stack>
      <Summery />
    </Box>
  );
}