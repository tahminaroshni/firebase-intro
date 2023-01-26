import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar m-10 container flex justify-between items-center'>
      <h2 className="logo text-2xl hover:text-rose-500 duration-300">Firebase Intro</h2>
      <ul className="links flex gap-5">
        <li className='hover:text-rose-500 duration-300'>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li className='hover:text-rose-500 duration-300'>
          <NavLink to='/about'>About</NavLink>
        </li>
        <li className='hover:text-rose-500 duration-300'>
          <NavLink to='/profile'>Profile</NavLink>
        </li>
        <li className='hover:text-rose-500 duration-300'>
          <NavLink to='/login'>Login</NavLink>
        </li>
        <li className='hover:text-rose-500 duration-300'>
          <NavLink to='/register'>Register</NavLink>
        </li>
      </ul>
    </nav >
  );
};

export default Navbar;