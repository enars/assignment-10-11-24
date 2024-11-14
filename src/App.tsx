import styled from "styled-components";
import OrderDetails from "./components/OrderDetails";
import Orders from "./components/Orders";
import { OrderPanelProvider } from "./context/OrderPanelContext";
import Instruments from "./components/Instruments";
import BuyAndSell from "./components/BuyAndSell";

const OrderPanel = styled.div`
  display: grid;
  height: 100%;
  grid-template-areas:
    "Orders OrderDetails"
    "Instruments BuyAndSell";
  grid-template-columns: 1fr 0.5fr;
  grid-template-rows: min-content min-content;
  gap: 30px;
  max-width: 1200px;
  margin: auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      "Orders"
      "OrderDetails"
      "BuyAndSell"
      "Instruments";
    overflow-y: scroll;
  }
`;

const GridItem = styled.div<{
  gridArea: string;
}>`
  grid-area: ${(p) => p.gridArea};
  height: 100%;
`;

function App() {
  return (
    <OrderPanelProvider>
      <OrderPanel>
        <GridItem gridArea="Orders">
          <Orders />
        </GridItem>
        <GridItem gridArea="Instruments">
          <Instruments />
        </GridItem>
        <GridItem gridArea="OrderDetails">
          <OrderDetails />
        </GridItem>

        <GridItem gridArea="BuyAndSell">
          <BuyAndSell />
        </GridItem>
      </OrderPanel>
    </OrderPanelProvider>
  );
}

export default App;
