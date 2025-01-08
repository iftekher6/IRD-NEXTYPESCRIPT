"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface SettingsContextType {
  isOpen: boolean;
  toggleSettings: () => void;
  closeSettings: () => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSettings = () => setIsOpen(!isOpen);
  const closeSettings = () => setIsOpen(false);

  return (
    <SettingsContext.Provider value={{ isOpen, toggleSettings, closeSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
};
