import styled from "styled-components";
import OrderDetails from "./components/OrderDetails";
import Orders from "./components/Orders";
import { OrderPanelProvider } from "./context/OrderPanelContext";
import Instruments from "./components/Instruments";

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
      </OrderPanel>
    </OrderPanelProvider>
  );
}

export default App;
