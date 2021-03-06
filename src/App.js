import { Route,Switch,Redirect} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component';
import CheckOutPage from './pages/checkout/checkout.component';
import { auth,createUserProfileDocument } from './firebase/firebase.utils';
import React from 'react';
import { connect } from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
 

class App extends React.Component{

  unsubscribeFromAuth=null
  componentDidMount(){
    const {setCurrentUser}=this.props;
   this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
     // this.setState({currentUser:user});
     if(userAuth){
     const userRef=await createUserProfileDocument(userAuth);
     userRef.onSnapshot(Snapshot => {
       setCurrentUser({
         //currentUser:{
           id: Snapshot.id,
           ...Snapshot.data()
         
       });
     });
     //console.log(this.state)
     // console.log(user ) ; 
     }
     //this is where i was stranded i did it like "setCurrentUser({userAuth})"";
     //but it is  supposed to be like "setCurrentUser(userAuth);"" with nobraces in the userAuth;
    setCurrentUser(userAuth);
    }); 
    
  }
componentWillUnmount(){
  this.unsubscribeFromAuth();
}

  render(){
  return (
    <div> 
      <Header />
      <Switch>
      <Route  exact path='/' component={HomePage}/>
      <Route  path='/shop'   component={ShopPage}/> 
      <Route  exact path='/checkout' component={CheckOutPage}/> 
      <Route  exact path='/signin' 
      render={()=>this.props.currentUser || (this.props.currentUser!==null) ? (<Redirect to='/'/>) : (<SignInAndSignUpPage/>)}/>
      </Switch>
    </div>
  );
  }
}

const mapSateToProps=createStructuredSelector({
  currentUser:selectCurrentUser
});

const mapDispatchToProps=dispatch=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
})

export default connect(
  mapSateToProps,
  mapDispatchToProps)(App);
