import React, { Component } from 'react'
import Post from './Posts/Post';
import "./Project.css"

export default class Project extends Component {
  constructor(props) {
    super(props);
    this.state = [
      { id: 1, class: "post p-3 p-md-0 d-flex flex flex-column flex-md-row align-items-center justify-content-center mt-5 mb-5", image: "./Images/main-photo1.svg" },
      { id: 1, class: "post p-3 p-md-0 d-flex flex flex-column align-items-center justify-content-center flex-md-row-reverse mt-5 mb-5", image: "./Images/main-photo2.svg" }
    ]
  }

  render() {
    return (
      <div className='container'>
          {this.state.map(item => {
            return <Post key={item.id} classname={item.class} img={item.image} />
          })}
      </div>
    )
  }
}
