import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

const Subscription = () => {
  return (
    <div>
        <Container>
            <Row className='mt-2'>
                <Col>
                <div className='info-head'>
                    <h2>Subscription</h2>
                </div>
                    <div className='pinfo-area'>
                            <div className='info-details'>
                                    <p>Which of these promotions would you like to receive from us?</p>
                                    <p>Email</p>
                                    <p>SMS</p>
                                    <button className='update-pref'>Update My Preferences</button>
                            </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Subscription
