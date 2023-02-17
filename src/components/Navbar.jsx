import logo from '../assets/logo.png';

const Header = () => {
  return (
    <nav className='navbar bg-dark sticky-top'>
      <div className='container'>
        <a className='navbar-brand' href='#'>
          <img src={logo} alt='Yu-Gi-Oh logo' height={55} />
        </a>
      </div>
    </nav>
  );
};

export default Header;
