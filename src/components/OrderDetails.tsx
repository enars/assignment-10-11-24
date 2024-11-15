import { useEffect, useState } from "react";
import { useOrderPanelContext } from "../context/OrderPanelContext";
import { Button } from "./shared/Button";
import { Container, FormRow } from "./shared/Layout";

const OrderDetails = () => {
  const { refreshOrders, selectedOrder, setSelectedOrder } =
    useOrderPanelContext();
  const [statusMessage, setStatusMessage] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [price, setPrice] = useState<string>("");

  useEffect(() => {
    if (selectedOrder) {
      setAmount(selectedOrder.amount.toString());
      setPrice(selectedOrder.price.toString());
    }
  }, [selectedOrder]);

  const handleDeleteOrder = () => {
    if (!selectedOrder) {
      return;
    }

    fetch(`api/orders/${selectedOrder?.id}`, {
      method: "DELETE",
    }).then(() => {
      setStatusMessage("Order deleted successfully");
      refreshOrders();
      setSelectedOrder(null);
    });
  };

  // Only allows for editing amount and price
  const handleEditOrder = () => {
    if (!selectedOrder) {
      return;
    }

    // Basic validation
    if (!amount || !price || isNaN(Number(amount)) || isNaN(Number(price))) {
      setStatusMessage("Amount or price cannot be empty");
      return;
    }

    const updatedOrder = {
      ...selectedOrder,
      amount: Number(amount),
      price: Number(price),
    };

    fetch(`api/orders/${selectedOrder.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedOrder),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res);
      })
      .then(() => {
        setStatusMessage("Order edited successfully");
        refreshOrders();
      })
      .catch((error) => {
        setStatusMessage(error.statusText);
      });
  };

  return (
    <Container>
      <h2>Order Details</h2>
      {selectedOrder && (
        <div>
          <p>Instrument: {selectedOrder.instrumentId}</p>
          <FormRow>
            <label>Amount</label>
            <input value={amount} onChange={(e) => setAmount(e.target.value)} />
          </FormRow>
          <FormRow>
            <label>Price</label>
            <input value={price} onChange={(e) => setPrice(e.target.value)} />
          </FormRow>
          <p>Action: {selectedOrder.action}</p>
          <p>Created At: {selectedOrder.createdAt.toLocaleString()}</p>
          <p>Updated At: {selectedOrder.updatedAt.toLocaleString()}</p>
          <Button color="lightpink" onClick={handleDeleteOrder}>
            Delete order
          </Button>
          <Button color="lightskyblue" onClick={handleEditOrder}>
            Edit order
          </Button>
          <p>{statusMessage}</p>
        </div>
      )}
    </Container>
  );
};

export default OrderDetails;
