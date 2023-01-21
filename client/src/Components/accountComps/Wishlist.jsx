import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import wishlistSvg from '../../assets/misc/empty_wishlist_new.svg'
const Wishlist
 = () => {
  return (
    <div>
        <Container>
            <Row className='mt-4'>
                <Col>
                <div className='area-head'>
                    <h2 className='user-wish'>User's Wishlist</h2>
                    <p className='continue-shop'>Continue Shopping</p>
                </div>
                    <div className='orders-area'>
                            <div className='svg-order'>
                                <img src={wishlistSvg} alt="wislist-search" />
                            </div>
                            <p className='m-auto mb-5'>You have not added any product in your wishlist. </p>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Wishlist

