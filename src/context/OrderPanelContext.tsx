import { createContext, useContext, useEffect, useState } from "react";
import { Instrument } from "../types/Instrument";
import { Order } from "../types/Order";
import useApi from "../api/useApi";

type OrderPanelContextType = {
  orders: Order[];
  refreshOrders: () => void;
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
  refreshOrders: () => {},
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

  const { fetchOrders, fetchInstruments } = useApi();

  useEffect(() => {
    setInitialData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const refreshOrders = async () => {
    const orders = await fetchOrders();
    const ordersWithInstruments = insertOrderInstruments(orders, instruments);
    setOrders(ordersWithInstruments);
  };

  const insertOrderInstruments = (
    orders: Order[],
    instruments: Instrument[]
  ) => {
    return orders.map((order) => {
      const instrument = instruments.find(
        (instrument) => instrument.id === order.instrumentId
      );
      return {
        ...order,
        instrumentTicker: instrument?.ticker || "",
      };
    });
  };

  const setInitialData = async () => {
    const orders = await fetchOrders();
    const instruments = await fetchInstruments();

    const ordersWithInstruments = insertOrderInstruments(orders, instruments);
    setOrders(ordersWithInstruments);
    setInstruments(instruments);
  };

  return (
    <OrderPanelContext.Provider
      value={{
        orders,
        refreshOrders,
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
