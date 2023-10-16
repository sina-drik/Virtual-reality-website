import React, { Component } from 'react'
import "./News.css"

export default class News extends Component {
  render() {
    return (
      <div className='container'>
        <div className='news-wrapper'>
          <h2>Subscribe to get the Latest News</h2>
          <p>We recommended you to subscribe to our newspaper,drop your email below to get daily update about us</p>
          <div class="news-input-wrapper mb-3">
            <input type="text" class="form-control" placeholder="Import your email ..." aria-label="Recipient's username" aria-describedby="button-addon2" />
            <button class="contact-link customized-btn send-news-btn" type="button" id="button-addon2">Send <span className='send-icon'><i className="fa-regular fa-paper-plane"></i></span></button>
          </div>
        </div>
      </div>
    )
  }
}
