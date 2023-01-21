import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

const PersonalInfo = () => {
  return (
    <div>
        <Container>
            <Row className='mt-2'>
                <Col>
                <div className='info-head'>
                    <h2>Personal Information</h2>
                </div>
                    <div className='pinfo-area'>
                            <div><span className='name-badge'>R</span></div>
                            <div className='info-details'>
                                    <div>
                                        <h5>Robert Stark</h5>
                                        <p className='edit-tab'>Edit</p>
                                    </div>
                                    <p>devshubham.work4u@gmail.com</p>
                                    <p>Male</p>
                                    <p>9870201948</p>
                            </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default PersonalInfo
