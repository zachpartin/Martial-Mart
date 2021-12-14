import { Link } from 'react-router-dom';

const Header = ({handleLogout, currentUser}) => {

  return (
    <header className="header">
      <Link to='/'>
        <h1>Martial Mart</h1>
      </Link>

      {currentUser ? (
        <nav>
          <Link to='/products'>For Sale</Link>
          <Link to='/about'>About</Link>
        </nav>

      )
      
    }
      <nav>
      <Link to='/products'>For Sale</Link>
      <Link to='/about'>About</Link>
      <Link to='/sign-in'>Sign In</Link>
    </nav>
      
  </header>
  )
}

export default Header