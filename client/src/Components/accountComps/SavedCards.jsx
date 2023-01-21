import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import savedSvg from '../../assets/misc/no_saved_card_logo.png'
const SavedCards = () => {
  return (
    <div>
        <Container>
            <Row className='mt-4'>
                <Col>
                <div className='area-head'>
                    <h2 className='user-wish'>Saved Cards</h2>
                    {/* <p className='continue-shop'>Continue Shopping</p> */}
                </div>
                    <div className='orders-area'>
                            <div className='svg-order'>
                                <img src={savedSvg} className='payment-img' alt="wislist-search" />
                            </div>
                            <h2 className='user-wish m-auto'>Payment Methods</h2>
                            <p className='m-auto mb-3 mt-4'>You haven’t saved any card , try adding New card for faster checkout</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default SavedCards
