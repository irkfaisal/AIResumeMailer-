import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { Toaster } from 'sonner';
import './index.css';
import { ContextProvider } from './context/ContextProvider';
// import { SpeedInsights } from "@vercel/speed-insights/next";
// import { Analytics } from "@vercel/analytics/next"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <Toaster richColors position="top-center" />
      <App />
      {/* <SpeedInsights />
      <Analytics /> */}
    </ContextProvider>
  </StrictMode>
);