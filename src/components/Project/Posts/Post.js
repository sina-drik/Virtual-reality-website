import React, { Component } from 'react'

export default class Post extends Component {
    render() {
        const {classname,img } = this.props
        return (
            <div className={classname}>
                <div className='image-wrapper'>
                    <img src={img} alt="error" />
                </div>
                <div className='content'>
                    <div className=''>
                        <h2 className='mb-4'>We complete every projects extra care as customer need</h2>
                        <p className='mb-4 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nuncoe scelerisque in. orem ipsum  dolor sit amet, consectetur adipisicing elit. Labore eius molestiae facere, natus reprehenderit eaque eum, autem ipsam. Magfini, error. Tempora odit laborum iure inventore possimus laboriosam qui nam. </p>
                        <button className='customized-btn'>Read more</button>
                    </div>
                </div>
            </div>
        )
    }
}
