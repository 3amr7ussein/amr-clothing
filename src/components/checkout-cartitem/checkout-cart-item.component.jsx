import React from 'react';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selector';
import './checkout-cart-item.styles.scss';


const CheckoutCartItem = ({item}) => (

    <div className='checkout-item'>
        <div className='image-container'>
            <img className='item-image' alt='hello' src={item.imageUrl} />
        </div>
        <span className='name'>{item.name}</span>
        <div className='quantity'>
            <span className='decrease'>&#10094; </span>
            <span>{item.quantity}</span>
            <span    className='increase'>&#10095;</span>
        </div>
        <span className='price'>${item.price}</span>
        <div className='remove-button'>&#10005;</div>

    </div>
)


export default CheckoutCartItem