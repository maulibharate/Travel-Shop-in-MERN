import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import ProductImage from './Sections/ProductImage';
import ProductInfo from './Sections/ProductInfo';
import { addToCart } from '../../../_actions/user_actions';
import { useDispatch } from 'react-redux';

function DetailProductPage(props) {
    const dispatch = useDispatch();
    const productId = props.match.params.productId
    const [Product, setProduct] = useState([])


    useEffect(() => {
        Axios.get(`/api/product/products_by_id?id=${productId}&type=single`)
        .then(response => {
            setProduct(response.data[0])
        })
    }, [])

    const addToCarthandler = (productId) => {
        dispatch(addToCart(productId))
    }

    return (
        <div className="p-5">
            <div className="text-center">
                <h1>{ Product.title }</h1>
            </div>

        <br />

        <div className="row">
            <div className="col-xs-12 col-lg-6">
                <ProductImage detail={Product} />
            </div>

            <div className="col-xs-12 col-lg-6">
                <ProductInfo
                    addToCart={addToCarthandler}
                    detail={Product} 
                />
            </div>
        </div>
        
        </div>


    )
}

export default DetailProductPage
