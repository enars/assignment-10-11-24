import { useOrderPanelContext } from "../context/OrderPanelContext";
import { Button } from "./shared/Button";
import { Container } from "./shared/Layout";

const OrderDetails = () => {
  const { selectedOrder } = useOrderPanelContext();

  const handleDeleteOrder = () => {
    //TODO
  };

  const handleEditOrder = () => {
    //TODO
  };

  return (
    <Container>
      <h2>Order Details</h2>
      {selectedOrder && (
        <div>
          <p>Instrument: {selectedOrder.instrumentId}</p>
          <p>Amount: {selectedOrder.amount}</p>
          <p>Price: {selectedOrder.price}</p>
          <p>Action: {selectedOrder.action}</p>
          <p>Created At: {selectedOrder.createdAt.toLocaleString()}</p>
          <p>Updated At: {selectedOrder.updatedAt.toLocaleString()}</p>
          <Button onClick={handleDeleteOrder}>Delete order</Button>
          <Button onClick={handleEditOrder}>Edito order</Button>
        </div>
      )}
    </Container>
  );
};

export default OrderDetails;
