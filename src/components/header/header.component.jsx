import React from 'react';
//import './header.styles.scss';
//import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect'
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser} from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { HeaderContainer ,LogoContainer ,OptionsContainer,OptionContainer } from './header.styles';

const Header = ({ currentUser , hidden }) => (
    <HeaderContainer >
        <LogoContainer to='/'>
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionContainer to='/shop'>SHOP</OptionContainer>
            <OptionContainer to='/shop'>CONTACT</OptionContainer>
            {currentUser ?  <OptionContainer as="div" onClick={ () =>{auth.signOut()}}>
                SIGN OUT
            </OptionContainer> :
                <OptionContainer to='/signin'> Sign In</OptionContainer>}
            
            <OptionContainer as="div"><CartIcon/> </OptionContainer>
        </OptionsContainer>
        {hidden? null:<CartDropdown /> }
    
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
})

export default connect(mapStateToProps)(Header);