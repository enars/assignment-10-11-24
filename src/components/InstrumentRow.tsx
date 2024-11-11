import { Instrument } from "../types/Instrument";
import { TableCell, TableRow } from "./shared/Table";

const InstrumentRow = ({
  instrument,
  setSelectedInstrument,
}: {
  instrument: Instrument;
  setSelectedInstrument: (instrument: Instrument) => void;
}) => {
  const handleSelectedInstrument = () => {
    setSelectedInstrument(instrument);
  };

  return (
    <TableRow onClick={handleSelectedInstrument}>
      <TableCell>{instrument.ticker}</TableCell>
      <TableCell>{instrument.name}</TableCell>
    </TableRow>
  );
};

export default InstrumentRow;
