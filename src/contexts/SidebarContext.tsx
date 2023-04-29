import { ReactNode, createContext, useState } from 'react';

interface SidebarContextType {
  isOpen: boolean;
  handleToggleSidebar: () => void;
  handleCloseSidebar: () => void;
}

export const SidebarContext = createContext({} as SidebarContextType);

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleSidebar() {
    setIsOpen((state) => !state);
  }

  function handleCloseSidebar() {
    setIsOpen(false);
  }

  return (
    <SidebarContext.Provider
      value={{ isOpen, handleToggleSidebar, handleCloseSidebar }}
    >
      {children}
    </SidebarContext.Provider>
  );
}
