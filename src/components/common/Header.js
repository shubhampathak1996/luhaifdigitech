import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SERVICE_MENU } from '../../domain/Enums'

function Header() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [window.location.search])
  const [openDropdown, setOpenDropdown] = useState(false)
  const [mobileMenu, setmobileMenu] = useState(false)
  return (
    <header>
      <section className="top-bar">
        <div className="container ">
          <div className="brand">
            <Link to="/">
              <img src="/assets/images/logo.png" />
            </Link>
          </div>
          <nav>
            <div className="nav-mobile">
              <a
                id="navbar-toggle"
                className={mobileMenu && 'active'}
                onClick={() => setmobileMenu(!mobileMenu)}
              >
                <span />
              </a>
            </div>
            <ul
              className={
                mobileMenu ? 'nav-list showmobile' : 'nav-list hidemobile'
              }
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li
                onMouseEnter={() => setOpenDropdown(true)}
                onMouseLeave={() => setOpenDropdown(false)}
                onClick={() => setOpenDropdown(!openDropdown)}
              >
                <a>Services</a>
                <ul
                  className="navbar-dropdown"
                  style={{ display: openDropdown ? 'block' : 'none' }}
                >
                  {SERVICE_MENU &&
                    SERVICE_MENU.map((item) => {
                      return (
                        <li key={item.link}>
                          <Link to={`/services/${item.link}`}>{item.name}</Link>
                        </li>
                      )
                    })}
                </ul>
              </li>
              <li>
                <Link to="/case-study">Case Studies</Link>
              </li>
              <li>
                <Link to="/our-portfolio">Our Portfolio</Link>
              </li>
              <li>
                <Link to="/our-clients">Our Clients</Link>
              </li>
              <li>
                <Link to="/our-blogs"> Blogs</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </header>
  )
}

export default Header
