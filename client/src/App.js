import './App.css';
import Layout from './layouts/Layout.js'
import MainContainer from './containers/MainContainer'
import {useState, useEffect} from 'react'
import { Switch, Route, useHistory } from 'react-router-dom';
import { loginUser, registerUser, verifyUser, removeToken } from './services/auth';
import SignIn from './screens/SignIn.js';
import SignUp from './screens/SignUp.js';
import About from './screens/About.js';








function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    history.push('/');
  };
  
  const handleRegister = async (formData) => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    history.push('/');
  };
  
  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
  };


  return (
    <div className="App">
      <Layout
        currentUser={currentUser}
        handleLogout={handleLogout}
      >
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path='/sign-in'>
            <SignIn
            handleLogin={handleLogin}
            />
          </Route>
          <Route path='/sign-up'>
            <SignUp
            handleRegister={handleRegister}
            />
          </Route>
          <Route path='/'>
          <MainContainer
          currentUser={currentUser}
          />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
