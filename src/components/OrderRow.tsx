import { Order } from "../types/Order";
import { TableCell, TableRow } from "./shared/Table";

const OrderRow = ({
  order,
  setSelectedOrder,
}: {
  order: Order;
  setSelectedOrder: (order: Order) => void;
}) => {
  const handleSelectOrder = () => {
    setSelectedOrder(order);
  };

  return (
    <TableRow onClick={handleSelectOrder} key={order.id}>
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
