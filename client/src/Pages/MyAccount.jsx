import React from 'react'
import Sidetabs from '../Components/Sidetabs'
import Container from 'react-bootstrap/esm/Container'
import '../style.css'

const MyAccount = () => {
  return (
    <div className='account-options'>
        <Container className='account-section'>
            <Sidetabs />
        </Container>
    </div>
  )
}

export default MyAccount