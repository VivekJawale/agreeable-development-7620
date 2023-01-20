import { HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Styles from "./Summery.module.css";
import { CiLocationOn } from "react-icons/ci";
import { TbDiscount2 } from "react-icons/tb";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import OrderSummery from "./OrderSummery";
import { useDispatch } from "react-redux";
import { handleAddCart } from "../../Redux/Cart/cart.action";

export default function Summery() {
  const dispatch = useDispatch();

  const proceedToPay = () => {
    dispatch(handleAddCart())
  }
  return (
    <VStack className={Styles.main} spacing={3}>
      <HStack className={Styles.main1}>
        <HStack>
          <CiLocationOn className={Styles.add} />
          <Text as="h4">Delivery to</Text>
        </HStack>
        <Link to="#">Change</Link>
      </HStack>
      <HStack className={Styles.main2}>
        <HStack>
          <TbDiscount2 className={Styles.coupon} />
          <Text as="h4">Apply Coupon</Text>
        </HStack>
        <BiChevronRight className={Styles.right} />
      </HStack>
      <HStack className={Styles.btn} onClick={proceedToPay}>
        <Text as="h3">Proceed to Pay</Text>
        <span className={Styles.span}>500</span>
      </HStack>
      <OrderSummery />
    </VStack>
  );
}
