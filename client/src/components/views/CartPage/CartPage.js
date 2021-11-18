import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { 
    getCartItems,
    removeCartItem 
} from '../../../_actions/user_actions';
import UserCardBlock from './Sections/UserCardBlock';
import { Empty, Result } from 'antd';
import Axios from 'axios';

function CartPage(props) {
    const dispatch = useDispatch();
    const [Total, setTotal] = useState();
    const [ShowTotal, setShowTotal] = useState(false);
    const [ShowSuccess, setShowSuccess] = useState(false)

    useEffect(() => {
        
        let cartItems = [];

        if(props.user.userData && props.user.userData.cart) {
            if(props.user.userData.cart.length > 0) {
                props.user.userData.cart.forEach(item => {
                    cartItems.push(item.id)
                });
                dispatch(getCartItems(cartItems, props.user.userData.cart))
            }
        }
    }, [props.user.userData])

    useEffect(() => {
        if(props.user.cartDetail &&  props.user.cartDetail.length > 0) {
            calculatetotal(props.user.cartDetail)
        }
    }, [props.user.cartDetail])

    const calculatetotal = (cartDetail) => {
        console.log(cartDetail, '@@@@@@@@@');
        let total = 0;
        cartDetail.map(item => {
            if(item.quantity) {
                total += parseInt(item.price, 10) * item.quantity
                
            console.log(item.price, "@@@@@@", parseInt(item.price, 10), "@@@@@@", item.quantity, "@@@@@@@@@@@@@@");
            }
        })
        setTotal(total)
        setShowTotal(true)
    }
    

    const removeFromCart = (productId) => {
        dispatch(removeCartItem(productId))
        .then(() => {
                Axios.get('/api/users/userCartInfo')
                .then(response => {
                    if(response.data.success) {
                        if(response.data.cartDetail.length <= 0) {
                            setShowTotal(false)
                        } else {
                            calculatetotal(response.data.cartDetail)
                        }
                    } else {
                        alert('Failed to get cart info')
                    }
                }) 
            }
        )
    }
    return (
        <div className="w-75 my-5 mx-auto">
            <h1>My Cart</h1>
            <div>
                <UserCardBlock 
                    products={props.user.cartDetail}
                    removeItem={removeFromCart}
                />

                {ShowTotal ?
                    <div className="mt-5">
                        <h2>Total amount: ${ Total }</h2>
                    </div>
                :
                ShowSuccess ? 
                    <Result 
                        status="success"
                        title="Successfully Purchased Items"
                    />
                    :
                    <div className="w-100 d-flex flex-column justify-content-center">
                        <br />
                        <Empty description={false}/>
                        <p>No Items In the Cart</p>
                    </div>
                } 
            </div>
        </div>
    )
}

export default CartPage
