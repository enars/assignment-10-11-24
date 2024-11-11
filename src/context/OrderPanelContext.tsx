import { createContext, useContext, useEffect, useState } from "react";
import { Instrument } from "../types/Instrument";
import { Order } from "../types/Order";

type OrderPanelContextType = {
  orders: Order[];
  instruments: Instrument[];
  selectedOrder: Order | null;
  setSelectedOrder: React.Dispatch<React.SetStateAction<Order | null>>;
  selectedInstrument: Instrument | null;
  setSelectedInstrument: React.Dispatch<
    React.SetStateAction<Instrument | null>
  >;
};

const defaultOrderPanelContext = {
  orders: [],
  instruments: [],
  selectedOrder: null,
  setSelectedOrder: () => {},
  selectedInstrument: null,
  setSelectedInstrument: () => {},
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
  const [instruments, setInstruments] = useState<Instrument[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [selectedInstrument, setSelectedInstrument] =
    useState<Instrument | null>(null);

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

    fetch(`api/instruments`)
      .then((res) => res.json())
      .then((data) => {
        const instruments = data.items;
        setInstruments(instruments);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <OrderPanelContext.Provider
      value={{
        orders,
        instruments,
        selectedOrder,
        setSelectedOrder,
        selectedInstrument,
        setSelectedInstrument,
      }}
    >
      {children}
    </OrderPanelContext.Provider>
  );
};
