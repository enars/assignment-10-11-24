import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);
  height: 100%;
  border-radius: 10px;
  padding: 0 1rem;
  overflow-y: auto;
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Flexbox = styled.div<{
  flexDirection: "column" | "row";
}>`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  flex-direction: ${({ flexDirection }) => flexDirection};
  gap: 1rem;
`;
