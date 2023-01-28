import { create } from 'zustand';

type ProductProps = {
  id: number;
  name: string;
  price: number;
};

type ActionsProps = {
  addProduct: (products: ProductProps) => void;
  removeProduct: (productId: number) => void;
};

type StoreProps = {
  state: {
    products: ProductProps[];
  };
  actions: ActionsProps;
};

export const useProductsStore = create<StoreProps>((set) => ({
  state: {
    products: []
  },
  actions: {
    addProduct: (product: ProductProps) =>
      set((state) => ({
        state: { products: [...state.state.products, product] }
      })),
    removeProduct: (productId: number) =>
      set((state) => ({
        state: {
          products: state.state.products.filter((p) => p.id !== productId)
        }
      }))
  }
}));
