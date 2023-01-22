import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Styles from "./Summery.module.css";
import { CiLocationOn } from "react-icons/ci";
import { TbDiscount2 } from "react-icons/tb";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import OrderSummery from "./OrderSummery";
import { useDispatch } from "react-redux";
import { handleAddCart } from "../../Redux/Cart/cart.action";
import Address from "../addressPage/Address";
import { useState } from "react";
import { checkoutclear } from "../../Redux/Cart/cart.action"
import swal from "sweetalert"

export default function Summery() {
  const [coupon, setCoupon] = useState();
  const [show, setShow] = useState(false)
  const navigate=useNavigate()
  const dispatch = useDispatch();

  const proceedToPay = () => {
    return <Address />
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
      <Box className={Styles.main22}>
        <HStack className={Styles.main2}>
          <HStack>
            <TbDiscount2 className={Styles.coupon} />
            <Text as="h4">Apply Coupon</Text>
          </HStack>
          {!show ? <BiChevronRight className={Styles.right} onClick={() => setShow(!show)} /> :
            <BiChevronDown className={Styles.right} onClick={() => setShow(!show)} />}
        </HStack>
        {show && <Box className={Styles.main23}><HStack>
          <Text as="p">RPS20</Text>
          <Button onClick={() => setCoupon("RPS20")}>{coupon === "RPS20" ? "Applied" : `Apply Coupon`}</Button>
        </HStack>
          <HStack>
            <Text as="p">PAYTM30</Text>
            <Button onClick={() => setCoupon("PAYTM30")}>{coupon === "PAYTM30" ? "Applied" : `Apply Coupon`}</Button>
          </HStack></Box>}
      </Box>
      <HStack className={Styles.btn} onClick={proceedToPay}>
        <button onClick={() => {
          dispatch(checkoutclear([]))
          swal({
            title:"Thank you for shopping",
            icon:"success"
          })
          navigate("/")
        }} as="h3">Proceed to Pay</button>
      </HStack>
      <OrderSummery />
    </VStack>
  );
}
