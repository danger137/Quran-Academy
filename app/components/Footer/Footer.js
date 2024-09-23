
import "./Footer.css";


export default function Footer(){

  const clientEmail = "dangerchamp2@gmail.com";


return <div>




<>
  {/* Footer */}
  <footer
  style={{
    backgroundImage: "url('https://www.dawateislamiusa.com/wp-content/uploads/2020/07/Footer_background.png')",
    backgroundSize: "contain", // Adjust this to make the image smaller
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#629cb2",
  }}
  className="text-center text-lg-start bg-body-tertiary text-muted mt-5 py-3"
>
  <section className="d-flex justify-content-center justify-content-lg-between p-4">
    {/* Social media section (if any) */}
  </section>

  <section>
  <div className="container text-center text-md-start">
    <div className="row mt-3">
      
      {/* Company Info */}
      <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-5">
        <div className="d-flex justify-content-center">
          <img
            className="img-fluid"
            src="https://www.dawateislamiusa.com/wp-content/uploads/2020/07/Footer_-logo.png"
            alt="Dawat e Islami USA Logo"
          />
        </div>
        <h5 className="mt-3 text-center text-white">Madrasa Husain ibne Ali razi Allah thala Anhu</h5>
        <div className="d-flex align-items-center justify-content-center">
          <i className="fas fa-envelope pt-1 me-3 text-white"></i>
          <p className="text-white mb-0">Email: bilalqari453@gmail.com</p>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <i className="fas fa-phone pt-1 me-3 text-white"></i>
          <p className="text-white mb-0">Phone: +923037476832</p>
        </div>
      </div>

      {/* Mobile Apps */}
      <div style={{marginTop:"96px"}} className="col-12 col-md-6 col-lg-3 mb-4">
        <h5 className="text-uppercase fw-bold text-center mt-4 pt-3 text-white  ">Design And Powered By</h5>
        <ul className="list-unstyled text-center">
          <li style={{ color: "white" }}>
            <a href="#!" className="text-reset text-white">Syed Muhammad Salman Shah</a>
          </li>
          <li style={{ color: "white" }}>
            <a href="tel:++92447570552" className="text-reset text-white">+92447570552</a>
          </li>
          <li style={{ color: "white" }}>
            <a href='https://wa.me/+923447570552' target='_blank'>
              <img className="mt-3" style={{ width: "35px", cursor: "pointer" }} src='/png-clipart-whatsapp-whatsapp-removebg-preview.png' alt="WhatsApp" />
            </a>
            <a href={`mailto:${clientEmail}`} className="ms-2">
              <img
                src="/281769-removebg-preview.png"
                alt="Email Client"
                className="mt-3"
                style={{ cursor: "pointer", width: "35px" }}
              />
            </a>
            <a className="ms-2" href="https://www.facebook.com/danger.champ.54" target="_blank">
  <img className="mt-3" style={{ cursor: "pointer", width: "35px" }} src="/download-removebg-preview.png" alt="Facebook"/>
</a>
<a className="ms-2" href="https://www.instagram.com/mr_gaming_plays_yt" target="_blank">
  <img className="mt-3  " style={{ cursor: "pointer", width: "30px" }} src="/ff5ae72f423c7a1a2e6daf347ff1b5e2-removebg-preview.png" alt="Instagram"/>
</a>

          </li>
        </ul>
      </div>

      {/* Our Services */}
      <div style={{marginTop:"96px"}}  className="col-12 col-md-6 col-lg-3 mb-4">
        <h6 className="text-uppercase fw-bold text-center mt-4 pt-3 text-white">OUR SERVICES</h6>
        <ul className="list-unstyled text-center">
          <li style={{ color: "white" }}>
            <a href="/Online" className="text-reset text-white">Quran Education For Everyone In USA Age 3 Years To Any Open Age</a>
          </li>
          <li style={{ color: "white" }} className="mt-3">
            <a href="/Books" className="text-reset text-white">Library</a>
          </li>
        </ul>
      </div>
      
    </div>
  </div>
</section>

</footer>

<div>
    
<div
  className="text-center p-1 align-middle"
  style={{
    backgroundColor: "black",
    color: "white",
    height: "auto",              // Use auto height to fit content
    minHeight: "30px",           // Minimum height for the footer
    position: "relative",        // Keeps it in the flow of the document
    width: "100%",               // Full-width to adapt to screen size
    boxSizing: "border-box",     // Includes padding and borders in the element's total width and height
    fontSize: "0.875rem",        // Adjust font size for better readability on smaller screens
    padding: "0.5rem",           // Padding to ensure content doesn't touch edges
    overflow: "hidden"           // Prevents any content from overflowing
  }}
>
Madrasa Husain ibne Ali razi Allah thala Anhu Centers
</div>

</div>

  {/* Footer */}
</>



</div>



}

