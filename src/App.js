import { Route,Switch,} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component';
import { auth,createUserProfileDocument } from './firebase/firebase.utils';
import React from 'react';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      currentUser:null
    };
  }

  unsubscribeFromAuth=null
  componentDidMount(){
   this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
     // this.setState({currentUser:user});
     if(userAuth){
     const userRef=await createUserProfileDocument(userAuth);
     userRef.onSnapshot(Snapshot => {
       this.setState({
         currentUser:{
           id:Snapshot.id,
           ...Snapshot.data()
         }
       },()=>{
         console.log(this.state);
       });
     });
     console.log(this.state)
     // console.log(user ) ; 
     }
     this.setState({currentUser:userAuth})
    });
    
  }
componentWillUnmount(){
  this.unsubscribeFromAuth();
}

  render(){
  return (
    <div> 
      <Header currentUser={this.state.currentUser}/>
      <Switch>
      <Route  exact path='/' component={HomePage}/>
      <Route  path='/shop'   component={ShopPage}/> 
      <Route path='/signin' component={SignInAndSignUpPage}/>
      </Switch>
    </div>
  );
  }
}

export default App;
