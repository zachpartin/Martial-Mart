import Nav from './Nav.js'
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <header className="header">
      <Link to='/'>
        <h1>Martial Mart</h1>
      </Link>
      <Nav />
  </header>
  )
}

export default Header