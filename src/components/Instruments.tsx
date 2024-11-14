import { useOrderPanelContext } from "../context/OrderPanelContext";
import InstrumentRow from "./InstrumentRow";
import { Container } from "./shared/Layout";
import { Table, TableHeader } from "./shared/Table";

const Instruments = () => {
  const { instruments, setSelectedInstrument } = useOrderPanelContext();

  return (
    <Container>
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
            <InstrumentRow
              key={instrument.id}
              setSelectedInstrument={setSelectedInstrument}
              instrument={instrument}
            />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Instruments;
