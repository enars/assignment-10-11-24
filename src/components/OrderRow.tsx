import styled from "styled-components";
import { Order } from "../types/Order";

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  padding: 6px;
`;

const OrderRow = ({ order }: { order: Order }) => {
  return (
    <TableRow key={order.id}>
      <TableCell>{order.instrumentId}</TableCell>
      <TableCell>{order.amount}</TableCell>
      <TableCell>{order.price}</TableCell>
      <TableCell>{order.action}</TableCell>
      <TableCell>{order.createdAt.toLocaleString()}</TableCell>
      <TableCell>{order.updatedAt.toLocaleString()}</TableCell>
    </TableRow>
  );
};

export default OrderRow;
