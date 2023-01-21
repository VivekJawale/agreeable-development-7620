import React from 'react'
import React, { useEffect, useState } from 'react'
// import data from '../assets/data';
import Carousel from "react-multi-carousel";
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
import ProdCard from '../Components/ProdCard';
import pick1 from '../assets/misc/picks/bnr_2282232_o.webp'
import pick2 from '../assets/misc/picks/bnr_2282234_o.webp'
import pick3 from '../assets/misc/picks/bnr_2282236_o.webp'
import pick4 from '../assets/misc/picks/bnr_2282238_o.webp'
import dpick1 from '../assets/misc/picks/caraousel/bnr_2282266_o.webp'
import dpick2 from '../assets/misc/picks/caraousel/bnr_2282268_o.webp'
import dpick3 from '../assets/misc/picks/caraousel/bnr_2282270_o.webp'
import dpick4 from '../assets/misc/picks/caraousel/bnr_2282944_o.webp'
import dpick5 from '../assets/misc/picks/caraousel/bnr_2284726_o.webp'
import Navbar from './Navbar';
import SubNav from './SubNav';
import ProductCard from './Product-Pages/ProductCard';
import axios from 'axios';




const Home = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  
  const [data, setData]= useState([]);

  useEffect(()=>{
    if(data.length===0){
        getData();
    }
  }, [data.length])


  const getData= ()=>{
    return axios.get("https://lime-fawn-veil.cyclic.app/product")
        .then((r)=>setData(r.data))
        .catch((e)=>console.log(e));
    }




  console.log(data)
  return (
    <div>
        <Slider/>
          <Carousel
              className='prod-slider'
              swipeable={false}
              draggable={false}
              showDots={false}
              responsive={responsive}
              ssr={true}
              slidesToSlide={1}
              infinite={true}
              // autoPlay={this.props.deviceType !== responsive.mobile ? true : false}
              autoPlaySpeed={1000}
              keyBoardControl={true}
              customTransition=".5s"
              transitionDuration={500}
              containerClass="carousel-container"
              // removeArrowOnDeviceType={["tablet", "mobile"]}
              // deviceType={this.props.deviceType}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
          >
             {data && data.map((el)=>{
              return <div className='item'><ProductCard key={el.id} props={el} /></div>
            })}  

          </Carousel>

        <PageSlider/>

        <Container className='picks-section'>
            <Row>
                <div className='section-heads'>
                    <p>Picks You Can't Miss</p>
                </div>
            </Row>
            <Row>
                <Col lg={3}><img src={pick1} className='rounded pick-img' alt="" /></Col>
                <Col lg={3}><img src={pick2} className='rounded pick-img' alt="" /></Col>
                <Col lg={3}><img src={pick3} className='rounded pick-img' alt="" /></Col>
                <Col lg={3}><img src={pick4} className='rounded pick-img' alt="" /></Col>

            </Row>
        </Container>

        <PageSlider2/>

        <Carousel
              className='prod-slider'
              swipeable={false}
              draggable={false}
              showDots={false}
              responsive={responsive}
              ssr={true}
              slidesToSlide={1}
              infinite={true}
              // autoPlay={this.props.deviceType !== responsive.mobile ? true : false}
              autoPlaySpeed={1000}
              keyBoardControl={true}
              customTransition=".5s"
              transitionDuration={500}
              containerClass="carousel-container"
              // removeArrowOnDeviceType={["tablet", "mobile"]}
              // deviceType={this.props.deviceType}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
          >
            <div className='item'><ProdCard/></div>      
            <div className='item'><ProdCard/></div>      
            <div className='item'><ProdCard/></div>      
            <div className='item'><ProdCard/></div>      

          </Carousel>

        <Carousel
              className='prod-slider'
              swipeable={false}
              draggable={false}
              showDots={false}
              responsive={responsive}
              ssr={true}
              slidesToSlide={1}
              infinite={true}
              // autoPlay={this.props.deviceType !== responsive.mobile ? true : false}
              autoPlaySpeed={1000}
              keyBoardControl={true}
              customTransition=".5s"
              transitionDuration={500}
              containerClass="carousel-container"
              // removeArrowOnDeviceType={["tablet", "mobile"]}
              // deviceType={this.props.deviceType}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
          >
            <div className='item'>
              <img src={dpick1} className='rounded pick-img' alt="" />
            </div>      
            <div className='item'>
              <img src={dpick2} className='rounded pick-img' alt="" />
            </div>      
            <div className='item'>
              <img src={dpick3} className='rounded pick-img' alt="" />
            </div>      
            <div className='item'>
              <img src={dpick4} className='rounded pick-img' alt="" />
            </div>      
            <div className='item'>
              <img src={dpick5} className='rounded pick-img' alt="" />
            </div>   
          </Carousel>

        <PageSlider3/>

        <Carousel
              className='prod-slider'
              swipeable={false}
              draggable={false}
              showDots={false}
              responsive={responsive}
              ssr={true}
              slidesToSlide={1}
              infinite={true}
              // autoPlay={this.props.deviceType !== responsive.mobile ? true : false}
              autoPlaySpeed={1000}
              keyBoardControl={true}
              customTransition=".5s"
              transitionDuration={500}
              containerClass="carousel-container"
              // removeArrowOnDeviceType={["tablet", "mobile"]}
              // deviceType={this.props.deviceType}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
          >
            <div className='item'><ProdCard/></div>      
            <div className='item'><ProdCard/></div>      
            <div className='item'><ProdCard/></div>      
            <div className='item'><ProdCard/></div>      

          </Carousel>

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
