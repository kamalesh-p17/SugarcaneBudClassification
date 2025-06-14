import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <h1>Sugarcane Bud Classification</h1>

      {windowWidth > 768 ? (
        <ul>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <li>Home</li>
          </Link>
          <Link to="/camera" style={{ textDecoration: 'none' }}>
            <li>Camera</li>
          </Link>
        </ul>
      ) : (
        <i onClick={() => toggleMenu()} className="fa-solid fa-bars"></i>
      )}

      {windowWidth <= 768 && isOpen && (
        <div className='navbar-toggleicon'>
          <div onClick={() => toggleMenu()} className="navbar-space"></div>
          <div className="navbar-toggle">
            <Link to="/" style={{ textDecoration: 'none' , color: "white"}}>Home</Link><hr />
            <Link to="/camera" style={{ textDecoration: 'none' ,color: "white"}}>Camera</Link><hr />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
