import { HomePage } from './pages/homepage/homepage.component';
import {Route ,Switch} from 'react-router-dom';
import Shop from './pages/shop/shop.component';
import './App.css'
function App() {
  return (
    <div className = 'body'>
      <Switch>
       <Route exact path="/" component={HomePage}/>
       <Route exact path="/shop" component={Shop}/>
      </Switch>
    </div>
  );
}

export default App;
