import { createContext, useState, useEffect, ReactNode } from 'react';
import { ProductType } from '../@types/ProductType';

interface ProductContexType {
  products: ProductType[];
}

export const ProductContext = createContext({} as ProductContexType);

export function ProductProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();

      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
}
