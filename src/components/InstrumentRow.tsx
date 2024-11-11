import { Instrument } from "../types/Instrument";
import { TableCell, TableRow } from "./shared/Table";

const InstrumentRow = ({ instrument }: { instrument: Instrument }) => {
  //   const handleSelectOrder = () => {
  //     setSelectedOrder(order);
  //   };

  return (
    <TableRow>
      <TableCell>{instrument.ticker}</TableCell>
      <TableCell>{instrument.name}</TableCell>
    </TableRow>
  );
};

export default InstrumentRow;
