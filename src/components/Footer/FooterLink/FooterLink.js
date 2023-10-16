import React, { Component } from 'react'

export default class FooterLink extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    const {title,linkOne, linkTwo, linkThree,linkFour}=this.props
    return (
      <div className='footer-links'>
        <a className='footer-link-title' href="#">{title}</a>
        <a href="#">{linkOne}</a>
        <a href="#">{linkTwo}</a>
        <a href="#">{linkThree}</a>
        <a href="#">{linkFour}</a>
      </div>
    )
  }
}
