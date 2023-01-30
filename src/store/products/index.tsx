import { create } from 'zustand';

type ProductsProps = {
  id: number;
  name: string;
  price: number;
};

type ActionsProps = {
  addProduct: (product: ProductsProps) => void;
  removeProduct: (productId: number) => void;
};

type StoreProps = {
  state: {
    products: ProductsProps[];
  };
  actions: ActionsProps;
};

export const useProductsStore = create<StoreProps>((set) => ({
  state: {
    products: []
  },
  actions: {
    addProduct: (product) =>
      set((state) => ({
        state: { products: [...state.state.products, product] }
      })),
    removeProduct: (productId) =>
      set((state) => ({
        state: {
          products: state.state.products.filter(
            (product) => product.id !== productId
          )
        }
      }))
  }
}));
