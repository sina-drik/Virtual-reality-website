import React, { Component } from 'react'

export default class SubFooter extends Component {
    render() {
        return (
            <div className='container'>
                <div className='subfooter-wrapper'>
                    <div>
                        <p>© 2023 Zone. - All rights reserved.</p>
                    </div>
                    <div className='subfooter-links'>
                        <a href="#">Privacy</a>
                        <a href="#">Security</a>
                        <a href="#">Terms</a>
                    </div>
                </div>
            </div>
        )
    }
}
