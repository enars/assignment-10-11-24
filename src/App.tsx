import styled from "styled-components";
import OrderDetails from "./components/OrderDetails";
import Orders from "./components/Orders";
import { OrderPanelProvider } from "./context/OrderPanelContext";
import Instruments from "./components/Instruments";
import BuyAndSell from "./components/BuyAndSell";

/** TODO
 * handle api errors
 * add design
 */

const OrderPanel = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

function App() {
  return (
    <OrderPanelProvider>
      <OrderPanel>
        <Orders />
        <OrderDetails />
        <Instruments />
        <BuyAndSell />
      </OrderPanel>
    </OrderPanelProvider>
  );
}

export default App;
