"use client";
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import "./Contact.css";
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import SubscriptionForm from '../components/checkout/CheckoutForm';

export default function Contact(){

  useEffect(()=>{

    document.title = "Contact US";
 
 },[])


  const clientEmail = "bilalqari453@gmail.com";
  const clientPhoneNumber = "+923037476832";
    
  const images = [
   "/WhatsApp Image 2024-09-14 at 14.09.48.jpeg",
    "https://www.dawateislamiusa.com/wp-content/uploads/2020/07/02-300x225-1.jpeg",
    "/WhatsApp Image 2024-09-14 at 14.09.48.jpeg",
    "https://www.dawateislamiusa.com/wp-content/uploads/2020/07/02-300x225-1.jpeg",
  ];


  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const stripePromise = loadStripe("pk_test_51PycwuP0ebickvSnk2QWol9dU5s4BDsNkiUYF5KjoUnNgjcazHmbLTVz1T97SFNm14rRhFRgyeOL37J3yddbj66X00di2vs6Gq");
return <div>

<div className="d-md-flex" >
        <img style={{width:"100%"}} src="https://www.dawateislamiusa.com/wp-content/uploads/2022/02/inside_background-1-1536x681.jpg" ></img>
    
    </div>
    
    <div className="container mt-5">
  {/* Heading */}
  <h4 className="text-center text-md-start" style={{ color: "#629cb2" }}>
    {"Madrasa Husain ibne Ali razi Allah thala Anhu Centers > Home"}
  </h4>
</div>



{/* Main Content */}
<div className="container mt-5 bg-white">
  <div id="box" className="p-3">
    {/* Location Heading */}
    <div className="container mt-5">
  <div className="d-flex flex-column flex-md-row align-items-center justify-content-center">
    <h4
      style={{ color: "#629cb2", whiteSpace: "nowrap",fontSize:"1rem",fontWeight:"bolder" }}
      className="h4 text-center text-md-left"
    >
      Madrasa Husain ibne Ali razi Allah thala Anhu
    </h4>
  </div>
</div>



    {/* Address and Contact Information */}
    <p className="h6 mt-3 text-center text-md-left">
      Basti birani ko Sharif tahsil ahmedpur zila Bhawalpur
    </p>
    <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-4">
      <p className="h6 mt-3 text-center text-md-left">Phone: +923037476832</p>
 
      <a className="ph mt-2 pt-1" href="tel:+923037476832">Call Now</a>
      
 <div className='d-md-flex justify-content-center mt-2 ' >
    <a href='https://wa.me/923037476832' target='_blank'  >  <img style={{width:"52px",cursor:"pointer"}} src='data:image/jpeg;base64,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' ></img></a>
 <a href={`mailto:${clientEmail}`} className="email-link">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAArlBMVEX////08vLxQjbTLSnxNij3qqb39vb09vbxOy7RFg/0+fnYSkbSKSTuwsHxhH75+fnYQDvYTUr0/f7xLRvxPjLxsa/xKxjvVkzxNSbxiIPwMSDwRjrz5eTwOyzz3NvdNC3po6HRHBfyb2fPAAD40tDzk47yfXfydm/2vLnwZl7xmZX76OfwXlbwIgnwsK3vcWrz1tXnPTPyf3ntnprxUUb0wb7fa2jaXFrhenj4y8kd4RlCAAAEtElEQVR4nO2cC3OiSBSFB1Sa9EazC4iAYl4+M0k2j3Fm/P9/bBBjeF0UTK9sXc9XqZSpMp26J/dcDk0n374BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8D9iMp3N5u/WlfEfYE3ms7m/aLpEZczc0DTNYDkSmmoM+eBGa4fB8HvTVarBD/QYM+hahlqt5OjR2y7uhFdN16mC70/6DtcXSptLrmxnt7bXabpQFfS9T7H09mAslUkltJ6dLO3cNV2oCjptPVWS/Wwp0kqOh5mVH5suVAUZsXTd/ldTYUVD3jw56XWdQdOFqiAnlm7qk69bUWh3QXZZnmJFVnz46lXRmoRmflWeYkVXrscvRS5DTl0nvyZbsXTHWx1vRTEaeMSSLMS6uS1WFs353rGRy1p4hbaKeP2r6UJVcHPbotRq/zgqcgmRDlcJ15dcxGq9EuU57rOsPeflix5SWrVafMRqXVMVBnUjlyE7NmnB6Cdc/t10oSqIxWqRVjT1dZ08L0b5cPVhwc36jDqrpLkc96G6FeXazIerXVuxE4turihyVZvzZLjatRUbseKc9Xq9KeqVqNbxFlWsKMdkuNJ3vwhOYn04ZqkTRrJ78uCctxbEZHfsu8tErH+aLlQFKbFM31gSI7o9PBC5hDYjwpUZTiYXiVgsroYpscKetB6IyeO4N/usKF+GRLgK7jSre8HXhqEvNaus8jIrGtY7pe9TRwrBWSyzJzeemlOeckp2ucSo3LmsxQo3YkWt0g8oK06pOW9129Q14S2+DWctVtxZWlkO8AaFyCXE1C2+0QkW293DsxBLE2TC3IiQnezjAbEZloiaEYtddOh9to61LmwMb+w1S+1yGbJPhqvpp6IZsbhFh5RYmtSowR0OX3ZvoS8EoTNJuo+1DcOUWNGc71BWtN+384jeucpGDN5i+ZkJHoVNYiQFy0gPIclwZXcyz4VYi5W24dZpb+RtTNcaPVLhKr8TzVqsXGdt5vyCiFy67TvE9Hd7Ri6IsRYr31kbK5LPtYhp5dirwv3juUSHpOCSTb0c5CYh7+hQsGHcXGTkyrYVvf3M2oYh0VkadcojR9ldNmuxKBvGWPQjrg9KH5mdp1hR5PpBRK6tBcvPv52pWJoQb8T+gr7/Mf+5ilUWuVx/z9MM3tGBvBruSM5pJ98QpsJV8XLIOzrs66ztXwBkmitY7n8Cy9uGeztLyx1/PHyckrdY+ztLizexdpErs3MFsUh2p4rsef62+dzE8iucx5LjKHI5Qb/CCQjeYpV3Vmo4CdF7qnaGknd0qGDDDVa32ulc1tGh5EaaUKHi21jb8FB0qAlvsap2FsSCWIc5ZmZBLOrpjkKxzjU6HCUWt+iAmXUIiFWDU80sbmKhsw6BzqrBqToL0aGGWNyiAxL8ITCzaoAtmhogOtQAYtUA0aEGiA41QHSoAaJDDTDgawAb1gCdVYNVcBqxfjZdqAqu7JOIdb9qulAl9N0TiHXxq+kyFdEPAi/GflMt1v1tzMX976aLVMe6v+gvoo/1VYKR+px9VXid/jLD+Lkf02XyP7sBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKACfwAZ5n5tiGSRGAAAAABJRU5ErkJggg==" // Replace with the path to your email icon
          alt="Email Client"
          className="email-icon"
          style={{ cursor: "pointer", width: "100px"}}
        />
      </a>

      <a href={`sms:${clientPhoneNumber}`} className="sms-link">
        <img
          src="https://f-droid.org/repo/click.dummer.imagesms/en-US/icon_vEx24haDnhl_xAMJBvGiLHjyBiMdo9OAFxReEjGTsZI=.png" // Replace with the path to your SMS icon
          alt="Text Message"
          className="sms-icon"
          style={{ cursor: "pointer", width: "50px", height: "50px" }}
        />
      </a>
    </div>
    </div>
    <div className="d-flex justify-content-center mt-4">
   
    {/* <div className='d-flex justify-content-center'>
  <select className='py-1 text-center rounded-3' ref={cost} onChange={saveData}>
    <option>Select Courses</option>
    <option value="All Quran Course">All Quran Course - $30.00</option>
    <option value="Hafza Quran">Hafza Quran - $50.00</option>
    <option value="Quran with tafseer">Quran with tafseer - $50.00</option>
  </select>
</div> */}

</div>

<div className=" mt-4 bg-white ">
  <div className="row justify-content-center">
    <div className="col-12 col-md-6 d-flex justify-content-center">
      <Elements stripe={stripePromise}>
        <SubscriptionForm />
      </Elements>
    </div>
  </div>
</div>


    {/* Image Sliders */}
    <div className="row mt-5">
      <div className="col-12 col-md-6 mb-4">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{ width: '100%', position: 'relative' }}
        >
          <img style={{ width: '100%', height: 'auto' }} src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
          <button id="btn" onClick={prevSlide} className="prev-button">
            <i className="fa-solid fa-circle-chevron-left"></i>
          </button>
          <button onClick={nextSlide} className="next-button" id="btn">
            <i className="fa-solid fa-circle-chevron-right"></i>
          </button>
        </motion.div>
      </div>
      <div className="col-12 col-md-6 mb-4">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{ width: '100%', position: 'relative' }}
        >
          <img style={{ width: '100%', height: 'auto' }} src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
          <button id="btn" onClick={prevSlide} className="prev-button">
            <i className="fa-solid fa-circle-chevron-left"></i>
          </button>
          <button onClick={nextSlide} className="next-button" id="btn">
            <i className="fa-solid fa-circle-chevron-right"></i>
          </button>
        </motion.div>
      </div>
    </div>

    {/* Map Section */}
    <div className="mt-3">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.005473141674!2d-122.419418084681!3d37.774929279759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808f6d8d6e05%3A0x1e0b18e5d4e4e2b!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1633546748253!5m2!1sen!2sus"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Map"
      ></iframe>
    </div>
  </div>
</div>





</div>



}