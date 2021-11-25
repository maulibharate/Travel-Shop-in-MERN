import React, { useState, useEffect } from 'react';
import { Button, Descriptions } from 'antd';
import $ from 'jquery';
import './ProductInfo.css'

function ProductInfo(props) {

    const [Product, setProduct] = useState([]);


    useEffect(() => {
        setProduct(props.detail)
    }, [props.detail])

    const addToCarthandler = () => {
        spinner()
        props.addToCart(props.detail._id)
    }

    const spinner = () => {
        $('body').append('<div style="" id="loadingDiv"><div class="loader">Loading...</div></div>');
        // $(window).on('load', function(){
        setTimeout(removeLoader, 10000); //wait for page load PLUS two seconds.
        // });
    }

    const removeLoader = () => {
        $( "#loadingDiv" ).fadeOut(500, function() {
        // fadeOut complete. Remove the loading div
        $( "#loadingDiv" ).remove(); //makes page more lightweight 
    });  
    }
    return (
        <div>
            <Descriptions title="Produc Indo">
                <Descriptions.Item label="Price">{ Product.price }</Descriptions.Item>
                <Descriptions.Item label="Sold">{ Product.sold }</Descriptions.Item>
                <Descriptions.Item label="View">{ Product.view }</Descriptions.Item>
                <Descriptions.Item label="Description">
                    <div className='bg-light rounded-3 p-2'>
                        { Product.description }
                    </div>
                </Descriptions.Item>
            </Descriptions>
                <br />
                <br />
                <br />
                <div className="d-flex text-center">
                    <Button disabled={!props.detail._id} size="large" shape="round" type="danger"
                        onClick={addToCarthandler}
                    >
                        Add to Cart    
                    </Button>
                </div>
        </div>
    )
}

export default ProductInfo
