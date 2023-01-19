import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import { Box, CardBody, Icon, Image, Text } from '@chakra-ui/react'
import { BiHeart } from 'react-icons/bi';
import {AiFillStar} from 'react-icons/ai';
import Button from "react-bootstrap/Button";
import AdminProductEdit from './AdminProductEdit';
import { useEffect } from 'react';

export const AdminproductCard = ({el}) => {
    const [modalShow, setModalShow] = React.useState(false);
    const [bold,notbold]=React.useState()

    useEffect(()=>{
        if(el.bold){
            notbold(true)
        }
        else{
            notbold(false)
        }
    },[])
    
   
   
    // console.log(el.bold);
  return (
    <>
     <Card style={{border:"0px solid #C8C8C8",rounded:"5px",boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",padding:"10px 10px",width: '22rem',height:"650px",paddingBottom:"20px" }}>
      <Card.Img variant="top" src={el.image} width="60%" height="60%" />
    
        <Box bg="#2eb8b8" w="60px" p="5px 10px" display="flex" justifyContent="space-between" alignItems="center">
              <Text m="0" color="white" fontSize="15px">4.4</Text>
              <Icon m="0" boxSize={14} color="white" as={AiFillStar}/>
            </Box>
            
        <Card.Body>
        <Card.Title>{el.name}</Card.Title>
      </Card.Body>
       <div style={{display:"flex",justifyContent:"space-evenly"}}>
          <div style={{display:"flex"}}>
          <span  contentEditable="false">₹ {el.price1}</span> 
          </div>
        
          <div style={{display:"flex"}}>
          <span style={{textDecoration:"line-through"}} contentEditable="false">₹ {el.price2}</span> 
          </div>
         
          <div style={{display:"flex"}}>
          <span style={{color:"green"}} contentEditable="false">{el.discount} % off</span> 
          </div>
          </div>

      
        {bold==false?<div></div>:<div style={{width:"100%",display:"flex",background:"#eee",alignItems:"center",justifyContent:"space-evenly",marginTop:"5px"}}>
          <div>
          <img src={el["premium-icon src"]} alt="" />
          </div>
          <div>
          <p style={{marginTop:"16px"}}>₹.{el.bold}</p>
          </div>
          <div>
          <p style={{marginTop:"16px"}}>{el["msg-content"]}</p>
          </div>
              </div>}
              <div style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-evenly",marginTop:"10px"}}>
        <Button variant="warning" style={{width:"40%"}} onClick={() => setModalShow(true)}>Edit</Button>{' '}
      <Button variant="danger"  style={{width:"40%"}}>Delete</Button>{' '}
      </div>

    </Card>
    <AdminProductEdit  el={el} show={modalShow} onHide={() => setModalShow(false)} />
    </>
  )
}

