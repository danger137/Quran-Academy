"use client";
import "./Home.css";
import { motion, useAnimation } from 'framer-motion';
import Link from "next/link";
import { useEffect, useState } from 'react';

export default function Home(){

  const images = [
    "/images.jpg",
    "/maxresdefault-1024x576.jpg",
    "/1280px-Sultan_Omar_Ali_Saifuddin_Mosque_02-1024x682.jpg",
    "/download.jpg"
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



return <div>

<div className="slider-container" style={{  position: 'relative', width: '100%', height: 'auto' }}>
  <motion.div
    key={currentIndex}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    style={{ width: '100%', position: 'relative' }}
  >
    <img style={{ width: '100%' }} src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
    <button
    id="btn"
      onClick={prevSlide}
      className="prev-button"
    >
    <i class="fa-solid fa-circle-chevron-left"></i>
    </button>
    <button
      onClick={nextSlide}
      className="next-button"
      id="btn"
    >
     <i class="fa-solid fa-circle-chevron-right"></i>
    </button>
  </motion.div>
</div>
<div className="d-flex flex-column flex-md-row mt-4 justify-content-center align-items-center text-center">
  <hr
    style={{
      border: "1px solid #000",
      width: "100%",
      maxWidth: "35%",
      margin: "0.5rem 0",
    }}
  />
  <h5
    style={{ color: "#629cb2", whiteSpace: "nowrap" }}
    className="mx-2 pt-1"
  >
    Introduction
  </h5>
  <hr
    style={{
      border: "1px solid #000",
      width: "100%",
      maxWidth: "35%",
      margin: "0.5rem 0",
    }}
  />
</div>


<div className="d-flex flex-column flex-md-row mt-5 justify-content-center align-items-center text-center">
  <h4 style={{ color: "#629cb2", margin: "0" }}>Dawat-e-Islami</h4>
</div>

<div className="text-center mt-3 pt-2">
  <p className="px-3" style={{ lineHeight: "1.6" }}>
    In every era, Allah عزوجل sent such holy personalities to the Ummah of His beloved and blessed Prophet (May Peace and blessing of Allah be upon him) who excellently <br></br>
    fulfilled the responsibility of calling people towards righteousness and preventing them from misdeeds. These righteous saints inculcated in other Muslims the mindset that:
  </p>
</div>

<div className="mt-5 d-flex justify-content-center">
  <button
    style={{ background: "#629cb2", color: "white" }}
    className="btn btn-sm px-4 py-2 border-0"
  >
    Read More
  </button>
</div>


<div className="d-flex flex-column flex-md-row mt-3 justify-content-center align-items-center text-center">
  <hr
    style={{
      border: "1px solid #000",
      width: "100%",
      maxWidth: "35%",
      margin: "0.5rem 0",
    }}
  />
  <h5
    style={{ color: "#629cb2", whiteSpace: "nowrap" }}
    className="mx-2 pt-1"
  >
    Services
  </h5>
  <hr
    style={{
      border: "1px solid #000",
      width: "100%",
      maxWidth: "35%",
      margin: "0.5rem 0",
    }}
  />
</div>

<div className="d-flex flex-column flex-md-row justify-content-center gap-5 mt-4">
  <div className="text-center">
    <img
      src="https://www.dawateislamiusa.com/wp-content/uploads/2022/02/Istahkhara.jpg"
      className="img-fluid"
      alt="Istikhara"
    />
    <div className="d-flex justify-content-center">
      <button
        style={{ background: "#629cb2", color: "white" }}
        className="btn btn-sm px-4 py-2 border-0 mt-3"
      >
        Istikhara
      </button>
    </div>
  </div>

  <div className="text-center">
    <img
      src="https://www.dawateislamiusa.com/wp-content/uploads/2022/02/Ruhani-Ilaj.jpg"
      className="img-fluid"
      alt="Ruhani Ilaj"
    />
    <div className="d-flex justify-content-center">
      <button
        style={{ background: "#629cb2", color: "white" }}
        className="btn btn-sm px-4 py-2 border-0 mt-3"
      >
        Roohani Ilaj
      </button>
    </div>
  </div>

  <div className="text-center">
    <img
      src="https://www.dawateislamiusa.com/wp-content/uploads/2022/02/Istahkhara-1.jpg"
      className="img-fluid"
      alt="Kaat"
    />
    <div className="d-flex justify-content-center">
      <button
        style={{ background: "#629cb2", color: "white" }}
        className="btn btn-sm px-4 py-2 border-0 mt-3"
      >
        Kaat
      </button>
    </div>
  </div>
</div>



<div className="d-flex flex-column flex-md-row mt-3 justify-content-center gap-5 mt-5 text-center">
  <div>
    <div className="circle d-flex justify-content-center align-items-center mx-auto">
      <i id="icon2" className="fa-solid fa-shield-halved"></i>
    </div>
    <div className="mt-4">
      <h3 style={{ color: "#629cb2" }}>Update</h3>
      <p className="px-3">
        Here you will get to know all the updates and latest happenings of the
        website of Dawat-e-Islami, a global non-political movement of preaching
        the holy Quran and Sunnah.
      </p>
    </div>
  </div>

  <div>
    <div className="circle d-flex justify-content-center align-items-center mx-auto">
      <i id="icon2" className="fa-regular fa-user"></i>
    </div>
    <div className="mt-4">
      <h3 style={{ color: "#629cb2" }}>Volunteer</h3>
      <p className="px-3">
        Become a volunteer of Dawat-e-Islami and earn bundles of rewards by
        taking part in the noble work of this unparalleled movement of Quran and
        Sunnah.
      </p>
    </div>
  </div>

  <div>
    <div className="circle d-flex justify-content-center align-items-center mx-auto">
      <i id="icon2" className="fa-solid fa-award"></i>
    </div>
    <div className="mt-4">
      <h3 style={{ color: "#629cb2" }}>Careers</h3>
      <p className="px-3">
        Dawat-e-Islami is also providing job opportunities in more than 100
        departments. Be a part of our team if you want to make career growth.
      </p>
    </div>
  </div>

  <div>
    <div className="circle d-flex justify-content-center align-items-center mx-auto">
      <i id="icon2" className="fa-solid fa-download"></i>
    </div>
    <div className="mt-4">
      <h3 style={{ color: "#629cb2" }}>Download</h3>
      <p className="px-3">
        You can download various Islamic Apps, Videos, Books, and all the latest
        added media from the website of Dawat-e-Islami.
      </p>
    </div>
  </div>
</div>
<div 
  style={{
    backgroundImage: "url('/Shiraz-Mosque.jpg')", // Replace with the correct path to your mosque image
    backgroundSize: "cover",
    backgroundPosition: "center top",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed", // This creates the parallax effect
    height: "300px",
    position: "relative",
  }} 
  className="mt-5 d-flex flex-column flex-md-row justify-content-center align-items-center text-center"
>
  {/* Light Overlay */}
  <div 
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(255, 255, 255, 0.5)", // Light overlay with 50% opacity
      zIndex: 1,
    }}
  />

  {/* Text Content */}
  <div style={{ zIndex: 2 }}>
    <h4 
      style={{ color: "#629cb2" }} 
      className="mt-4 mt-md-0 align-items-center"
    >
      Aim of Dawat-e-Islami
    </h4>
    <h5 
      className="mt-4 align-items-center"
    >
      I must strive to reform myself and people of the Entire World!
    </h5>
  </div>
</div>
<div className="d-flex flex-column flex-md-row mt-3 justify-content-center align-items-center text-center">
  <hr
    style={{
      border: "1px solid #000",
      width: "100%",
      maxWidth: "35%",
      margin: "0.5rem 0",
    }}
  />
  <h5
    style={{ color: "#629cb2", whiteSpace: "nowrap" }}
    className="mx-2 pt-1"
  >
    Islam
  </h5>
  <hr
    style={{
      border: "1px solid #000",
      width: "100%",
      maxWidth: "35%",
      margin: "0.5rem 0",
    }}
  />
</div>

<div className="container mt-5">
  <div className="row justify-content-center">
  <div className="col-md-3 col-12 mb-4">
  <div className="text-center">
    <img className="img-fluid" src="http://www.dawateislamiusa.com/wp-content/uploads/2022/02/children-section.jpg" alt="Children Section" />
    <h5 className="mt-3">Children Section</h5>
    <div className="d-flex justify-content-center mt-2">
      <Link href="/Child" id="cir" className="justify-content-center align-items-center">
        <i style={{color:"black"}}  className="fa-solid fa-arrow-right mt-2 "></i>
      </Link>
    </div>
  </div>
</div>

    <div className="col-md-3 col-12 mb-4">
      <div className="text-center">
        <img className="img-fluid" src="http://www.dawateislamiusa.com/wp-content/uploads/2022/02/understanding-islam.jpg" alt="Understanding Islam" />
        <h5 className="mt-3">Understanding Islam</h5>
        <div className="d-flex justify-content-center mt-2">
      <Link href="/Understand" id="cir" className="justify-content-center align-items-center">
        <i style={{color:"black"}}  className="fa-solid fa-arrow-right mt-2 "></i>
      </Link>
    </div>
      </div>
    </div>
    <div className="col-md-3 col-12 mb-4">
    <div className="text-center">
    <img className="img-fluid" src="http://www.dawateislamiusa.com/wp-content/uploads/2022/02/pillars-of-islam.jpg" alt="Pillars of Islam" />
    <h5 className="mt-3">Pillars of Islam</h5>
    <div className="d-flex justify-content-center mt-2">
      <Link href="/Pillars" id="cir" className="justify-content-center align-items-center">
        <i style={{color:"black"}}  className="fa-solid fa-arrow-right mt-2 "></i>
      </Link>
    </div>
  </div>
    </div>
    <div className="col-md-3 col-12 mb-4">
  <div className="text-center">
    <img className="img-fluid" src="http://www.dawateislamiusa.com/wp-content/uploads/2022/02/new-muslim-corner.jpg" alt="New Muslim Corner" />
    <h5 className="mt-3">New Muslim Corner</h5>
    <div className="d-flex justify-content-center mt-2">
      <Link href="/Corner" id="cir" className="justify-content-center align-items-center">
        <i style={{color:"black"}}  className="fa-solid fa-arrow-right mt-2 "></i>
      </Link>
    </div>
  </div>
</div>

  </div>
</div>

<div className="d-flex flex-column flex-md-row mt-5 justify-content-center align-items-center text-center">
  <hr
    style={{
      border: "1px solid #000",
      width: "100%",
      maxWidth: "35%",
      margin: "0.5rem 0",
    }}
  />
  <h5
    style={{ color: "#629cb2", whiteSpace: "nowrap" }}
    className="mx-2 pt-1"
  >
    Madani Pearls
  </h5>
  <hr
    style={{
      border: "1px solid #000",
      width: "100%",
      maxWidth: "35%",
      margin: "0.5rem 0",
    }}
  />
</div>
<div className="container mt-5 ">
  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 g-3">
    <div className="col position-relative">
      <div className="image-overlay">
        <img src="https://www.dawateislamiusa.com/wp-content/uploads/2022/02/the-madani-news-of-dawateislami-150x150.jpg" className="img-fluid" alt="Madani News" />
        <div className="overlay-text pt-5">Madani News of Dawat e Islami</div>
      </div>
    </div>
    <div className="col position-relative">
      <div className="image-overlay">
        <img src="https://www.dawateislamiusa.com/wp-content/uploads/2022/02/blessing-of-quran-150x150.jpg" className="img-fluid" alt="Blessing of Quran" />
        <div className="overlay-text pt-5 ">Blessing of Quran</div>
      </div>
    </div>
    <div className="col position-relative">
      <div className="image-overlay">
        <img src="https://www.dawateislamiusa.com/wp-content/uploads/2022/02/to-veil-or-not-to-veil-150x150.jpg" className="img-fluid" alt="To Veil or Not to Veil" />
        <div className="overlay-text pt-5 ">To Veil or Not To Veil</div>
      </div>
    </div>
    <div className="col position-relative">
      <div className="image-overlay">
        <img src="https://www.dawateislamiusa.com/wp-content/uploads/2022/02/wake-up-before-its-too-late-150x150.jpg" className="img-fluid" alt="Wake Up Before It's Too Late" />
        <div className="overlay-text pt-5 ">Wake Up Before its too Late</div>
      </div>
    </div>
    <div className="col position-relative">
      <div className="image-overlay">
        <img src="http://www.dawateislamiusa.com/wp-content/uploads/2022/02/friends-of-Allah-150x150.jpg" className="img-fluid" alt="Friends of Allah" />
        <div className="overlay-text pt-5 ">Friends of Allah</div>
      </div>
    </div>
    <div className="col position-relative">
      <div className="image-overlay">
        <img src="http://www.dawateislamiusa.com/wp-content/uploads/2022/02/evils-of-society-150x150.jpg" className="img-fluid" alt="Evils of Society" />
        <div className="overlay-text pt-5 ">Evils of Society</div>
      </div>
    </div>
  </div>
</div>
<div 
  style={{
    backgroundImage: "url('/Shiraz-Mosque.jpg')", // Replace with the correct path to your mosque image
    backgroundSize: "cover",
    backgroundPosition: "center top",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed", // Creates the parallax effect
    height: "300px",
    position: "relative",
    color: "white", // Ensure text color is white for contrast
  }} 
  className="mt-5 d-flex flex-column flex-md-row justify-content-center align-items-center text-center"
>
  {/* Dark Overlay */}
  <div 
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay with 50% opacity
      zIndex: 1,
    }}
  />

  <div className="container position-relative" style={{ zIndex: 2 }}>
    <div className="row h-100">
      {/* Text Column */}
      <div className="col-md-6 d-flex align-items-center">
        <div>
          <h2 className="mt-4 mt-md-0">Get in Touch With Us</h2>
          <p>
            If you have any questions or need further information, please do not hesitate to contact us. We are here to help you!
          </p>
        </div>
      </div>

      {/* Map Column */}
      <div className="col-md-6">
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
<div className="d-flex flex-column flex-md-row mt-5 justify-content-center align-items-center text-center">
  <hr
    style={{
      border: "1px solid #000",
      width: "100%",
      maxWidth: "35%",
      margin: "0.5rem 0",
    }}
  />
  <h5
    style={{ color: "#629cb2", whiteSpace: "nowrap" }}
    className="mx-2 pt-1"
  >
    Media
  </h5>
  <hr
    style={{
      border: "1px solid #000",
      width: "100%",
      maxWidth: "35%",
      margin: "0.5rem 0",
    }}
  />
</div>
<div className="container mt-3" style={{ maxWidth: "100%", overflowX: "hidden" }}>
  <div className="row row-cols-1 row-cols-md-2 g-5">
    {/* First Item */}
    <div className="col d-flex flex-column align-items-center text-center">
      <img
        className="img-fluid"
        style={{ maxWidth: "100%", height: "auto" }}
        src="http://www.dawateislamiusa.com/wp-content/uploads/elementor/thumbs/01-pjmasb1z7dnshlytj6hj5tcpngm22m9a6u6vqqfuuo.jpg"
        alt="Sunnah Inspired Speeches"
      />
      <h6 className="mt-3" style={{ color: "#629cb2" }}>
        Sunnah Inspired Speeches (Bayanat)
      </h6>
      <p className="small">
        The collection of thought-provoking and reforming speeches by various speakers of Dawat-e-Islami.
      </p>
      <Link
        href="/Videos"
        style={{ background: "#629cb2", color: "white" }}
        className="btn btn-sm px-4 py-2 border-0 mt-1"
      >
        Read More
      </Link>
    </div>

    {/* Second Item */}
    <div className="col d-flex flex-column align-items-center text-center">
      <img
      
        className="img-fluid"
        style={{ maxWidth: "100%", height: "280px" }}
        src="/WhatsApp Image 2024-09-13 at 16.17.04.jpeg"
        alt="Madani Muzakra"
      />
      <h6 className="mt-3" style={{ color: "#629cb2" }}>
        Madani Muzakra (Subtitled In English)
      </h6>
      <p className="small">
        Teaching Sessions with the founder of Dawat-e-Islami, the spiritual guide, Amir-E-Ahlessunnat.
      </p>
      <Link
        href="/Videos"
        style={{ background: "#629cb2", color: "white" }}
        className="btn btn-sm px-4 py-2 border-0 mt-1"
      >
        Read More
      </Link>
    </div>
  </div>
</div>



<div className="d-flex flex-column flex-md-row mt-4 justify-content-center align-items-center text-center">
  <hr
    style={{
      border: "1px solid #000",
      width: "100%",
      maxWidth: "35%",
      margin: "0.5rem 0",
    }}
  />
  <h5
    style={{ color: "#629cb2", whiteSpace: "nowrap" }}
    className="mx-2 pt-1"
  >
    Activities In USA
  </h5>
  <hr
    style={{
      border: "1px solid #000",
      width: "100%",
      maxWidth: "35%",
      margin: "0.5rem 0",
    }}
  />
</div>
<div className="container mt-3" style={{ overflowX: "hidden" }}>
  <div className="row row-cols-1 row-cols-md-2 g-5">
    {/* First Item */}
    <div className="col d-flex flex-column align-items-center text-center">
      <img
        className="img-fluid"
        style={{ maxWidth: "100%", height: "auto" }}
        src="http://www.dawateislamiusa.com/wp-content/uploads/2022/01/madani-qafila-1.jpg"
        alt="Madani Qafila"
      />
      <h5 className="mt-4 mt-md-5" style={{ color: "#629cb2" }}>
        Madani Qafila Activity Details
      </h5>
    </div>

    {/* Second Item */}
    <div className="col d-flex flex-column align-items-center text-center">
      <img
        className="img-fluid"
        style={{ maxWidth: "100%", height: "auto" }}
        src="http://www.dawateislamiusa.com/wp-content/uploads/2022/01/Madani-jamat-1.jpg"
        alt="Madani Inamaat"
      />
      <h5 className="mt-3 mt-md-4" style={{ color: "#629cb2" }}>
        Madani Inamaat Details
      </h5>
    </div>
  </div>
</div>



















</div>



}

