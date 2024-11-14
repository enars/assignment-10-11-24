import styled from "styled-components";

export const Button = styled.button<{
  color: string;
}>`
  padding: 6px;
  margin: 6px;
  border-radius: 4px;
  border: 1px solid #ddd;
  width: 100%;
  background-color: ${({ color }) => color};
`;
