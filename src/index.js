import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';

/* Add basic styling for NavLinks */
const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

/* add the navbar component */
const Navbar = () =>
  <div>
    <NavLink
      to="/"
      /* set exact so it knows to only set activeStyle when route is deeply equal to link */
      exact
      /* add styling to Navlink */
      style={link}
      /* add prop for activeStyle */
      activeStyle={{
        background: 'darkblue'
      }}
    >Home</NavLink>
    <NavLink
      to="/about"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >About</NavLink>
    <NavLink
      to="/login"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Login</NavLink>
  </div>;


const Home = () => {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>This is my about component!</h1>
    </div>
  )
}

const Login = () => {
  return (
    <div>
      <form>
        <div>
          <input type='text' name='username' placeholder='username' />
          <label htmlFor='username'>Username</label>
        </div>
        <div>
          <input type='password' name='password' placeholder='password' />
          <label htmlFor='password'>Password</label>
        </div>
        <input type='submit' value='login' />
      </form>
    </div>
  )
}

ReactDOM.render(
  (<Router>
    <div>
      <Route path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/about' component={About} />
    </div>
  </Router>),
  document.getElementById('root')
);
