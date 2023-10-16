import React, { Component } from 'react'
import Card from './Card/Card'
import "./Services.css"

export default class Services extends Component {
    constructor(props){
        super(props);
        this.state=[
            {id:1,iconBackground:"card-icon management-icon",icon:"icon fa-regular fa-rectangle-list",title:"Order Management"},
            {id:2,iconBackground:"card-icon social-icon",icon:"icon fa-solid fa-chart-line",title:"Social Assistant"},
            {id:3,iconBackground:"card-icon crypto-icon",icon:"icon fa-brands fa-bitcoin",title:"Crypto Platform"},
            {id:4,iconBackground:"card-icon trade-icon",icon:"icon fa-solid fa-microchip",title:"Smart Trading Modules"},
            {id:5,iconBackground:"card-icon analyzer-icon",icon:"icon fa-solid fa-chart-pie",title:"Analyzer of the News"},
            {id:6,iconBackground:"card-icon module-icon",icon:"icon fa-solid fa-magnifying-glass-chart",title:"Module of Price Notification"},
        ]
    }
    render() {
        return (
            <div className='container'>
                <div className='service-description mt-5 mb-5'>
                    <h1>Our Services</h1>
                    <p>We turn information into actionable insights We work to understand your issues
                        and are driven to ask better questions in the pursuit of making work.</p>
                </div>

                <div className='card-wrapper d-flex'>
                   {this.state.map(item=>{
                        return  <Card key={item.id} icon={item.icon} title={item.title} background={item.iconBackground}/>
                   })}
                    
                </div>
            </div>
        )
    }
}
