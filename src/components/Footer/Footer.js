import React, { Component } from 'react'
import FooterLink from './FooterLink/FooterLink';
import "./Footer.css"

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = [
            { id: 1, title: "Service", linkOne: "Order Management", linkTwo: "Social Assistant", linkThree: "Crypto Platform", linkFour: "Analyzer of the News" },
            { id: 2, title: "Company", linkOne: "About Us", linkTwo: "News", linkThree: "Our trusted partner", linkFour: "New users FAQ" },
            { id: 3, title: "Supports", linkOne: "Help center", linkTwo: "Feedbcak", linkThree: "Contact us", linkFour: "Terms conditins" },
            { id: 4, title: "Resources", linkOne: "Download app", linkTwo: "Blog", linkThree: "What’s new", linkFour: "Sitemap" },
        ]
    }
    render() {
        return (
            <div className='container'>
                <div className='footer'>
                    <div className='footer-contact-wrapper'>
                        <h5><img className='img-logo' src="./Images/Vector.svg" alt="logo" />Zone</h5>
                        <a href="#"><i class="fa-solid fa-location-dot"></i> Dhaka, Bangladesh</a>
                        <a href="#"><i class="fa-solid fa-phone"></i> 0943833399</a>
                        <a href="#"><i class="fa-regular fa-envelope"></i> support@zone.com</a>
                        <div className='team-icon'>
                            <a className='' href="http://www.google.com"><i class="fa-brands fa-facebook"></i></a>
                            <a className='' href="http://www.google.com"><i class="fa-brands fa-linkedin"></i></a>
                            <a className='' href="http://www.google.com"><i class="fa-brands fa-x-twitter"></i></a>
                            <a className='' href="http://www.google.com"><i class="fa-brands fa-instagram"></i></a>
                        </div>
                    </div>

                    {this.state.map(item => {
                        return <FooterLink key={item.id}
                            title={item.title}
                            linkOne={item.linkOne}
                            linkTwo={item.linkTwo}
                            linkThree={item.linkThree}
                            linkFour={item.linkFour}
                        />
                    })}
                </div>
            </div>
        )
    }
}
