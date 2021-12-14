import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <header className="header">
      <Link to='/'>
        <h1>Martial Mart</h1>
      </Link>

      <nav>
      <Link to='/products'>For Sale</Link>
      <Link to='/sign-in'>Sign In</Link>
      <Link to='/about'>About</Link>
    </nav>
      
  </header>
  )
}

export default Header