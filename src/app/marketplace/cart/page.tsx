import React from 'react';
import { CartProvider } from '@/components/cart/CartContext';
import {CartPage} from '@/components/cart/Cart';
import { MerxLayout } from '@/components/merxDash';

export default function App() {
  return (
    <CartProvider>
      <div className="app">
        <MerxLayout>
        <CartPage />
        </MerxLayout>
      </div>
    </CartProvider>
  );
};

