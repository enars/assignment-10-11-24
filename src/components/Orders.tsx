import { useOrderPanelContext } from "../context/OrderPanelContext";
import OrderRow from "./OrderRow";
import { Container } from "./shared/Layout";
import { Table, TableHeader } from "./shared/Table";

const Orders = () => {
  const { orders, setSelectedOrder } = useOrderPanelContext();

  return (
    <Container>
      <h2>Orders</h2>
      <Table>
        <thead>
          <tr>
            <TableHeader>Instrument</TableHeader>
            <TableHeader>Amounts</TableHeader>
            <TableHeader>Price</TableHeader>
            <TableHeader>Action</TableHeader>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <OrderRow
              key={order.id}
              setSelectedOrder={setSelectedOrder}
              order={order}
            />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Orders;
