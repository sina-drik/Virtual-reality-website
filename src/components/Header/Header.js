import React, { Component } from 'react'
import "./Header.css"
// import Vector from '.public/Images/Vector.svg'; 

export default class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      darkMode: this.props.darkModeStatus,
      mobileIconClicked: false,
      navLink: [
        { address: "#", title: "Home" },
        { address: "#", title: "About us" },
        { address: "#", title: "Service" },
        { address: "#", title: "Pricing" },
        { address: "#", title: "Blog" },
      ]
    }

    this.HandelMobileIcon = this.HandelMobileIcon.bind(this)
  }

  static getDerivedStateFromProps(props, state) {
    if (props.darkModeStatus !== state.darkMode) {
      return {
        darkMode: props.darkModeStatus
      }
    }
    return null
  }

  HandelMobileIcon() {
    this.setState((previousState) => {
      return { mobileIconClicked: !previousState.mobileIconClicked }
    })
  }

  render() {
    return (
  
      <nav className={this.state.darkMode?"section-lightmode navabr d-flex justify-content-between":"darkmode-navbar navabr d-flex justify-content-between"}>
        
        <div className={this.state.darkMode?"section-lightmode container navbar-container":"darkmode-navbar container navbar-container"}>
          <div className='navbar-logo-wrapper d-flex align-items-center'>
            <h3 className={this.state.darkMode ? "darkmode-color" : "lightmode-color"}> <img className='img-logo' src="./Images/Vector.svg" alt="logo" />Zone</h3>
          </div>

          <div className={this.state.mobileIconClicked ?
            "navbar-active navbar-link-wrapper d-flex align-items-center gap-sm-4 gap-md-5 gap-lg-6" :
            "navbar-link-wrapper d-flex align-items-center gap-sm-4 gap-md-5 gap-lg-6"}>
            {this.state.navLink.map((link, index) => {
              return (
                <a key={index} href={link.address} id="menu-link" className={this.state.darkMode ? "darkmode-color" : "lightmode-color"}>{link.title}</a>
              )
            })}
            <a href="#" className='contact-link customized-btn'>Contact Us</a>
           
          </div>

          <div id="mobileicon">
            <div onClick={() => this.HandelMobileIcon()} className={this.state.darkMode ? "darkmode-color mobile-menu-icon d-flex align-items-center" : "lightmode-color mobile-menu-icon d-flex align-items-center"}>
              <i className={this.state.mobileIconClicked ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
            </div>
          </div>
        </div>
        {/* <div className='container'>
          
        </div> */}
      </nav>
    )
  }
}
