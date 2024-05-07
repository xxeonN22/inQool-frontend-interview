import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    { path: '/', label: 'Home' },
    { path: '/users', label: 'Users' },
    { path: '/animals', label: 'Animals' },
  ];

  return (
    <nav className="bg-primary text-primary-foreground flex justify-between h-16 items-center shadow-md">
      <Link to="/" className="font-bold">
        inQool interview
      </Link>
      <ul className="flex gap-5">
        {links.map((link) => (
          <li key={link.label}>
            <NavLink
              to={link.path}
              className={({ isActive }) => (isActive ? 'underline' : '')}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
