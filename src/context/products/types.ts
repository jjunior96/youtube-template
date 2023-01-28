export type ProductProps = {
  id: number;
  name: string;
  price: number;
};

export interface IProductContext {
  products: ProductProps[];
  addProduct: (product: ProductProps) => void;
  removeProduct: (productId: number) => void;
}

export type ProductProviderProps = {
  children: React.ReactNode;
};
