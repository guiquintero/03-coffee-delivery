import { styled } from "styled-components";

export const DisplayCheckout = styled.section`
  display: flex;
  flex-direction: row;
  padding: 0 auto;

  gap: 2rem;
`;

export const FinalizingOrder = styled.div`
  width: auto;
`;

export const OrderSummary = styled.div`
  width: auto;
`;

export const Title = styled.h2`
  font-size: 1.1rem;
  color: ${(props) => props.theme.base_subtitle};
  font-family: ${(props) => props.theme.title};
  margin-bottom: 15px;
`;

export const AddressPayment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: ${(props) => props.theme.base_card};
  border-radius: 6px;
  padding: 40px;
  margin-bottom: 0.75rem;

  > div {
    display: flex;
    gap: 0.5rem;
    align-items: start;
  }
  h3 {
    color: ${(props) => props.theme.base_subtitle};
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 2px;
  }
  p {
    font-size: 14px;
    color: ${(props) => props.theme.base_text};
  }
`;

export const AddressForms = styled.form`
  display: grid;
  grid-template-columns: 200px 276px 60px;
  row-gap: 1rem;
  column-gap: 0.75rem;

  #Input1 {
    grid-column: 1/2;
  }
  #Input2 {
    grid-column: 1/4;
  }
  #Input3 {
    grid-column: 1/2;
  }
  #Input4 {
    grid-column: 2/4;
  }
  #Input5 {
    grid-column: 1/2;
  }
  #Input6 {
    grid-column: 2/3;
  }
  #Input7 {
    grid-column: 3/4;
  }
`;

export const AddressInput = styled.input`
  background-color: ${(props) => props.theme.base_input};
  border: 1px solid ${(props) => props.theme.base_button};
  border-radius: 4px;
  padding: 12px;
  font-size: 14px;
  color: ${(props) => props.theme.base_text};
  ::placeholder {
    color: ${(props) => props.theme.base_label};
  }
`;



export const ButtonSelect = styled.div`
  font-size: 14px;
  width: 33%;
  input {
    display: none;
  }

  label {
    display: flex;
    gap: 0rem;
    padding: 1rem;
    background-color: ${(props) => props.theme.base_button};
    border-radius: 8px;
  }
`;
