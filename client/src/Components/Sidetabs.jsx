import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import React from 'react'
import {GiCardboardBoxClosed} from 'react-icons/gi'
import {FaUser} from 'react-icons/fa'
import {FaMapMarkerAlt} from 'react-icons/fa'
import {IoWalletSharp} from 'react-icons/io5'
import {BiRupee} from 'react-icons/bi'
import {AiTwotoneCrown} from 'react-icons/ai'
import {FaHeart} from 'react-icons/fa'
import {BsFillTagsFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
// import { Link, NavLink } from 'react-router-dom';

const Sidetabs = () => {
  return (
    <div>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                    <Nav.Item >
                         <Nav.Link eventKey="myorders">
                        <div className='tabs-box'>
                            <span><GiCardboardBoxClosed/></span>
                            <p className='side-title'> My Orders</p>
                        </div> 
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                         <Nav.Link eventKey="pinfo">
                        <div className='tabs-box'>
                            <span><FaUser/></span>
                            <p className='side-title'> Personal Information</p>
                        </div>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                         <Nav.Link eventKey="address">
                        <div className='tabs-box'>
                            <span><FaMapMarkerAlt/></span>
                            <p className='side-title'> Address</p>
                        </div>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                         <Nav.Link eventKey="hkcash">
                        <div className='tabs-box'>
                            <span>
                                {/* <GiCardboardBoxClosed/> */}
                                <svg width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_10385_64590)"><circle cx="16" cy="16" r="16" fill="#FF8914"></circle><circle cx="15.999" cy="16.0009" r="14.6826" fill="#FF8914" stroke="white"></circle><path d="M14.0439 12.1996V15.8116H9.21992V12.1996H8.01992V20.5996H9.21992V16.8556H14.0439V20.5996H15.2439V12.1996H14.0439ZM23.8302 20.5996H25.2342L21.4182 15.9796L25.0062 12.1996H23.6382L19.0782 16.8916V12.1996H17.8782V20.5996H19.0782V18.4276L20.6142 16.8676L23.8302 20.5996Z" fill="white"></path></g><defs><clipPath id="clip0_10385_64590"><rect width="32" height="32" fill="white"></rect></clipPath></defs></svg>
                            </span>
                            <p className='side-title'> HK Cash</p>
                        </div>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                         <Nav.Link eventKey="savecards" >
                            <div className='tabs-box'>
                                <span><IoWalletSharp/></span>
                                <p className='side-title'>Saved Cards</p>
                            </div>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                         <Nav.Link eventKey="referearn" >
                        <div className='tabs-box'>
                            <span><BiRupee/></span>
                            <p className='side-title'>Refer & Earn</p>
                        </div>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                         <Nav.Link eventKey="loyalty" >
                        <div className='tabs-box'>
                            <span><AiTwotoneCrown/></span>
                            <p className='side-title'>Loyalty</p>
                        </div>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                         <Nav.Link eventKey="wishlist" >
                        <div className='tabs-box'>
                            <span><FaHeart/></span>
                            <p className='side-title'>My Wishlist</p>
                        </div>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                         <Nav.Link eventKey="subs" >
                        <div className='tabs-box'>
                            <span><BsFillTagsFill/></span>
                            <p className='side-title'>Subcription</p>
                        </div>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                         <Nav.Link eventKey="logout" >
                        <div className='tabs-box'>
                            <span><FiLogOut/></span>
                            <p className='side-title'>Logout</p>
                        </div>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                </Col>
                <Col sm={9}>
                <Tab.Content>
                    <Tab.Pane eventKey="myorders">
                            hare    
                    </Tab.Pane>
                    <Tab.Pane eventKey="pinfo">
                            krishna
                    </Tab.Pane>
                    <Tab.Pane eventKey="address">
                            hare    
                    </Tab.Pane>
                    <Tab.Pane eventKey="hkcash">
                            krishna
                    </Tab.Pane>
                    <Tab.Pane eventKey="savedcards">
                            hare    
                    </Tab.Pane>
                    <Tab.Pane eventKey="referearn">
                            krishna
                    </Tab.Pane>
                    <Tab.Pane eventKey="loyalty">
                            hare    
                    </Tab.Pane>
                    <Tab.Pane eventKey="wishlist">
                            krishna
                    </Tab.Pane>
                    <Tab.Pane eventKey="subscription">
                            hare    
                    </Tab.Pane>
                    <Tab.Pane eventKey="logout">
                            krishna
                    </Tab.Pane>
                    
                </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    </div>
  )
}

export default Sidetabs