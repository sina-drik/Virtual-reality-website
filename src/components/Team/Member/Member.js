import React, { Component } from 'react'
import "./Member.css"

export default class Member extends Component {
  render() {
    const { img, name, position } = this.props
    return (
      <div className='card-item member  d-flex flex-column align-items-center'>
        <div className='ml-3'>
          <img src={img} alt="member" />
          <h4>{name}</h4>
          <p>{position}</p>
        </div>
        <div className='team-icon'>
          <a className='' href="http://www.google.com"><i class="fa-brands fa-facebook"></i></a>
          <a className='' href="http://www.google.com"><i class="fa-brands fa-linkedin"></i></a>
          <a className='' href="http://www.google.com"><i class="fa-brands fa-x-twitter"></i></a>
          <a className='' href="http://www.google.com"><i class="fa-brands fa-instagram"></i></a>
        </div>
      </div>
    )
  }
}
