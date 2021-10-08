import Home from './pages/home/Home'
import './app.scss'
import Watch from './pages/watch/Watch'
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { AuthContext } from './context/authContext/authContext'
import { useContext } from 'react'
function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            { user ? <Home/> : <Redirect to="/register"/>}
          </Route>
          <Route path='/login'>
            { !user ? <Login/> : <Redirect to="/"/>}
          </Route>
          <Route path='/register'>
          { !user ? <Register/> : <Redirect to="/"/>}
          </Route>
          { user && (
            <>
              <Route path='/watch'>
                <Watch/>
              </Route>
              <Route path='/movies'>
                <Home type="movie"/>
              </Route>
              <Route path='/series'>
                <Home type="series"/>
              </Route>
            </>
          )}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
