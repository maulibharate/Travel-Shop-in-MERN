import React, { useState, useEffect } from 'react';
import { Button, Descriptions } from 'antd';

function ProductInfo(props) {

    const [Product, setProduct] = useState([]);


    useEffect(() => {
        setProduct(props.detail)
    }, [props.detail])

    const addToCarthandler = () => {
        props.addToCart(props.detail._id)
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
                    <Button size="large" shape="round" type="danger"
                        onClick={addToCarthandler}
                    >
                        Add to Cart    
                    </Button>
                </div>
        </div>
    )
}

export default ProductInfo
