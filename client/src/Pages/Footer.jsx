import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import logo from '../assets/footer/hklogo.png'
import Return from '../assets/footer/Return.png'
import Secure from '../assets/footer/secure.png'
import Authen from '../assets/footer/authenticity.png'
import gplay from '../assets/footer/google-badge.svg'
import apple from '../assets/footer/app-store-new.svg'
import fb from '../assets/footer/facebook-new.svg'
import lin from '../assets/footer/LinkedIn-new.svg'
import yt from '../assets/footer/Youtube-new.svg'
import twi from '../assets/footer/twitter-new.svg'
import pin from '../assets/footer/pinterest-icon.svg'
import ins from '../assets/footer/Instagram-new.svg'
import pay1 from '../assets/footer/pay1.svg'
import pay2 from '../assets/footer/pay2.svg'
import pay3 from '../assets/footer/pay3.svg'
import pay4 from '../assets/footer/pay4.svg'
import pay5 from '../assets/footer/pay5.svg'
import pay6 from '../assets/footer/pay6.svg'

const Footer = () => {
  return (
    <div className='footer-section'>
        <Container>
            <img src={logo} alt="healthmart-logo" className='footer-logo' />
            <Row className='footer-row'>
                <Col className='footerlists' xs={3} lg={2} >
                      <h6>HealthMart</h6>
                      <ul>
                          <li>About Us</li>
                          <li>Contact Us</li>
                          <li>Refer & Earn</li>
                          <li>Loyalty Program</li>
                          <li>HK Consult</li>
                          <li>Blogs, Videos & More</li>
                          <li>Brand Directory</li>
                          <li>Authenticity Guaranteed</li>
                          <li>Careers</li>
                      </ul>
                </Col>
                <Col className='footerlists' xs={2} lg={1} >
                      <h6>Brands</h6>
                      <ul className='brands-list'>
                          <li>MuscleBlaze</li>
                          <li>Fit Foods</li>
                          <li>HK Vitals</li>
                          <li>TrueBasics</li>
                          <li>Gritzo</li>
                          <li>bGREEN</li>
                      </ul>
                </Col>
                <Col className='footerlists' xs={3} lg={2} >
                      <h6>Health & Fitness</h6>
                      <ul>
                          <li>Bodybuilding</li>
                          <li>Hair & Skin Care</li>
                          <li>Sports Nutrition</li>
                          <li>Vitamins & Supplements</li>
                          <li>Ayurveda & Herbs</li>
                          <li>Health Food & Drinks</li>
                          <li>Fitness</li>
                          <li>Wellness</li>
                      </ul>
                </Col>
                <Col className='footerlists' xs={3} lg={2} >
                      <h6>Quick Links</h6>
                      <ul>
                          <li>My Account</li>
                          <li>Track Your Order</li>
                          <li>Store Locator</li>
                          <li>HK Cash</li>
                          <li>HK Coupons</li>
                          <li>FAQs</li>
                          <li>Sell On HealthKart</li>
                      </ul>
                </Col>
                <Col className='footerlists' xs={3} lg={2} >
                      <h6>Contact Us</h6>
                      <ul>
                          <li>care@healthkart.com</li>
                          <li>0124-4616444</li>
                          <li>The Presidency Tower, Tower-B, 2nd Floor, 46/4, Mehrauli Rd opp. 
                              government girls college, Anamika Enclave, Sector 14, Gurugram, Haryana
                          </li>
                      </ul>
                </Col>
                <Col className='footerlists' xs={3} lg={3} >
                      <div className='subscribe'>
                            <h6 className='subs-head'>Subscribe</h6>
                            <form>
                                <input type="email" placeholder='Enter your email' name="" id="" className='email-sub' />
                                <input type="button" value="" className='button-sub' />
                            </form>
                            <p><span style={{color:'red'}}>*</span> Get newsletters and exclusive offers</p>
                            <div className='icons-box'>
                                <img src={Return} alt="process-badges" />
                                <img src={Authen} alt="process-badges" />
                                <img src={Secure} alt="process-badges" />
                            </div>
                            <p className='reach-labels'>Follow Us</p>
                            <div className='social-icons'>
                                  <img src={fb} alt="facebook" />
                                  <img src={ins} alt="instagram" />
                                  <img src={lin} alt="linkedin" />
                                  <img src={yt} alt="youtube" />
                                  <img src={twi} alt="twitter" />
                                  <img src={pin} alt="pinterest" />
                            </div>
                            <p className='reach-labels'>Download App</p>
                            <div className='download-plats'>
                                <img src={gplay} alt="playstore" />
                                <img src={apple} alt="apple" />
                            </div>
                      </div>
                </Col>
                <div className='payments'>
                      <img src={pay1} alt="" />
                      <img src={pay2} alt="" />
                      <img src={pay3} alt="" />
                      <img src={pay4} alt="" />
                      <img src={pay5} alt="" />
                      <img src={pay6} alt="" />

                </div>
            </Row>

            <Row>
              <Col>
                  <div className='footer-hr'></div>
              </Col>
            </Row>

            <Row className='bottom-footer'>
              <Col lg={5}>
                  <div className='copyright'>
                      <p>Copyright © 2023, HealthMart.com, or its affiliates</p>
                  </div>
              </Col>
              <Col lg={7}>
                  <div className='conditions'>
                      <p>Terms & Conditions</p>
                      <p className='divider'>|</p>
                      <p>Delivery Policy</p>
                      <p className='divider'>|</p>
                      <p>Privacy Policy</p>
                      <p className='divider'>|</p>
                      <p>Disclaimer</p>
                      <p className='divider'>|</p>
                      <p>Returns Policy</p>
                  </div>
              </Col>
            </Row>
        </Container>

    </div>
  )
}

export default Footer
