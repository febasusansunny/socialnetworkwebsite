import React from 'react'; 
import './App.css'; 
import Navbar from './components/Navbar/Navbar'; 
import SignIn from './components/sign-in/sign-in.component'
import SignUp from './components/sign-up/sign-up.component';

import { BrowserRouter as Router, Switch, Route ,Redirect} from 'react-router-dom'; 
import HomePage from './pages/homePage/homepage'; 
import UsersProfilePage from './pages/usersprofile/usersprofile.component'
  
function App() { 
  return ( 
    <Router> 
      <Navbar /> 
      
      <Switch>
         <Route exact path='/' component={SignIn} />
         <Route path='/signup' component={SignUp} />
         <Route exact path='/usersprofile/:id'  component={UsersProfilePage}/>
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignIn />
              )
            }
          />
          <Route path='/homepage' exact component={HomePage} /> 
        </Switch>
      {/* <Switch> 
        <Route path='/' exact component={Home} /> 
        <Route path='/about' component={About} /> 
        <Route path='/events' component={Events} /> 
        <Route path='/annual' component={AnnualReport} /> 
        <Route path='/team' component={Teams} /> 
        <Route path='/blogs' component={Blogs} /> 
        <Route path='/sign-up' component={SignUp} /> 
      </Switch>  */}
    </Router> 
  ); 
} 
  
export default App; 