import { HomePage } from './pages/homepage/homepage.component';
import {Route ,Switch} from 'react-router-dom';
import Shop from './pages/shop/shop.component';
import './App.css'
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import {auth , createUserProfileDocument} from './firebase/firebase.utils';
import React from 'react';


class App extends React.Component {
 
  constructor(){
    super();
    this.state = {
      currentUser : null
    }
  }

  unsubscribeFromAuth = null;
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot =>{
          this.setState({
            currentUser:{
              id:snapShot.id,
              ...snapShot.data()
            }
          })
        });
        
        
      }
      else
      this.setState({currentUser:userAuth},()=>console.log(this.state));
    });
  };
  
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
    render(){
  
      return (
        <div className = 'body' >
          <Header className='header'currentUser = {this.state.currentUser} />
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/shop" component={Shop}/>
            <Route exact path='/signin' component={SignInAndSignUpPage} />
          </Switch>
        </div>
  );
}}

export default App;
