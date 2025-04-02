import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useFirebase } from '../FirebaseContext';
import { signOut } from 'firebase/auth'; 

const Navbar = () => {
  const { user, auth } = useFirebase();
  const [menuIcon, setMenuIcon] = useState('menu');
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuIcon((prevIcon) => (prevIcon === 'menu' ? 'close' : 'menu'));
    setMenuVisible(!menuVisible);
  };

  const handleContentClick = () => {
    setMenuIcon((prevIcon) => (prevIcon === 'menu' ? 'close' : 'menu'));
    setMenuVisible(!menuVisible); 
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  return (
    <nav className="p-5 bg-white shadow lg:flex lg:items-center lg:justify-between">
      <div className="flex justify-between items-center">
        <div className='flex flex-1 items-center justify-between'>
        <Link to='/'>
          <span className="text-2xl md:text-3xl font-extrabold cursor-pointer">
          Event<span className='text-[#00A4EF]'>ique</span>
          </span>
        </Link>
        {user ? (
          <div className='flex lg:hidden items-center gap-3 mx-3'>
            <p className='text-sm md:text-base lg:text-lg'>{user.displayName}</p>
            {user.photoURL ? (
              <img className='h-10 w-10 rounded-full' src={user.photoURL} alt={user.displayName} />
            ) : (
              <img className='h-10 w-10 rounded-full' src="https://i.ibb.co/HzrsZjz/man.png" alt={user.displayName} />
            )}
          </div>
        ) : (<></>)}
        </div>
        <span className="text-3xl cursor-pointer -mr-2 md:mx-2 lg:hidden block">
          <ion-icon name={menuIcon} onClick={toggleMenu}></ion-icon>
        </span>
      </div>

      <div>
        <ul
          className={`lg:flex lg:items-center z-[100] lg:z-auto lg:static absolute bg-white w-full left-0 lg:w-auto lg:py-0 py-4 lg:pl-0 pl-7 lg:opacity-100 ${menuVisible ? 'opacity-100 top-[75px] border-t-2 lg:border-0' : 'opacity-0 top-[-400px]'}`}
        >
          <NavLink onClick={handleContentClick} to="/" className={(navData) => (navData.isActive ? "active" : 'null')}>
            <li className="mx-4 my-4 text-lg xl:text-xl hover:text-cyan-500 duration-500">Home</li>
          </NavLink>
          <NavLink onClick={handleContentClick} to="/categories" className={(navData) => (navData.isActive ? "active" : 'null')}>
            <li className="mx-4 my-4 text-lg xl:text-xl hover:text-cyan-500 duration-500">Categories</li>
          </NavLink>
          <NavLink onClick={handleContentClick} to="/services" className={(navData) => (navData.isActive ? "active" : 'null')}>
            <li className="mx-4 my-4 text-lg xl:text-xl hover:text-cyan-500 duration-500">Services</li>
          </NavLink>
          <NavLink onClick={handleContentClick} to="/contactus" className={(navData) => (navData.isActive ? "active" : 'null')}>
            <li className="mx-4 my-4 text-lg xl:text-xl hover:text-cyan-500 duration-500">Contact</li>
          </NavLink>

          {user ? (
            <>
              <NavLink onClick={handleContentClick} to="/cart" className={(navData) => (navData.isActive ? "active" : 'null')}>
                <li className="mx-4 my-4 text-lg xl:text-xl hover:text-cyan-500 duration-500">Cart</li>
              </NavLink>
              <NavLink onClick={handleContentClick} to="/profile" className={(navData) => (navData.isActive ? "active" : 'null')}>
                <li className="mx-4 my-4 text-lg xl:text-xl hover:text-cyan-500 duration-500">Profile</li>
              </NavLink>

              <div className='hidden lg:flex items-center gap-3 mx-3'>
            <p className='text-sm md:text-base lg:text-lg'>{user.displayName}</p>
            {user.photoURL ? (
              <img className='h-10 w-10 rounded-full' src={user.photoURL} alt={user.displayName} />
            ) : (
              <img className='h-10 w-10 rounded-full' src="https://i.ibb.co/HzrsZjz/man.png" alt={user.displayName} />
            )}
          </div>
         <button onClick={() => {
    handleSignOut();
    handleContentClick();
  }}
   className="bg-cyan-400 text-white duration-500 px-6 text-lg py-2 mx-4 hover:bg-cyan-500 rounded-lg mb-4 lg:mb-0">
                Sign Out
              </button>
            </>
          ) : (
            <NavLink onClick={handleContentClick} to='/login'>
              <button className="bg-cyan-400 text-white duration-500 px-6 text-lg py-2 mx-4 hover:bg-cyan-500 rounded-lg mb-4 lg:mb-0">
                Login
              </button>
            </NavLink>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
