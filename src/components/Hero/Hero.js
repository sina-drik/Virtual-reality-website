import React, { Component } from 'react'
import "./Hero.css"

export default class Hero extends Component {
    render() {
        return (
            <div className='container test d-flex flex-column flex-md-row align-items-center justify-content-between p-0 p-md-2'>
                <div className='hero-title mt-1 mt-md-5'>
                    <h3 className='gradiant-text text-center text-md-start'>Virtual Reality <br /> Business Solution</h3>
                    <div className='hero-description'>
                        <p className='mb-0'>
                            We have over 15 year exprience in business consultting arena. We have over 15 year exprience in business consultting arena and artficial intelligence.
                        </p>
                        <div className='hero-btn-wrapper p-4 mt-0'>
                            <a className='customized-btn mr-5' href="#">Join Us</a>
                            <a href='#'>Watch Video <i class="fa-solid fa-circle-play ml-1"></i></a>
                        </div>
                    </div>
                </div>
                <div className='hero-img'>
                    <img src="./Images/hero.svg" alt="hreo" />
                </div>
            </div>
        )
    }
}
