"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from 'framer-motion';
import "./online.css";
import Link from "next/link";




export default function Online(){



  const scriptURL = 'https://script.google.com/macros/s/AKfycbzG26b-cXqYUG_Lag-jVaYV2OSZMWrVTIP_43xz8yiN07OKxWA515UiuLDhtyg9dQ90/exec';
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;

    fetch(scriptURL, {
      method: 'POST',
      body: new FormData(form),
    })
      .then((response) => alert('Thank you! Your form is submitted successfully.'))
      .then(() => window.location.reload())
      .catch((error) => console.error('Error!', error.message));
  };



    const images = [
        "https://www.quranteacher.net/public_html/banner_images/hifz_quran.jpeg",
        "https://www.quranteacher.net/public_html/banner_images/madani_qaida.jpeg",
        "https://www.quranteacher.net/public_html/banner_images/islamic_scholor.jpeg",
        "https://www.quranteacher.net/public_html/banner_images/embrace.jpeg"
      ];

    const images2 = [
        "/WhatsApp Image 2024-09-13 at 16.17.04.jpeg",
        "/WhatsApp Image 2024-09-13 at 16.17.40.jpeg",
        "/WhatsApp Image 2024-09-13 at 16.17.04.jpeg",
        "/WhatsApp Image 2024-09-13 at 16.17.40.jpeg",
      
       
      ];
    const images3 = [
        "https://www.quranteacher.net/public_html/slide_image/03.jpg",
        "https://www.quranteacher.net/public_html/slide_image/02.jpg",
        "https://www.quranteacher.net/public_html/slide_image/03.jpg",
        "https://www.quranteacher.net/public_html/slide_image/02.jpg",
      
       
      ];
    
    
      const [currentIndex, setCurrentIndex] = useState(0);
      useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change slide every 5 seconds
    
        return () => clearInterval(intervalId); // Cleanup interval on component unmount
      }, []);
      const [currentIndex2, setCurrentIndex2] = useState(0);
      useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentIndex2((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change slide every 5 seconds
    
        return () => clearInterval(intervalId); // Cleanup interval on component unmount
      }, []);
      const [currentIndex3, setCurrentIndex3] = useState(0);
      useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentIndex3((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change slide every 5 seconds
    
        return () => clearInterval(intervalId); // Cleanup interval on component unmount
      }, []);
    
      const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      };
    
      const nextSlide2 = () => {
        setCurrentIndex2((prevIndex) => (prevIndex + 1) % images.length);
      };
      const nextSlide3 = () => {
        setCurrentIndex3((prevIndex) => (prevIndex + 1) % images.length);
      };
    
      const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      };
      const prevSlide2 = () => {
        setCurrentIndex2((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      };
      const prevSlide3 = () => {
        setCurrentIndex3((prevIndex) => (prevIndex - 1 + images.length) % images.length);
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


<div style={{background: "#54a5dc"}} className="d-md-flex justify-content-center  " >
    <div>
        <h1 style={{color:"white"}} >Welcome To Quran Teacher</h1>
    </div>

</div>
<div style={{background:" #4384b0"}} className="d-md-flex  justify-content-center  gap-5 " >
    <div>
        <h1   className="text-center me-5  " style={{color:"white"}} >60,000+</h1>
        <h6 className="text-center me-5 " >Pass Out Students</h6>
    </div>
    <div>
        <h1 className="text-center me-5 " style={{color:"white"}} >49+</h1>
        <h6 className="text-center me-5 " >Campuses</h6>
    </div>
    <div>
        <h1 className="text-center me-5 " style={{color:"white"}} >24,000+</h1>
        <h6 className="text-center me-5 " >Enrolled Students</h6>
    </div>
    <div>
        <h1 className="text-center me-5 " style={{color:"white"}} >12+</h1>
        <h6 className="text-center me-5 " >Years of Excellence</h6>
    </div>

</div>

<div className="container mt-5">
  <div className="row justify-content-center">
    <div className="col-12 col-md-6 mt-3">
      <p>
        We welcome our users to Online Quran teaching services where we are offering multiple Islamic as well as character building and life reformation courses as per the teachings of Sharia. Thousands of individuals have learned to read Quran with these online Quran classes service in Pakistan and many other countries of the globe. As Dawat-e-Islami is doing its services in more than 107 walks of life with the sole aim of propagating the teachings of Quran and Sunnah and this is another step for those Islamic brothers and sisters who are aged or busy in their worldly affairs but haven’t learned the proper recitation of Quran. We urged to all our Islamic brothers and sisters to take admission in this online Quran academy and learn to read Quran properly. Being a Muslim, it is our religious duty that we should not only recite Quran but also try to understand every word of it and if you are one of them who are unable to recite Quran properly then take admission in this online Quran teaching service and enlighten your heart with the sacred holy book of Almighty.
      </p>
    </div>
    <div className="col-12 col-md-6 mt-3">
      <video poster="https://www.quranteacher.net/public_html/thumb_video/thumbnail.jpg" className="w-100" controls src="https://data2.dawateislami.net/static/images/main-website/foa/intro-of-foa.mp4"></video>
    </div>
  </div>
</div>

<div style={{background:"#54a5dc"}} className="d-md-flex justify-content-center p-3 mt-5 " >
    <h1 style={{color:"white"}} className="text-center" >Courses</h1>

</div>
<div className="d-flex flex-column flex-md-row justify-content-center align-items-center mt-5">
  <h2 className="text-center text-md-start">First 2 Days Free Classes</h2>
</div>

<div className="d-flex flex-wrap justify-content-center mt-4 gap-5">
  <div className="card" style={{ width: "18rem" }}>
    <img
      src="https://www.quranteacher.net/public_html/course_images/tafseer_course.jpeg"
      className="card-img-top"
      alt="Tafseer Course"
    />
    <div className="card-body">
      <h5 className="card-title text-center">All Quran Course</h5>
      <p className="card-text small">
        We taught your child for 30 minutes, during which 20 minutes were spent on Qur’an class, 5 minutes on Kalma, and 5 minutes on religious teachings. There will be 5 classes per week and anyone from 4 years to 40 years can study.
      </p>
      <h5 className="h5 text-center">$30/Month</h5>
      <div className="d-flex justify-content-center">
        <Link href="/Contect" className="btn btn-sm px-4 py-2 border-0 mt-1" style={{ background: "#629cb2", color: "white" }}>
          Contact US
        </Link>
      </div>
    </div>
  </div>

  <div className="card" style={{ width: "18rem" }}>
    <img
      src="https://www.quranteacher.net/public_html/course_images/42tasawwuff-course.jpg"
      className="card-img-top"
      alt="Tasawuf Course"
    />
    <div className="card-body">
      <h5 className="card-title text-center">Hafza Quran</h5>
      <p className="card-text small">
        Memorization of the Qur'an with Tajweed, along with religious and Islamic teachings, and Salah (prayer). There will be 5 classes per week and anyone from 6 years to 25 years can study.
      </p>
      <h5 className="h5 text-center mt-4 pt-2">$50/Month</h5>
      <div className="d-flex justify-content-center">
        <Link href="/Contect" className="btn btn-sm px-4 py-2 border-0 mt-1" style={{ background: "#629cb2", color: "white" }}>
          Contact US
        </Link>
      </div>
    </div>
  </div>

  <div className="card" style={{ width: "18rem" }}>
    <img
      src="https://www.quranteacher.net/public_html/course_images/Fiqh.jpeg"
      className="card-img-top"
      alt="Fiqh Course"
    />
    <div className="card-body">
      <h5 className="card-title text-center">Quran with Tafseer</h5>
      <p className="card-text small">
        Qur'an with Tafseer, along with Islamic verses and information. There will be 5 classes per week and anyone from 10 years to 40 years can study.
      </p>
      <h5 className="h5 text-center mt-5 pt-1">$50/Month</h5>
      <div className="d-flex justify-content-center">
        <Link href="/Contect" className="btn btn-sm px-4 py-2 border-0 mt-1" style={{ background: "#629cb2", color: "white" }}>
          Contact US
        </Link>
      </div>
    </div>
  </div>
</div>



<div style={{background: "#54a5dc"}} className="d-md-flex justify-content-center  mt-5 p-3 " >
    <div>
        <h1 style={{color:"white"}} >Why Choose Quran Teacher</h1>
    </div>

</div>

<div className="mt-5 container">
  <div className="row d-flex justify-content-center">
    <div className="col-md-4 col-12 d-flex flex-column align-items-center text-center px-3">
      <div id="bg" className="image-container d-flex justify-content-center align-items-center">
        <img className="img-fluid" src="https://www.quranteacher.net/web_assets/images/whyChooseQuran/Expert-Quran-Tutor.png" alt="Expert Quran Tutor" />
      </div>
      <h4 className="mt-3">Expert Quran Tutor</h4>
      <p className="responsive-text small">
        All the classes of online Quran teaching are conducted by well-qualified Islamic scholars and expert Quran tutors who will teach you the recitation of Quran as per Arabic phonetics.
      </p>
    </div>

    <div className="col-md-4 col-12 d-flex flex-column align-items-center text-center px-3">
      <div id="bg" className="image-container d-flex justify-content-center align-items-center">
        <img className="img-fluid" src="https://www.quranteacher.net/web_assets/images/whyChooseQuran/We-value-our-students.png" alt="We Value Our Students" />
      </div>
      <h4 className="mt-3">We Value Our Students</h4>
      <p className="responsive-text small">
        We value each and every student and that is why every student is being taught by a teacher individually so that students can learn everything in an efficient manner.
      </p>
    </div>

    <div className="col-md-4 col-12 d-flex flex-column align-items-center text-center px-3">
      <div id="bg" className="image-container d-flex justify-content-center align-items-center">
        <img className="img-fluid" src="https://www.quranteacher.net/web_assets/images/whyChooseQuran/Male-&-Female-Teachers.png" alt="Male Female Teachers" />
      </div>
      <h4 className="mt-3">Male Female Teachers</h4>
      <p className="responsive-text small">
        We have many well qualified and expert male and female Quran tutors and as per the teachings of Sharia we offer separate teachers for male and females accordingly.
      </p>
    </div>
  </div>

  <div className="row d-flex justify-content-center align-items-center text-center mt-5">
  <div className="col-md-4 col-12 d-flex flex-column align-items-center text-center px-3">
    <div id="bg" className=" d-flex justify-content-center align-items-center">
      <img className="img-fluid" src="https://www.quranteacher.net/web_assets/images/whyChooseQuran/Flexible-Timings.png" alt="Flexible Timings" />
    </div>
    <h4 className="mt-3">Flexible Timings</h4>
    <p className="responsive-text small">
      We are online 24/7 so; Muslims from all around the world can select online Quran classes timing as per their conformity and availability.
    </p>
  </div>

  <div className="col-md-4 col-12 d-flex flex-column align-items-center text-center px-3 mt-4 mt-md-0">
    <div id="bg" className="image-container d-flex justify-content-center align-items-center">
      <img className="img-fluid" src="https://www.quranteacher.net/web_assets/images/whyChooseQuran/3-Days-Free-Trial.png" alt="3 Days Free Trial" />
    </div>
    <h4 className="mt-3">3 Days Free Trial</h4>
    <p className="responsive-text small">
      We have many years of experience in online Quran teaching, we value our clients and that's why we offer a free trial of 3-days so you can evaluate our teaching skills.
    </p>
  </div>

  <div className="col-md-4 col-12 d-flex flex-column align-items-center text-center px-3 mt-4 mt-md-0">
    <div id="bg2" className="image-container d-flex justify-content-center align-items-center">
      <img className="img-fluid" src="https://www.quranteacher.net/web_assets/images/whyChooseQuran/Certificate.png" alt="Certificate" />
    </div>
    <h4 className="mt-3">Certificate</h4>
    <p className="responsive-text small">
      We provide certificates to our students who successfully complete their online Quran courses.
    </p>
  </div>
</div>

</div>




<div style={{background: "#54a5dc"}} className="d-md-flex justify-content-center  mt-5 p-3 " >
    <div>
        <h1 style={{color:"white"}} className="text-center"  >images</h1>
    </div>

</div>

<div className="container mt-5">
  <div className="row justify-content-center  ">
    <div className="col-12 col-md-6 mb-4 mb-md-0 d-flex justify-content-center">
      <motion.div
        key={currentIndex2}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        style={{ width: '100%', height: 'auto', position: 'relative' }}
      >
        <img
          style={{ width: '100%', height: 'auto', maxHeight: '300px', objectFit: 'fill', border: '28px solid white' }}
          src={images2[currentIndex2]}
          alt={`Slide ${currentIndex2}`}
          className="img-fluid"
        />
      </motion.div>
    </div>

    <div className="col-12 col-md-6 d-flex justify-content-center">
      <motion.div
        key={currentIndex3}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        style={{ width: '100%', height: 'auto', position: 'relative' }}
      >
        <img
          style={{ width: '100%', height: 'auto', maxHeight: '300px', objectFit: 'cover', border: '28px solid white' }}
          src={images3[currentIndex3]}
          alt={`Slide ${currentIndex3}`}
          className="img-fluid"
        />
      </motion.div>
    </div>
  </div>
</div>


<div style={{background: "#54a5dc"}} className="d-md-flex justify-content-center  mt-5 p-3 " >
    <div>
        <h1 style={{color:"white"}}  className="text-center" >Videos</h1>
    </div>

</div>

<div className="d-flex flex-column flex-md-row justify-content-center gap-5 mt-5">
  <div className="d-flex justify-content-center mb-4 mb-md-0">
    <video
      poster="https://www.quranteacher.net/public_html/thumb_video/top_performer.jpeg"
      style={{ width: "100%", height: "auto", border: "28px solid white" }}
      controls
      src="https://www.quranteacher.net/public_html/videos/WhatsApp_Video_2023-11-20_at_12_09_04_PM_(1).mp4"
    ></video>
  </div>

  <div className="d-flex justify-content-center">
    <video
      poster="https://www.quranteacher.net/public_html/thumb_video/thumbnail22.png"
      style={{ width: "100%", height: "auto", border: "28px solid white" }}
      controls
      src="https://www.quranteacher.net/public_html/videos/NIKAH.mp4"
    ></video>
  </div>
</div>


<div style={{background: "#54a5dc"}} className="d-md-flex justify-content-center  mt-5 p-3 " >
    <div>
        <h1 style={{color:"white"}} className="text-center" >Testimonial</h1>
    </div>

</div>
<div className="d-flex justify-content-center mt-4">
  <p className="mx-3 mx-md-0" style={{ maxWidth: "75%" }}>
    I am doing Faizan-e-Namaz course for a few months and got to know about many mistakes which I was making in my Namaz. Now, I have learned Namaz in a proper manner as prescribed by Sharia.
  </p>
</div>


<div style={{background: "#54a5dc"}} className="d-md-flex justify-content-center  mt-5 p-3 " >
    <div>
        <h1 style={{color:"white"}} className="text-center" >Contact Us</h1>
    </div>

</div>

<div className="d-flex flex-column flex-md-row justify-content-center mt-5 gap-5 ">
<div className="text-center  ">
  <h4 className="h4">Connect To Quran Teacher</h4>
  <h6 className="h6 mt-2">(Faizan Online Academy)</h6>
  <h6 className="h6 mt-4">Address: Basti Birani Ko Sharif,</h6>
  <h6 className="h6">Tahsil Ahmedpur, Zila Bhawalpur</h6>
  <h6 className="h6 mt-4">Email: bilalqari453@gmail.com</h6>
  <h6 className="h6 mt-4">Pakistan: +923037476832</h6>
  <h6 className="h6 mt-4">Whatsapp: +923037476832</h6>
  <img className="mt-3 img-fluid" src="https://www.quranteacher.net/web_assets/images/contactus.jpg" alt="Contact Us" />
</div>


<div className=" mt-4">
  <form ref={formRef} name="product" onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '600px' }}>
    <div className="d-flex flex-column flex-md-row gap-3">
      <input className="form-control mb-3 mb-md-0" name="Name" placeholder="Name" />
      <input className="form-control" name="Email" placeholder="Your Email" />
    </div>

    <select name="Country" className="form-control mt-3">
      <option>Select Country</option>
      <option>United States</option>
      <option>Canada</option>
      <option>Mexico</option>
      <option>Brazil</option>
      <option>Argentina</option>
      <option>United Kingdom</option>
      <option>France</option>
      <option>Germany</option>
      <option>Italy</option>
      <option>Spain</option>
      <option>China</option>
      <option>Japan</option>
      <option>South Korea</option>
      <option>India</option>
      <option>Australia</option>
      <option>New Zealand</option>
      <option>South Africa</option>
      <option>Egypt</option>
      <option>Nigeria</option>
      <option>Kenya</option>
    </select>

    <input className="form-control mt-3" name="Subject" placeholder="Subject" />
    <input className="form-control mt-3" name="Number" placeholder="Number" />
    <textarea style={{ height: "150px" }} name="Message" className="form-control mt-3" placeholder="Message"></textarea>
    <button type="submit" style={{ background: '#54a5dc', color: "white" }} className="mt-3 px-5 border-0">Send</button>
  </form>
</div>

</div>


</div>




}



