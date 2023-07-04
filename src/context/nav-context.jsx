import { createContext } from 'react';

const NavContext = createContext({ isOpen: false, setIsOpen: () => {}, isMobile: false, setIsMobile: () => {} });

export default NavContext;
