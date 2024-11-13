import { Order } from "../types/Order";

const useApi = () => {
  const fetchInstruments = async () => {
    try {
      const res = await fetch(`api/instruments`);
      const data = await res.json();
      return data.items;
    } catch (error) {
      console.error(error);
    }
  };

  const fetchOrders = async () => {
    try {
      const res = await fetch(`api/orders`);
      const data = await res.json();
      const ordersWithDates = data.items.map((order: Order) => ({
        ...order,
        createdAt: new Date(order.createdAt),
        updatedAt: new Date(order.updatedAt),
      }));
      const ordersNewestFirst = ordersWithDates.sort(
        (a: Order, b: Order) => b.createdAt.getTime() - a.createdAt.getTime()
      );
      return ordersNewestFirst;
    } catch (error) {
      console.error(error);
    }
  };

  return { fetchOrders, fetchInstruments };
};

export default useApi;
