import styled from "styled-components";
import { useOrderPanelContext } from "../context/OrderPanelContext";
import OrderRow from "./OrderRow";
import { Table, TableHeader } from "./shared/Table";

const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  border: 1px solid #ddd;
  height: 100%;
  border-radius: 4px;
`;

const Orders = () => {
  const { orders, setSelectedOrder } = useOrderPanelContext();

  return (
    <OrderContainer>
      <h2>Orders</h2>
      <Table>
        <thead>
          <tr>
            <TableHeader>Instrument</TableHeader>
            <TableHeader>Amounts</TableHeader>
            <TableHeader>Price</TableHeader>
            <TableHeader>Action</TableHeader>
            <TableHeader>Created At</TableHeader>
            <TableHeader>Updated At</TableHeader>
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
    </OrderContainer>
  );
};

export default Orders;
