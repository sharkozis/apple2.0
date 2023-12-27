import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <nav className='navbar'>
        <ul>
            <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Apple-logo.png/600px-Apple-logo.png?20200509031052" alt="" /></li>
            <li><a href=""><Link to='/'>Home</Link></a></li>
            <li><a href=""><Link to='/about'>About</Link></a></li>
            <li><a href=""><Link to='/products'>Products</Link></a></li>
            <li><a href=""><Link to='/cart'>Cart</Link></a></li>
        </ul>
    </nav>
  )
}

export default Header