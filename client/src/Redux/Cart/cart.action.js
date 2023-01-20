import { AddAddress, AddCart } from "./cart.types"

const handleAddCart=()=>{
    return {type:AddCart}
}
const handleAddAddress = () => {
    return {type:AddAddress}
}

export {handleAddAddress, handleAddCart}