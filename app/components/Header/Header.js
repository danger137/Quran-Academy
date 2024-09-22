import Link from "next/link";
import "./Header.css";


export default function Header(){




return <div>

<div style={{ background: "black" }} className="d-flex justify-content-center p-2 ">
    <img
        src="https://www.dawateislamiusa.com/wp-content/uploads/2020/07/topbar-768x34.png"
        className="img-fluid w-100 d-md-none"
        alt="Responsive image"
    />
    <img
        src="https://www.dawateislamiusa.com/wp-content/uploads/2020/07/topbar-768x34.png"
        className="d-none d-md-block"
        alt="Responsive image"
    />
</div>
<nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid ms-lg-5 ps-lg-5">
    <a className="navbar-brand" href="/">
      <img
        src="https://www.dawateislamiusa.com/wp-content/uploads/2020/07/Head_logo01.png"
        alt="Logo"
        style={{ maxHeight: '100px' }} // Adjust as needed
        className="pt-2 ms-lg-5"
      />
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-lg-5 ps-lg-5">
        <li className="nav-item ms-3 ">
          <Link className="nav-link active h6" aria-current="page" href="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active h6 ms-3" aria-current="page" href="/Intro">
            Introduction
          </Link>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle h6 ms-3"
            href="#"
            id="navbarDropdown1"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Islam
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
            <li><Link className="dropdown-item" href="/Understand">Understanding Islam</Link></li>
            <li><Link className="dropdown-item" href="/Corner">New Muslim Corner</Link></li>
            <li><Link className="dropdown-item" href="/Pillars">Pillars Of Islam</Link></li>
            <li><Link className="dropdown-item" href="/Child">Children Section</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle h6 ms-3"
            href="#"
            id="navbarDropdown2"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Services
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown2">
            <li><Link className="dropdown-item" href="/Online">Madras Tul Madina Online</Link></li>
            <li className="dropdown-submenu">
              <a className="dropdown-item dropdown-toggle" href="#">
                Activities in USA
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" href="/Madni">Madani Qafila Activity Details</Link></li>
                <li><Link className="dropdown-item" href="/Inamat">Madani Inamat Activity</Link></li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle h6 ms-3"
            href="#"
            id="navbarDropdown3"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Library
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown3">
            <li><Link className="dropdown-item" href="/Books">Books</Link></li>
            <li><Link className="dropdown-item" href="/Videos">Media</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link active h6 ms-3" aria-current="page" href="/Review">
            Review
          
          </Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link active h6 ms-3" aria-current="page" href="/Software">
            Software
          </Link>
        </li>  */}
        <li className="nav-item">
          <Link className="nav-link active h6 ms-3" aria-current="page" href="/Contect">
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>










</div>





}

