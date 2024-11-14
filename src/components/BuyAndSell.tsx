import { useState } from "react";
import { useOrderPanelContext } from "../context/OrderPanelContext";
import { OrderAction } from "../types/Order";
import { Button } from "./shared/Button";
import { Container, Flexbox, FormRow } from "./shared/Layout";

const BuyAndSell = () => {
  const { selectedInstrument, refreshOrders } = useOrderPanelContext();
  const [amount, setAmount] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [statusResponse, setstatusResponse] = useState<string>("");

  const performOrderAction = (action: OrderAction) => {
    if (!selectedInstrument) {
      setstatusResponse("No instrument selected");
      return;
    }

    // Basic validation
    if (!amount || !price || isNaN(Number(amount)) || isNaN(Number(price))) {
      setstatusResponse("Amount or price cannot be empty");
      return;
    }

    // Cast to number
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
        refreshOrders();
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
        <Flexbox flexDirection={"column"}>
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

          <Flexbox flexDirection={"row"}>
            <Button
              color="lightgreen"
              onClick={() => performOrderAction(OrderAction.BUY)}
            >
              Buy
            </Button>
            <Button
              color="lightskyblue"
              onClick={() => performOrderAction(OrderAction.SELL)}
            >
              Sell
            </Button>
          </Flexbox>

          {statusResponse && <div>{statusResponse}</div>}
        </Flexbox>
      )}
    </Container>
  );
};

export default BuyAndSell;
