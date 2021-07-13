import { HomePage } from './pages/homepage/homepage.component';
import { Route, Switch,Redirect } from 'react-router-dom';
import Shop from './pages/shop/shop.component';
import './App.css'
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import CheckoutPage from './pages/checkout/checkout.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import React from 'react';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import{selectCurrentUser} from './redux/user/user.selector';
import {createStructuredSelector} from 'reselect'
import SHOP_DATA from './pages/shop/shop.data';
import { fillCollection } from './redux/shop/shop.actions';
class App extends React.Component {

  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser,fillShop } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data() 
          })
        });
      }
      setCurrentUser(userAuth);
    });
    
    fillShop(SHOP_DATA);
  };

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {

    return (
      <div className='body' >
        <Header className='header' />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route  path="/shop" component={Shop} />
          <Route exact path='/signin' render = {()=> this.props.currentUser ?(<Redirect to='/'/>) : (<SignInAndSignUpPage/>)}/>
          <Route exact path='/checkout' component={CheckoutPage}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps =  createStructuredSelector({
  currentUser : selectCurrentUser,
});
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  fillShop : shopData=>dispatch(fillCollection(shopData))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
