import styled from "styled-components";
import OrderDetails from "./components/OrderDetails";
import Orders from "./components/Orders";
import { OrderPanelProvider } from "./context/OrderPanelContext";

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
      </OrderPanel>
    </OrderPanelProvider>
  );
}

export default App;
