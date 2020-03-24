import React, { useState } from 'react';
import { LoginFormData } from './components/form';
import { Login, Homepage, Team, Players, Fixtures, Profile, League, Register } from './pages';
import { Navbar } from './components/common';
import { Switch, Route, RouteComponentProps, withRouter } from 'react-router-dom';
import './App.css';

export interface AppProps extends RouteComponentProps<any> {}
 
const App: React.FC<AppProps> = ({ history }) => {

  const [user, setUser] = useState();

  const handleLogin = (data: LoginFormData) => {
    setUser({
      username: data.username
    });
    history.push('/');
  }

  const handleLogout = () => {
    setUser(null);
    history.push('/login');
  }

  return (  
    <div className='App'>
      <Navbar onLogout={handleLogout} user={user} />
        <div className='page-content'>
          <Switch>
            <Route exact path='/login' render={(props) => <Login {...props} handleLogin={handleLogin} />} />
            <Route exact path='/' component={Homepage} />
            <Route exact path='/players' component={Players} />
            <Route exact path='/team' component={Team} />
            <Route exact path='/fixtures' component={Fixtures} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/league' component={League} />
            <Route exact path='/register' component={Register} />
          </Switch>
      </div>
    </div>
  );
}
 
export default withRouter(App);
