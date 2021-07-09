import React from 'react';
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartDropDownItem from '../cart-dropdown-item/cart-dropdown-item.component';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

const CartDropdown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.map((item)=>
                    <CartDropDownItem key={item.id} item={item} />
            )}
            
        </div>
        <Link to='/checkout'><CustomButton>Go To Checkout</CustomButton></Link>
    </div>
);

const mapStateToProps = (state) => ({
   cartItems : state.cart.cartItems
})

export default connect(mapStateToProps)(CartDropdown);