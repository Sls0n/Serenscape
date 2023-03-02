import { createContext } from 'react';

const NavContext = createContext({ isOpen: false, setIsOpen: () => {} });

export default NavContext;
