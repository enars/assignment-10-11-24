import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
`;

export const TableHeader = styled.th`
  border-bottom: 1px solid #ddd;
  text-align: left;
  padding: 4px;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f3f3f3;
  }
`;

export const TableCell = styled.td`
  padding: 6px;
`;
