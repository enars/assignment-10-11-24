import styled from "styled-components";

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  border: 1px solid #ddd;
  height: 100%;
  border-radius: 4px;
`;

const OrderDetails = () => {
  return (
    <DetailsContainer>
      <h2>Order Details</h2>
    </DetailsContainer>
  );
};

export default OrderDetails;
