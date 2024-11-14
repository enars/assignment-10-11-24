import { Order } from "../types/Order";

const NUMBER_OF_RETRIES = 3;

// Only used for fetching data, I have handled update, delete and create requests in their respective components
const useApi = () => {
  const fetchInstruments = async () => {
    try {
      const data = await fetchWithRetries(`api/instruments`);
      return data.items;
    } catch (error) {
      console.error(error);
    }
  };

  const fetchOrders = async () => {
    try {
      const data = await fetchWithRetries(`api/orders`);
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

  // Three retries because of error prone BE
  const fetchWithRetries = async (url: string) => {
    let retries = 0;
    let data = null;

    while (retries < NUMBER_OF_RETRIES && !data) {
      try {
        const res = await fetch(url);
        if (res.ok) {
          data = res.json();
        }
      } catch {
        retries++;
      }
    }
    return data;
  };

  return { fetchOrders, fetchInstruments };
};

export default useApi;
