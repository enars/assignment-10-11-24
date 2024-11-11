import { useOrderPanelContext } from "../context/OrderPanelContext";
import { Button } from "./shared/Button";
import { Container } from "./shared/Layout";

const BuyAndSell = () => {
  const { selectedInstrument } = useOrderPanelContext();

  const handleBuy = () => {
    //TODO
  };

  const handleSell = () => {
    //TODO
  };

  return (
    <Container>
      <h2>Order panel</h2>
      {selectedInstrument && (
        <div>
          <p>Instrument: {selectedInstrument.id}</p>
          <p>Amount: {selectedInstrument.ticker}</p>
          <p>Price: {selectedInstrument.name}</p>
          <Button onClick={handleBuy}>Purchase</Button>
          <Button onClick={handleSell}>Sell</Button>
        </div>
      )}
    </Container>
  );
};

export default BuyAndSell;
