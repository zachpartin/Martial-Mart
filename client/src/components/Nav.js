import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <Link to='/products'>For Sale</Link>
      <Link to='/sign-in'>Sign In</Link>
      <Link to='/about'>About</Link>
    </nav>
  )
}

export default Nav