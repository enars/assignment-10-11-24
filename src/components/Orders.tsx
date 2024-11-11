import styled from "styled-components";
import { useOrderPanelContext } from "../context/OrderPanelContext";
import OrderRow from "./OrderRow";

const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  border: 1px solid #ddd;
  height: 100%;
  border-radius: 4px;
`;

const OrderTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
`;

const TableHeader = styled.th`
  border-bottom: 1px solid #ddd;
  text-align: left;
  padding: 4px;
`;

const Orders = () => {
  const { orders, setSelectedOrder } = useOrderPanelContext();

  return (
    <OrderContainer>
      <h2>Orders</h2>
      <OrderTable>
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
      </OrderTable>
    </OrderContainer>
  );
};

export default Orders;
