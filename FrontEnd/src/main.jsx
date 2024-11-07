import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { Toaster } from 'sonner';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store/store.js';

// Log the initial state
console.log('Initial state:', store.getState());

// Subscribe to changes and log the updated state
store.subscribe(() => {
  console.log('Updated state:', store.getState());
});

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <Toaster richColors position="top-right" />
      <App />
    </StrictMode>
  </Provider>
);