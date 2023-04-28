import { createContext, useContext, useState } from 'react';

const MenuContext = createContext(false);

export const MenuProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <MenuContext.Provider
      value={{ isMenuOpen, toggleMenu: () => setIsMenuOpen(!isMenuOpen) }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useIsMenuOpen = () => useContext(MenuContext);
