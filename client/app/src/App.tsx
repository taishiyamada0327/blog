import './lib/tailwind.css'

import AppRoutes from './routes';
import AppProvider from './providers/app'

export default function App() {
  return (
    <>
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </>
  )
};
