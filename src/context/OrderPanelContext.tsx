import { createContext, useContext } from "react";

const OrderContext = createContext({});

export const useOrderPanelContext = () => {
  return useContext(OrderContext);
};

export const OrderPanelProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <OrderContext.Provider value={{}}>{children}</OrderContext.Provider>;
};
