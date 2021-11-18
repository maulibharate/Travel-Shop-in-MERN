import React from 'react';
import { Carousel } from 'antd';
const port = process.env.PORT || 5000

function ImageSlider(props) {
    return (
        <div>
            <Carousel autoplay>
                {props.images.map((image, index) => (
                    <div key={index} >
                        <img src={`https://travel-shop-in-mern.herokuapp.com/${image}`}  alt="productImage" style={{ width: '100%', maxHeight: '150px'}}/>
                    </div>
                ))}
            </Carousel> 
        </div>
    )
}

export default ImageSlider
