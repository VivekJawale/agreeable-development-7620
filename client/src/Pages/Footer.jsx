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
                          <li><a href='='>About Us</a></li>
                          <li><a href='='>Contact Us</a></li>
                          <li><a href='='>Refer & Earn</a></li>
                          <li><a href='='>Loyalty Program</a></li>
                          <li><a href='='>HK Consult</a></li>
                          <li><a href='='>Blogs, Videos & More</a></li>
                          <li><a href='='>Brand Directory</a></li>
                          <li><a href='='>Authenticity Guaranteed</a></li>
                          <li><a href='='>Careers</a></li>
                      </ul>
                </Col>
                <Col className='footerlists' xs={2} lg={1} >
                      <h6>Brands</h6>
                      <ul className='brands-list'>
                          <li><a href='='>MuscleBlaze</a></li>
                          <li><a href='='>Fit Foods</a></li>
                          <li><a href='='>HK Vitals</a></li>
                          <li><a href='='>TrueBasics</a></li>
                          <li><a href='='>Gritzo</a></li>
                          <li><a href='='>bGREEN</a></li>
                      </ul>
                </Col>
                <Col className='footerlists' xs={3} lg={2} >
                      <h6>Health & Fitness</h6>
                      <ul>
                          <li><a href='='>Bodybuilding</a></li>
                          <li><a href='='>Hair & Skin Care</a></li>
                          <li><a href='='>Sports Nutrition</a></li>
                          <li><a href='='>Vitamins & Supplements</a></li>
                          <li><a href='='>Ayurveda & Herbs</a></li>
                          <li><a href='='>Health Food & Drinks</a></li>
                          <li><a href='='>Fitness</a></li>
                          <li><a href='='>Wellness</a></li>
                      </ul>
                </Col>
                <Col className='footerlists' xs={3} lg={2} >
                      <h6>Quick Links</h6>
                      <ul>
                          <li><a href='='>My Account</a></li>
                          <li><a href='='>Track Your Order</a></li>
                          <li><a href='='>Store Locator</a></li>
                          <li><a href='='>HK Cash</a></li>
                          <li><a href='='>HK Coupons</a></li>
                          <li><a href='='>FAQs</a></li>
                          <li><a href='='>Sell On HealthKart</a></li>
                      </ul>
                </Col>
                <Col className='footerlists' xs={3} lg={2} >
                      <h6>Contact Us</h6>
                      <ul>
                          <li><a href='='>care@healthkart.com</a></li>
                          <li><a href='='>0124-4616444</a></li>
                          <li><a href='='>The Presidency Tower, Tower-B, 2nd Floor, 46/4, Mehrauli Rd opp. 
                              government girls college, Anamika Enclave, Sector 14, Gurugram, Haryana</a>
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
