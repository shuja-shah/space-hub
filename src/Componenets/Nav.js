import { Link } from 'react-router-dom';
import navLogo from '../Assets/navLogo.png';

const Nav = () => (
  <nav>
    <div className="logo">
      <img src={navLogo} alt="logo" />
      <span className="logoText">Space Hub</span>
    </div>
    <ul className="nav-links">
      <Link to="/">
        <li>Rockets</li>
      </Link>
      <Link to="/missions">
        <li>Missions</li>
      </Link>
      <Link to="/profile">
        <li>My Profile</li>
      </Link>
    </ul>
    <Link to="/mbNav" className="hideDesktop">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21" fill="none">
        <rect width="24" height="3" fill="#D0D6F9" />
        <rect y="9" width="24" height="3" fill="#D0D6F9" />
        <rect y="18" width="24" height="3" fill="#D0D6F9" />
      </svg>
    </Link>
  </nav>
);

export default Nav;
