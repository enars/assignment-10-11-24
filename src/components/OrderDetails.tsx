import styled from "styled-components";
import { useOrderPanelContext } from "../context/OrderPanelContext";

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  border: 1px solid #ddd;
  height: 100%;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 6px;
  margin: 6px;
  border-radius: 4px;
  border: 1px solid #ddd;
`;

const OrderDetails = () => {
  const { selectedOrder } = useOrderPanelContext();

  const handleDeleteOrder = () => {
    //TODO
  };

  const handleEditOrder = () => {
    //TODO
  };

  return (
    <DetailsContainer>
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
    </DetailsContainer>
  );
};

export default OrderDetails;
