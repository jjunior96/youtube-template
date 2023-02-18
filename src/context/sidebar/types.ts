export interface ISidebarContext {
  isOpen: boolean;
  toggle: () => void;
}

export type SidebarProviderProps = {
  children: React.ReactNode;
};
