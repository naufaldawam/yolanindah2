import '../Header/Header.css';
import React, { useState ,useEffect} from 'react';
import { List , X} from 'react-bootstrap-icons';
import Yimg from "../../assets/img/yolan.png";

function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };
  const currentPath = window.location.pathname; // Dapatkan path rute saat ini
  const refreshPage = () => {
    window.location.reload(); // Memuat ulang halaman
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('header');
      if (window.scrollY > 0) {
        header.classList.add('sticky-top');
      } else {
        header.classList.remove('sticky-top');
      }
    };

    window.addEventListener('scroll', handleScroll);
    

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>    
      <header id="header" className="d-flex align-items-center">
          <div className="container d-flex justify-content-between align-items-center">
            <div className="logo">
            <h1><a href="index.html"><img src={Yimg} alt="" className="img-fluid"/></a>
              <a href="/" onClick={refreshPage}>PT Yolan Indah Nusantara</a></h1>
            </div>

            <nav id="navbar" className={`navbar ${isMobileNavOpen ? 'navbar-mobile' : ''}`}>
              <ul>
                <li><a className={currentPath === '/' ? 'active' : ''}  href="/">Home</a></li>
                <li><a className={currentPath === '/about' ? 'active' : ''} href="/about">About</a></li>
                <li><a className={currentPath === '/service' ? 'active' : ''} href="/service">Services</a></li>
                {/* <li><a href="/product">Product</a></li> */}
                {/* <li><a href="team.html">Team</a></li>
                <li><a href="pricing.html">Pricing</a></li>
                <li><a href="blog.html">Blog</a></li> */}
                {/* <li className="dropdown"><a href="#/"><span>Drop Down</span> <i><ChevronDown/></i></a>
                  <ul>
                    <li><a href="#/">Drop Down 1</a></li>
                    <li className="dropdown"><a href="#/"><span>Deep Drop Down</span> <i><ChevronRight/></i></a>
                      <ul>
                        <li><a href="#/">Deep Drop Down 1</a></li>
                        <li><a href="#/">Deep Drop Down 2</a></li>
                        <li><a href="#/">Deep Drop Down 3</a></li>
                        <li><a href="#/">Deep Drop Down 4</a></li>
                        <li><a href="#/">Deep Drop Down 5</a></li>
                      </ul>
                    </li>
                    <li><a href="#/">Drop Down 2</a></li>
                    <li><a href="#/">Drop Down 3</a></li>
                    <li><a href="#/">Drop Down 4</a></li>
                  </ul>
                </li> */}
                {/* <li className="dropdown"><a href="#/"><span>Jenis Kanopi</span> <i><ChevronRight/></i></a>
                  <ul>
                    <li><a href="#/">Jenis Kanopi 1</a></li>
                    <li><a href="#/">Jenis Kanopi 2</a></li>
                    <li><a href="#/">Jenis Kanopi 3</a></li>
                    <li><a href="#/">Jenis Kanopi 4</a></li>
                  </ul>
                </li> */}
                {/* <li className={"dropdown" + (isMobileNavOpen === '/product' ? ' active' : '')}>
                  <a href="/product"><span>Gallery</span> <i><ChevronDown/></i></a>
                  <ul>
                    <li className="dropdown"><a href="#/"><span>Jenis Kanopi</span> <i><ChevronRight/></i></a>
                      <ul>
                        <li><a href="#/">Jenis Kanopi 1</a></li>
                        <li><a href="#/">Jenis Kanopi 2</a></li>
                        <li><a href="#/">Jenis Kanopi 3</a></li>
                        <li><a href="#/">Jenis Kanopi 4</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="#/">
                      jenis kanopi
                      </a>
                    </li>
                    <li>
                      <a href="#/">
                      jenis pintu
                      </a>
                    </li>
                    <li>
                      <a href="#/">
                      jenis reling
                      </a>
                    </li>
                    <li>
                      <a href="#/">
                      pembuatan menara
                      </a>
                    </li>
                    <li>
                      <a href="#/">
                      jenis kanopi
                      </a>
                    </li>
                    <li>
                      <a href="#/">
                      layanan lainnya
                      </a>
                    </li>
                    <li>
                      <a href="#/">
                      layanan lainnya II
                      </a>
                    </li>
                    <li>
                      <a href="#/">
                      project konstruksi
                      </a>
                    </li>
                    <li>
                      <a href="#/">
                      pintu pagar dan reling tangga laser cutting
                      </a>
                    </li>
                    <li>
                      <a href="#/">
                      exterior rumah
                      </a>
                    </li>
                    <li>
                      <a href="/product/renovasirumah">
                      Renovasi Rumah
                      </a>
                    </li>
                    <li>
                      <a href="/product/las">
                      Las
                      </a>
                    </li>
                    <li>
                      <a href="/product/pagar">
                      Pagar
                      </a>
                    </li>
                    <li>
                      <a href="/product/relingdantangga">
                      Reling & Tangga
                      </a>
                    </li>
                    <li>
                      <a href="/product/kanopi">
                      Kanopi
                      </a>
                    </li>
                    <li>
                      <a href="/product/layananlainnya">
                      Layanan Lainnya
                      </a>
                    </li>
                    <li className="dropdown"><a href="#/"><span>Deep Drop Down</span> <i><ChevronRight/></i></a>
                      <ul>
                        <li><a href="#/">Deep Drop Down 1</a></li>
                        <li><a href="#/">Deep Drop Down 2</a></li>
                        <li><a href="#/">Deep Drop Down 3</a></li>
                        <li><a href="#/">Deep Drop Down 4</a></li>
                        <li><a href="#/">Deep Drop Down 5</a></li>
                      </ul>
                    </li>
                    <li><a href="#/">Drop Down 2</a></li>
                    <li><a href="#/">Drop Down 3</a></li>
                    <li><a href="#/">Drop Down 4</a></li>
                  </ul>
                </li> */}
                <li><a className={currentPath === '/product' ? 'active' : ''} href="/product">Gallery</a></li>
                <li><a className={currentPath === '/contact' ? 'active' : ''} href="/contact">Contact</a></li>
              </ul>
              <i className="mobile-nav-toggle" onClick={toggleMobileNav}>
              {isMobileNavOpen ? <X className="bi-x"/> : <List />} {/* Tampilkan ikon 'X' jika mobileNav terbuka, sebaliknya tampilkan ikon 'List' */}
              </i>
            </nav>
          </div>
      </header>
    </>
  );
}

export default Header;
