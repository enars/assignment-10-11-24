import styled from "styled-components";
import { useOrderPanelContext } from "../context/OrderPanelContext";
import { Button } from "./shared/Button";
import { Container } from "./shared/Layout";
import { useState } from "react";
import { OrderAction } from "../types/Order";

const FormRow = styled.div`
  display: flex;
  flex-direction: column;
`;

const BuyAndSell = () => {
  const { selectedInstrument, fetchOrders } = useOrderPanelContext();
  const [amount, setAmount] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [statusResponse, setstatusResponse] = useState<string>("");

  const performOrderAction = (action: OrderAction) => {
    if (!selectedInstrument) {
      setstatusResponse("No instrument selected");
      return;
    }

    if (!amount || !price) {
      setstatusResponse("Amount or price cannot be empty");
      return;
    }

    const order = {
      instrumentId: selectedInstrument?.id,
      amount: Number(amount),
      price: Number(price),
      action,
    };

    fetch(`api/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res);
      })
      .then(() => {
        // setOrders((prevOrders) => [data, ...prevOrders]);
        fetchOrders();
        setstatusResponse("Order created successfully");
      })
      .catch((error) => {
        setstatusResponse(error.statusText);
      });
  };

  return (
    <Container>
      <h2>Order panel</h2>
      {selectedInstrument && (
        <div>
          <span>
            {`${selectedInstrument.name} (${selectedInstrument.ticker})`}
          </span>
          <FormRow>
            <label>Amount</label>
            <input onChange={(e) => setAmount(e.target.value)} />
          </FormRow>
          <FormRow>
            <label>price</label>
            <input onChange={(e) => setPrice(e.target.value)} />
          </FormRow>

          <Button onClick={() => performOrderAction(OrderAction.BUY)}>
            Buy
          </Button>
          <Button onClick={() => performOrderAction(OrderAction.SELL)}>
            Sell
          </Button>

          {statusResponse && <div>{statusResponse}</div>}
        </div>
      )}
    </Container>
  );
};

export default BuyAndSell;
