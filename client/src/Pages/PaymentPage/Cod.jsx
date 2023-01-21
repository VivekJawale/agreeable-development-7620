import { Box, Button, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Styles from "./cod.module.css";

export default function Cod() {
    const navigate = useNavigate();
    const OrderConfirm = () => {
        alert("Order confirmed successfully");
        navigate("www.google.com")
    }
    return (
      <>
    <Box className={Styles.main}>
      <HStack>
        <Image
          src="https://static1.hkrtcdn.com/hknext/static/media/payment/cod-inner.svg"
          alt="COD"
          />
        <Text as="p">CASH ON DELIVERY</Text>
      </HStack>
      <Box>
        <Text as="p">You will not earn any HK Cash through COD</Text>
        <Text as="p">Pay Online and earn <span style={{color:"green"}}>₹12</span> HM Cash</Text>
          </Box>
    </Box>
          <Button className={Styles.btn} colorScheme="rgb(0,181,181)" onClick={OrderConfirm}>Confirm Order</Button>
        </>
  );
}
