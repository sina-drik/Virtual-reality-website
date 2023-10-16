import React, { Component } from 'react'
import "./Card.css";


export default class Card extends Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    const { icon, title, background } = this.props
    return (
      // card-test col-12 col-md-5 col-lg-4
      <div className='card-item'>
        <div className={background}>
          <span><i className={icon}></i></span>
        </div>
        <div className='card-description'>
          <h3>{title}</h3>
          <p>Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
          <div className='d-flex align-items-center justify-content-center read-more'>
            <a href="http://www.google.com">Learn more</a>
            <i class="read-more-icon fa-solid fa-arrow-right ml-2 mt-1"></i>
          </div>
        </div>
      </div>
    )
  }
}
