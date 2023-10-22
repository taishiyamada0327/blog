import { ReactNode } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

type AppProviderProps = {
  children: ReactNode;
};

export default function AppProvider({ children }: AppProviderProps) {
  return (
    <Router>{children}</Router>
  );
};
