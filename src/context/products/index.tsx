import { createContext, useCallback, useContext, useState } from 'react';

import { IProductContext, ProductProviderProps, ProductProps } from './types';

const ProductContext = createContext<IProductContext>({} as IProductContext);

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [products, setProducts] = useState<ProductProps[]>([]);

  const addProduct = useCallback((user: ProductProps) => {
    setProducts((prev) => [...prev, user]);
  }, []);

  const removeProduct = useCallback(
    (userId: number) => {
      const newUsers = products.filter((user) => user.id !== userId);

      setProducts(newUsers);
    },
    [products]
  );

  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
        removeProduct
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;

export const useProduct = () => useContext(ProductContext);
