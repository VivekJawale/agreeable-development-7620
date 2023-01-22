import React, { useEffect, useState } from 'react'
import { Box, Icon, Checkbox, Divider, Input, Text } from '@chakra-ui/react'
import { useSearchParams } from 'react-router-dom'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'

const ProtienFiltetComp = () => {

    const categories= ["Whey Proteins", "Beginners Whey Protein", "Whey Protein Isolate", "Raw Whey Proteins",
    "Plant Proteins", "Protein for Women", "Protein Blends", "Casein Proteins", "Soy Proteins"
    ];

    const discounts= [20, 40, 60, 80];

    const ratings= [4, 3, 2, 1];

    const prices= ["2500", "2501-4000", "4001-5500", "5501-7000", "7001-8500", "8501-10000"];

    const [showcategory, setShowcategory]= useState(true);
    const [showdiscount, setShowdiscount]= useState(true);
    const [showratings, setShowratings]= useState(true);
    const [showprice, setShowprice]= useState(true);


    const [searchParams, setSearchParams]= useSearchParams();


    const initialCategory= searchParams.getAll("category");
    const initialSort= searchParams.getAll("priceSort");
    const initialDiscount= searchParams.getAll("discountByCat");
    const initialRating= searchParams.getAll("rating");
    const initialPrice= searchParams.getAll("priceByCat");


    const [category, setCategory]= useState(initialCategory || []);
    const [sort]= useState( initialSort || '');
    const [discountvalue, setDiscountValue] = useState(initialDiscount || "");
    const [ratingvalue, setRatingValue] = useState(initialRating || "");
    const [pricevalue, setPriceValue] = useState(initialPrice || "");

    const handleFilterCheckbox= (e)=>{
        const newCategory= [...category];
        let value=e.target.value;
        
        if(newCategory.includes(value)){
            newCategory.splice(newCategory.indexOf(value), 1);
        }else{
            newCategory.push(value)
        }
        setCategory(newCategory);
    }

    const handlePriceValue= (e)=>{
        const newPrice= [...pricevalue];
        let value=e.target.value;
        
        if(newPrice.includes(value)){
            newPrice.splice(newPrice.indexOf(value), 1);
        }else{
            newPrice.push(value)
        }
        setPriceValue(newPrice);
    }

    const handleDiscountValue= (e)=>{
        setDiscountValue(e.target.value);
    }

    const handleRatingValue= (e)=>{
        setRatingValue(e.target.value);
    }

    const handleReset= ()=>{
        setDiscountValue("");
        setRatingValue("");
        setCategory("");
        setPriceValue("");
    }

    useEffect(()=>{
        let params={};
        category && (params.category= category);
        discountvalue && (params.discountByCat=discountvalue);
        ratingvalue && (params.rating=ratingvalue);
        pricevalue && (params.priceByCat= pricevalue);
        sort && (params.priceSort= sort);
        setSearchParams(params);
    }, [category, setCategory, setSearchParams, searchParams, sort, discountvalue, ratingvalue, pricevalue]);




  return (
    <Box w="95%" display="flex" color="gray.800" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" rounded="10px" p="15px">
      <Box w="100%">
        <Box w="100%" className='outer'>
            <Box className='headers'  w="100%" display="flex" justifyContent="space-between" alignItems="center">
                <Text>Filter Options</Text>
                <Text _hover={{textDecoration:"underline", fontWeight:"bold"}} cursor="pointer" onClick={handleReset} fontSize="15px" color="teal">Reset All</Text>
            </Box>
            <Box className='body' w="95%" m="auto" p="10px" textAlign="left" rounded="5px">
                <Box className='category'>
                    <Box className='categoryhead' m="0px" display="flex" justifyContent="space-between" alignItems="center">
                        <Box display="flex" justifyContent="space-between" alignItems="center" >
                            <Icon m="0px" onClick={()=>setShowcategory(!showcategory)} as={showcategory? ChevronDownIcon : ChevronUpIcon } />
                            <Text m="0px" fontWeight="bold" color="black">Categories</Text>
                        </Box>
                        <Text _hover={{textDecoration:"underline", fontWeight:"bold"}} cursor="pointer" onClick={()=>setCategory([])} m="0px" fontSize="15px" color="teal">Clear</Text>
                    </Box>
                    <Divider />
                    { showcategory && <Box className='categorybody' w="90%" m="auto">
                        {categories && categories.map((el)=>{
                            return <Box display="flex" gap="5px" mt="10px" fontSize="15px" alignItems="center">
                                <Checkbox rounded="5px" border="1px solid gray" boxSize="15px" isChecked={category.includes(el)} value={el} onChange={handleFilterCheckbox} />
                                <label>{el}</label>
                            </Box>
                        })}
                    </Box>}
                </Box>
                <Divider />
                <Box className='discount'>
                    <Box className='discounthead' m="0px" display="flex" justifyContent="space-between" alignItems="center">
                        <Box display="flex" justifyContent="space-between" alignItems="center" >
                            <Icon m="0px" onClick={()=>setShowdiscount(!showdiscount)} as={showdiscount? ChevronDownIcon : ChevronUpIcon } />
                            <Text m="0px" fontWeight="bold" color="black">Discounts</Text>
                        </Box>
                        <Text _hover={{textDecoration:"underline", fontWeight:"bold"}} cursor="pointer" onClick={()=>setDiscountValue("")} m="0px" fontSize="15px" color="teal">Clear</Text>
                    </Box>
                    <Divider />
                    { showdiscount && <Box className='discountbody' w="90%" m="auto">
                         <Box value={discountvalue} onChange={handleDiscountValue} >
                            {discounts && discounts.map((el)=>{
                                return <Box display="flex" gap="5px" mt="10px" fontSize="15px" alignItems="center">
                                        <Input type="radio" value={el} checked={discountvalue==el} border="1px solid gray" boxSize="15px" />
                                        <label>{el}% And Above</label>
                                </Box>
                            })}
                        </Box>
                    </Box>}
                </Box>
                <Divider />
                <Box className='rating'>
                    <Box className='ratinghead' m="0px" display="flex" justifyContent="space-between" alignItems="center">
                        <Box display="flex" justifyContent="space-between" alignItems="center" >
                            <Icon m="0px" onClick={()=>setShowratings(!showratings)} as={showratings? ChevronDownIcon : ChevronUpIcon } />
                            <Text m="0px" fontWeight="bold" color="black">Ratings</Text>
                        </Box>
                        <Text _hover={{textDecoration:"underline", fontWeight:"bold"}} cursor="pointer" onClick={()=>setRatingValue("")} m="0px" fontSize="15px" color="teal">Clear</Text>
                    </Box>
                    <Divider />
                    { showratings && <Box className='ratingbody' w="90%" m="auto">
                         <Box value={ratingvalue} onChange={handleRatingValue} >
                            {ratings && ratings.map((el)=>{
                                return <Box display="flex" gap="5px" mt="10px" fontSize="15px" alignItems="center">
                                        <Input type="radio" value={el} checked={ratingvalue==el} border="1px solid gray" boxSize="15px" />
                                        <label>{el} Ratings And Above</label>
                                </Box>
                            })}
                        </Box>
                    </Box>}
                </Box>
                <Divider />
                <Box className='price'>
                    <Box className='pricehead' m="0px" display="flex" justifyContent="space-between" alignItems="center">
                        <Box display="flex" justifyContent="space-between" alignItems="center" >
                            <Icon m="0px" onClick={()=>setShowprice(!showprice)} as={showprice? ChevronDownIcon : ChevronUpIcon } />
                            <Text m="0px" fontWeight="bold" color="black">Price</Text>
                        </Box>
                        <Text _hover={{textDecoration:"underline", fontWeight:"bold"}} cursor="pointer" onClick={()=>setPriceValue([])} m="0px" fontSize="15px" color="teal">Clear</Text>
                    </Box>
                    <Divider />
                    { showprice && <Box className='pricebody' w="90%" m="auto">
                        {prices && prices.map((el)=>{
                            return <Box display="flex" gap="5px" mt="10px" fontSize="15px" alignItems="center">
                                <Checkbox rounded="5px" border="1px solid gray" boxSize="15px" checked={pricevalue.includes(el)} value={el} onChange={handlePriceValue} />
                                <label>{el}</label>
                            </Box>
                        })}
                    </Box>}
                </Box>
            </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ProtienFiltetComp
