
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import React, { useEffect } from 'react'
import { Box, Icon, Image, Text } from '@chakra-ui/react'
import { BiHeart } from 'react-icons/bi';
import {AiFillStar} from 'react-icons/ai';
import {FiShoppingCart} from 'react-icons/fi';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const AdminProductEdit=(props)=>{
  const {el}=props;
  // console.log(el)
  const [category,setnewCategory]=useState(`${el.category}`);
  const [image_url,setImageUrl]=useState(el.image);
  const [name,setName]=useState(el.name);
  const [discountPrice,setDiscountprice]=useState(el.price1);
  const [ogprice,setogprice]=useState(el.price2);
  const [bold,setBold]=useState(el.bold);
  const [offer,setOffer]=useState(el.discount);
  const [boldavail,notbold]=React.useState()

  useEffect(()=>{
      if(el.bold){
          notbold(true)
      }
      else{
          notbold(false)
      }
  },[])

  return (
    <Modal
      {...props}
      size="lg md sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title style={{borderBottom:"none",fontFamily: "Trebuchet MS',sans-serif",color: "#424040"}} id="contained-modal-title-vcenter">
      <span style={{marginRight:"20px"}}></span> Change whatever you want to change and click on change details!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{display:"flex",justifyContent:"center"}}>
      <Card style={{ width: '25rem' }}>
      <Card.Body >
        <p>PREVIEW OF CURRENT IMAGE URL</p>
      </Card.Body>
      <Card.Img variant="top" src={image_url} />
      <Card.Body >
        <p>ADD NEW IMAGE URL.</p>
        <input type="text" style={{width:"100%",overflow:"scroll",background:"#eee",padding:"5px 5px"}} contentEditable="true" placeholder={image_url} value={image_url} onChange={(e)=>{setImageUrl(e.target.value)}} />  
        <p style={{marginTop:"5px"}}> <span style={{fontWeight:"bold"}}>Current URL:-</span> {image_url}</p>
      </Card.Body>
      <Card.Body >
        <p>EDIT PRODUCT NAME</p>
        <input type="text" style={{width:"100%",overflowX:"scroll",background:"#eee",padding:"5px 5px"}} contentEditable="true" placeholder={name} value={name} onChange={(e)=>{setName(e.target.value)}} />  
        <p style={{marginTop:"5px"}}> <span style={{fontWeight:"bold"}}>Current Name:-</span> {name}</p>
       </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item style={{display:"flex"}}>
        <Box bg="#2eb8b8" w="60px" p="5px 10px" display="flex" justifyContent="space-between" alignItems="center">
              <Text m="0" color="white" fontSize="15px">4.4</Text>
              <Icon m="0" boxSize={14} color="white" as={AiFillStar}/>
            </Box>
        </ListGroup.Item>
        <ListGroup.Item>
          <div style={{display:"flex",marginTop:"10px"}}>
          <span style={{padding:"5px 5px"}} contentEditable="false">₹</span> 
          <input type="text" style={{width:"20%",overflowX:"scroll",background:"#eee",padding:"5px 5px"}} contentEditable="true" placeholder={discountPrice} value={discountPrice} onChange={(e)=>{setDiscountprice(e.target.value)}} />  
     <span style={{padding:"5px 5px"}} contentEditable="false">Discounted Price.</span>
          </div>
        
          <div style={{display:"flex",marginTop:"10px"}}>
          <span style={{padding:"5px 5px"}} contentEditable="false">₹</span> 
          <input type="text" style={{width:"20%",overflowX:"scroll",background:"#eee",padding:"5px 5px"}} contentEditable="true" placeholder={ogprice} value={ogprice} onChange={(e)=>{setogprice(e.target.value)}} />  <span style={{padding:"5px 5px"}} contentEditable="false">Original Price.</span>
          </div>
          
          {boldavail==false?<div></div>:<div style={{display:"flex",marginTop:"10px"}}>
          <span style={{padding:"5px 5px"}} contentEditable="false">₹</span> 
          <input type="text" style={{width:"20%",overflowX:"scroll",background:"#eee",padding:"5px 5px"}} contentEditable="true" placeholder={bold} value={bold} onChange={(e)=>{setBold(e.target.value)}} />  <span style={{padding:"5px 5px"}} contentEditable="false">Price for premium members.</span>
          </div>}

          <div style={{display:"flex",marginTop:"10px"}}>
          <input type="text" style={{width:"20%",overflowX:"scroll",background:"#eee",padding:"5px 5px"}} contentEditable="true" placeholder={offer} value={offer} onChange={(e)=>{setOffer(e.target.value)}} />  <span style={{padding:"5px 5px"}} contentEditable="false">% off</span>
          </div>
        </ListGroup.Item>
        <ListGroup.Item>
        <div style={{display:"flex"}}>
          <p style={{fontWeight:"bold"}}>Current Category :- <span style={{marginRight:"20px",fontWeight:"normal"}} >
             {category} 
          </span>   </p>
          </div>
          <Form.Select aria-label="Default select example" size='sm'  value={category} onChange={(e)=>{setnewCategory(e.target.value)}}>
      <option>select menu to select new category</option>
      <option value="one">One</option>
      <option value="two">Two</option>
      <option value="three">thress</option>
    </Form.Select>
        </ListGroup.Item>
      </ListGroup>
    </Card>
      </Modal.Body>
      <Modal.Footer>
      <Button variant='danger'>Change details</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AdminProductEdit;


