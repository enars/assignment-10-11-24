import { useEffect, useState } from "react";
import { Order } from "../types/Order";

const Orders = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    fetch(`api/orders`)
      .then((res) => res.json())
      .then((data) => setOrders(data.items))
      .catch((error) => console.error(error));
  }, []);

  console.log(orders);

  return (
    <div>
      <h1>Orders</h1>
      <div>
        {orders.map((order) => (
          <div key={order.id}>{order.instrumentId}</div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
