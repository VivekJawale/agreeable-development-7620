import React from 'react'
import Slider from '../Components/Slider'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Physician from '../assets/boxes/physician.png'
import Boy from '../assets/boxes/boy-refer.svg'
import PageSlider from '../Components/PageSlider';
import PageSlider2 from '../Components/PageSlider2';
import PageSlider3 from '../Components/PageSlider3';
import PageSlider4 from '../Components/PageSlider4';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
        <Slider/>
        <PageSlider/>
        <PageSlider2/>
        <PageSlider3/>
        <PageSlider4/>
        <Container className='mt-5 mb-5'>
            <Row className='assistance-section'>
              <Col className='two-box-assist'>
                <div className='upper-box'>
                    <div>
                          <h1>HK Premium</h1>
                          <p>Earn extra HK Cash & Enjoy more discounts and deals than anyone else!</p>
                          <button>Be a Part Now!</button>
                    </div>
                    <div> 
                      <img src="https://static1.hkrtcdn.com/hknext/static/media/common/misc/subscribe.svg" alt="" />
                    </div>
                </div>
                <div className='lower-box'>
                    <div>
                          <h1>Refer & Earn</h1>
                          <p>Tell your friends to shop at HealthKart. They get Rs.200 off when they shop with us the 1st time & you get Rs. 200 off on your next order.</p>
                          <a href='#'> Refer Now </a>
                    </div>
                    <div> 
                      <img src={Boy} alt="" />
                    </div>
                </div>
              </Col>
              <Col>
                <div className='single-appoint'>
                      <div> 
                          <h1>Instance Assistance</h1>
                          <h3>Wish to seek advise from nutritionists and dietitians?</h3>
                          <button>Book an Appointment</button>
                          <p><span style={{color:'red'}}>*</span>Get your customized nutrition and lifestyle plan</p>
                      </div>
                      <div>
                          <img src={Physician} alt="" srcset="" />
                      </div>
                  </div>
              </Col>
            </Row>
        </Container>

        <Footer/>
    </div>
  )
}

export default Home
