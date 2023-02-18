import { createContext, useCallback, useContext, useState } from 'react';

import { ISidebarContext, SidebarProviderProps } from './types';

const SidebarContext = createContext<ISidebarContext>({} as ISidebarContext);

export const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <SidebarContext.Provider
      value={{
        isOpen,
        toggle
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarContext;

export const useSidebar = () => useContext(SidebarContext);
