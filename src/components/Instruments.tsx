import styled from "styled-components";
import { useOrderPanelContext } from "../context/OrderPanelContext";
import InstrumentRow from "./InstrumentRow";
import { Table, TableHeader } from "./shared/Table";

const InstrumentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  border: 1px solid #ddd;
  height: 100%;
  border-radius: 4px;
`;

const Instruments = () => {
  const { instruments } = useOrderPanelContext();

  return (
    <InstrumentsContainer>
      <h2>Instruments</h2>
      <Table>
        <thead>
          <tr>
            <TableHeader>Ticker</TableHeader>
            <TableHeader>Name</TableHeader>
          </tr>
        </thead>
        <tbody>
          {instruments.map((instrument) => (
            <InstrumentRow key={instrument.id} instrument={instrument} />
          ))}
        </tbody>
      </Table>
    </InstrumentsContainer>
  );
};

export default Instruments;
