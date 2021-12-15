import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({handleLogout, currentUser}) => {

  return (
    <header className="header">
      <Link to='/'>
        <h1 className="title">Martial Mart</h1>
      </Link>

      {currentUser ? (
        <nav className="nav">
          <Link to='/products' className="headerLinks">For Sale</Link>
          <Link to='/about' className="headerLinks">About</Link>
          <button onClick={handleLogout}>Sign Out</button>
        </nav>

      )
        :
    
       (<nav className="nav">
          <Link to='/products' className="headerLinks">For Sale</Link>
          <Link to='/about' className="headerLinks">About</Link>
          <Link to='/sign-in'>
            <button>Sign In</button>
          </Link>
        </nav>)
      }
  </header>
  )
}

export default Header