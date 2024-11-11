import { createContext, useContext, useEffect, useState } from "react";
import { Order } from "../types/Order";

type OrderPanelContextType = {
  orders: Order[];
  setOrders: React.Dispatch<React.SetStateAction<Order[]>>;
};

const OrderPanelContext = createContext<OrderPanelContextType | null>(null);

export const useOrderPanelContext = () => {
  const context = useContext(OrderPanelContext);
  if (context !== null) {
    return context;
  }
};

export const OrderPanelProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    fetch(`api/orders`)
      .then((res) => res.json())
      .then((data) => {
        const ordersWithDates = data.items.map((order: Order) => ({
          ...order,
          createdAt: new Date(order.createdAt),
          updatedAt: new Date(order.updatedAt),
        }));
        const ordersNewestFirst = ordersWithDates.sort(
          (a: Order, b: Order) => b.createdAt.getTime() - a.createdAt.getTime()
        );

        setOrders(ordersNewestFirst);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <OrderPanelContext.Provider value={{ orders, setOrders }}>
      {children}
    </OrderPanelContext.Provider>
  );
};
