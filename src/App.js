import { HomePage } from './pages/homepage/homepage.component';
import { Route, Switch, Redirect } from 'react-router-dom';
import Shop from './pages/shop/shop.component';
import './App.css'
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import CheckoutPage from './pages/checkout/checkout.component';
import React from 'react';
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect'
import { checkUserSession } from './redux/user/user.actions';

import { selectCollectionAsArray } from './redux/shop/shop.selector'
class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {

    const {checkUserSession} = this.props ;
    checkUserSession();
  } 

  componentWillUnmount() {
    this.unsubscribeFromAuth();

  }

  render() {

    return (
      <div className='body' >
        <Header className='header' />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
          <Route exact path='/checkout' component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collec: selectCollectionAsArray
});

const mapDispatchToProps = dispatch=>({
  checkUserSession:()=>dispatch(checkUserSession())
})
export default connect(mapStateToProps,
  mapDispatchToProps
  )(App);
