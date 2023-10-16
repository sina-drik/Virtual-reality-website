import React, { Component } from 'react'
import Member from './Member/Member'

export default class Team extends Component {
  constructor(props) {
    super(props);
    this.state = [
      { id: 1, image: "./Images/member1.png", name: "Sunny Khan", position: "Executive officer", },
      { id: 2, image: "./Images/member2.png", name: "Alina Jesia", position: "UX/UI DESIGNER", },
      { id: 3, image: "./Images/member3.png", name: "Alex Sohag", position: "BUSINESS DEVELOPMENT", },
      { id: 4, image: "./Images/member4.png", name: "Afroza Mou", position: "Head of marketing", }
    ]
  }
  render() {
    return (
      <div className='container'>
        <h2>Met Our Team</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
        <div className='member-wrapper'>

          {this.state.map(member => {
            return <Member key={member.id} img={member.image} name={member.name} position={member.position} />
          })}
        </div>
      </div>
    )
  }
}
