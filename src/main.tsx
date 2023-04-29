import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import './index.css';

import { ProductProvider } from './contexts/ProductContext';
import { SidebarProvider } from './contexts/SidebarContext';
import { CartProvider } from './contexts/CartContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SidebarProvider>
      <CartProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </CartProvider>
    </SidebarProvider>
  </React.StrictMode>
);
