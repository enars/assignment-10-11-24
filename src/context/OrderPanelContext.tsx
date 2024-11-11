import { createContext, useContext, useEffect, useState } from "react";
import { Order } from "../types/Order";

type OrderPanelContextType = {
  orders: Order[];
  setOrders: React.Dispatch<React.SetStateAction<Order[]>>;
  selectedOrder: Order | null;
  setSelectedOrder: React.Dispatch<React.SetStateAction<Order | null>>;
};

const defaultOrderPanelContext = {
  orders: [],
  setOrders: () => {},
  selectedOrder: null,
  setSelectedOrder: () => {},
};

const OrderPanelContext = createContext<OrderPanelContextType>(
  defaultOrderPanelContext
);

export const useOrderPanelContext = () => {
  return useContext(OrderPanelContext);
};

export const OrderPanelProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  console.log(selectedOrder);

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
    <OrderPanelContext.Provider
      value={{ orders, setOrders, selectedOrder, setSelectedOrder }}
    >
      {children}
    </OrderPanelContext.Provider>
  );
};
