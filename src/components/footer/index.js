import React from 'react'
import PropTypes from 'prop-types'
import NavLinks from '../navlinks/NavLinks'
import './footer.scss'

const Footer = props => {
  return (
      <div className="footer">
        <div className="footer-address">
          <h3>Contact Us</h3>
          <p>
            <span>Singh Security Services</span><br />
            70 Saddlecrest crescent NE<br />
            Calgary, AB T3j0c6<br />
            Phone: (403) 992-7629<br />
            E-mail: <a href="mailto:info@singhsecurityservices.com">info@singhsecurityservices.com</a>
          </p>
        </div>
        <div className="footer-navbar">
            <h3>More Information</h3>
            <NavLinks orderStyle="vertical"/>
          {/* <app-nav *ngFor="let nav of navs" [navclassName]="nav.navclassName" [name]="nav.name" [routerlink]="nav.routerlink"></app-nav> */}
        </div>
        <div className="footer-about">
          <h3>About</h3>
          <p>We specialize in security, monitoring and automation services for Calgary and North Alberta. Our products and services cater to both residential and commercial needs. Plus, we are there for you when you need support and troubleshooting.</p>
        </div>
      </div>
  )
}

Footer.propTypes = {

}

export default Footer

