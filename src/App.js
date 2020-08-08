import React from 'react';
import {Switch,Route, Redirect} from 'react-router-dom'
import {HomePage} from './Pages/HomePage/homepage.component.jsx';

import ShopPage from './Pages/Shop-page/shop.coomponent.jsx'
import './App.css';
import Header from './Pages/Components/header/header.commponent.jsx'

import { connect } from 'react-redux'
import SignInAndSignUp from './Pages/Sign-in-and-up/sign-in-and-up.component.jsx'
import { auth, createUserProfileDocument } from './Firebase/firebase.utils'

import { setCurrentUser } from './redux/user/user.actions'

class  App extends React.Component {

    unsubscribeFromAuth = null

   componentDidMount(){
     const { setCurrentUsers } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
  
     if(userAuth){
       const userRef = await createUserProfileDocument(userAuth)
       
       userRef.onSnapshot(snapShot => {
        setCurrentUsers({
              id: snapShot.id,
              ...snapShot.data()
            })
          })   
      }
    else{
       setCurrentUsers(userAuth)
    }
      
     })
   }

   componentWillUnmount(){
     this.unsubscribeFromAuth()
   }

  render(){
     return (
    <div className="App">
      <Header/>
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route  path='/shop' component={ShopPage}/>
      <Route exact  path='/signin' render={() => 
        this.props.currentUser ? (
          <Redirect to='/'/>
        ) : (
          <SignInAndSignUp/>
        )
      } 
        />
      </Switch>

    </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser : user.currentUser
})

const  mapDispatchToProps = dispatch => ({
  setCurrentUsers : users => dispatch(setCurrentUser(users))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(App);

