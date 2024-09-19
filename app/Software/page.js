
import "./soft.css";


export default function Software(){






return <div>

<div className="d-md-flex" >
    <img  style={{width:"100%"}} src="https://data2.dawateislami.net/apps/banners/banner.gif" ></img>
</div>

<div className="container mt-5">
  <div className="row">
    {/* Sidebar with list items */}
    <div className="col-md-4 mb-4 text-center text-md-start">
  <ul className="list-unstyled">
    <li id="shadow">Islamic Mobile Apps</li>
    <li id="shadow">Desktop Applications</li>
    <li id="shadow">Memory Cards</li>
    <li id="shadow">Mp3 CDs</li>
    <li id="shadow">Other utilities</li>
  </ul>
</div>


    {/* Islamic Mobile Apps Section */}
    <div className="col-md-8 p-4" style={{ background: "#f5f2e3" }}>
      <h5 className="h1 mt-5 text-center">Islamic Mobile App</h5>
      <div className="row mt-5">
        {/* App Items */}
        {[
          {
            src: "//data2.dawateislami.net/mobile/static/images/apps/93/logo.png",
            alt: "Sirat ul Jinan",
            text: "Sirat ul Jinan Al-Quran with Tafseer",
          },
          {
            src: "//data2.dawateislami.net/mobile/static/images/apps/127/logo.png",
            alt: "Faizan e Hadees",
            text: "Faizan e Hadees",
          },
          {
            src: "//data2.dawateislami.net/mobile/static/images/apps/114/logo.png",
            alt: "Dawateislami Digital Services",
            text: "Dawateislami Digital Services",
          },
          {
            src: "//data2.dawateislami.net/mobile/static/images/apps/61/logo.png",
            alt: "Maulana Muhammad Ilyas Qadri",
            text: "Maulana Muhammad Ilyas Qadri",
          },
        ].map((app, index) => (
          <div key={index} className="col-6 col-lg-3 text-center mb-4">
            <img src={app.src} className="img-fluid" alt={app.alt} />
            <p>{app.text}</p>
          </div>
        ))}
      </div>

      {/* Additional Apps Section */}
      <div className="row mt-5">
        {[
          {
            src: "//data2.dawateislami.net/mobile/static/images/apps/7/logo.png",
            alt: "Prayer Times",
            text: "Prayer Times",
          },
          {
            src: "//data2.dawateislami.net/mobile/static/images/apps/119/logo.png",
            alt: "Naat Collection",
            text: "Naat Collection",
          },
          {
            src: "//data2.dawateislami.net/mobile/static/images/apps/103/logo.png",
            alt: "Kalma And Dua",
            text: "Kalma And Dua",
          },
          {
            src: "//data2.dawateislami.net/mobile/static/images/apps/62/logo.png",
            alt: "Madani Qaidah",
            text: "Madani Qaidah",
          },
        ].map((app, index) => (
          <div key={index} className="col-6 col-lg-3 text-center mb-4">
            <img src={app.src} className="img-fluid" alt={app.alt} />
            <p>{app.text}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Desktop Software Section */}
   
  </div>
</div>

<div className="container mt-5">
  <div className="row">
    {/* Sidebar with list items */}
    <div className="col-md-4 mb-4">
     
    </div>

    {/* Islamic Mobile Apps Section */}
    <div className="col-md-8 p-4" style={{ background: "#f5f2e3" }}>
      <h5 className="h1 mt-5 text-center">Desktop Applications</h5>
      <div className="row mt-5">
        {/* App Items */}
        {[
          {
           src:"//data2.dawateislami.net/mobile/static/images/apps/10/logo.png",
            alt: "Sirat ul Jinan",
            text: "Fatawa Razaviyya",
          },
          {
            src: "//data2.dawateislami.net/mobile/static/images/apps/68/logo.png",
            alt: "Faizan e Hadees",
            text: "Al-Madina Library",
          },
          {
            src: "//data2.dawateislami.net/mobile/static/images/apps/3/logo.png",
            alt: "Dawateislami Digital Services",
            text: "Prayer Timings : Auqat us Salat",
          },
        
        ].map((app, index) => (
          <div key={index} className="col-6 col-lg-3 text-center mb-4">
            <img src={app.src} className="img-fluid" alt={app.alt} />
            <p>{app.text}</p>
          </div>
        ))}
      </div>

      {/* Additional Apps Section */}
    
    </div>

    {/* Desktop Software Section */}
   
  </div>
</div>

<div className="container mt-5">
  <div className="row">
    {/* Sidebar with list items */}
    <div className="col-md-4 mb-4">
      <ul className="list-unstyled">
       
      </ul>
    </div>

    {/* Islamic Mobile Apps Section */}
    <div className="col-md-8 p-4" style={{ background: "#f5f2e3" }}>
      <h5 className="h1 mt-5 text-center">Islamic Mobile App</h5>
      <div className="row mt-5">
        {/* App Items */}
        {[
          {
            src: "//data2.dawateislami.net/mobile/static/images/apps/102/logo.png",
            alt: "Sirat ul Jinan",
            text: "Sarkar Ki Aamad Marhaba Memory Card",
          },
          {
            src: "//data2.dawateislami.net/mobile/static/images/apps/102/logo.png",
            alt: "Faizan e Hadees",
            text: "Tajheez o Takfeen Memory",
          },
          {
            src: "//data2.dawateislami.net/mobile/static/images/apps/80/logo.png",
            alt: "Dawateislami Digital Services",
            text: "AIK QISSA HAI QURAN SE - MEMORY CARD",
          },
          {
            src: "//data2.dawateislami.net/mobile/static/images/apps/88/logo.png",
            alt: "Maulana Muhammad Ilyas Qadri",
            text: "SIRATUL JINAN FI TAFSEER UL QURAN",
          },
        ].map((app, index) => (
          <div key={index} className="col-6 col-lg-3 text-center mb-4">
            <img src={app.src} className="img-fluid" alt={app.alt} />
            <p>{app.text}</p>
          </div>
        ))}
      </div>

      {/* Additional Apps Section */}
      <div className="row mt-5">
        {[
          {
            src: "//data2.dawateislami.net/mobile/static/images/apps/95/logo.png",
            alt: "Prayer Times",
            text: "Meray Huzur ﷺ Aaye Hain - Memory Card",
          },
          {
            src: "//data2.dawateislami.net/mobile/static/images/apps/104/logo.png",
            alt: "Naat Collection",
            text: "Faizan-e-Madani Muzakra Memory Card 07",
          },
          {
            src: "//data2.dawateislami.net/mobile/static/images/apps/116/logo.png",
            alt: "Kalma And Dua",
            text: "Faizan-e-Madani Muzakra Memory Card 08",
          },
          {
            src: "//data2.dawateislami.net/mobile/static/images/apps/117/logo.png",
            alt: "Madani Qaidah",
            text: "Faizan-e-Madani Muzakra Memory Card 09",
          },
        ].map((app, index) => (
          <div key={index} className="col-6 col-lg-3 text-center mb-4">
            <img src={app.src} className="img-fluid" alt={app.alt} />
            <p>{app.text}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Desktop Software Section */}
   
  </div>
</div>

<div className="container mt-5">
  <div className="row">
    {/* Sidebar with list items */}
    <div className="col-md-4 mb-4">
     
    </div>

    {/* Islamic Mobile Apps Section */}
    <div className="col-md-8 p-4" style={{ background: "#f5f2e3" }}>
      <h5 className="h1 mt-5 text-center">Mp3 CDs</h5>
      <div className="row mt-5">
        {/* App Items */}
        {[
          {
           src:"//data2.dawateislami.net/mobile/static/images/apps/4/logo.png",
            alt: "Sirat ul Jinan",
            text: "Faizan-e-Madani Muzakra MP3 CD (V:01) ",
          },
          {
            src: "//data2.dawateislami.net/mobile/static/images/apps/22/logo.png",
            alt: "Faizan e Hadees",
            text: "Faizan-e-Attar MP3 CD  (V:08)",
          },
          {
            src: "//data2.dawateislami.net/mobile/static/images/apps/30/logo.png",
            alt: "Dawateislami Digital Services",
            text: "Arman-e-Madina",
          },
          {
            src: "//data2.dawateislami.net/mobile/static/images/apps/36/logo.png",
            alt: "Dawateislami Digital Services",
            text: "Aoa Farz Uloom Seekhain",
          },
        
        ].map((app, index) => (
          <div key={index} className="col-6 col-lg-3 text-center mb-4">
            <img src={app.src} className="img-fluid" alt={app.alt} />
            <p>{app.text}</p>
          </div>
        ))}
      </div>

      {/* Additional Apps Section */}
    
    </div>

    {/* Desktop Software Section */}
   
  </div>
</div>








</div>




}


