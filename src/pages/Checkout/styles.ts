import { styled } from "styled-components";

export const DisplayCheckout = styled.form`
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

export const ContainerLeft = styled.div`
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

export const AddressForms = styled.section`
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
  display: flex;
  font-size: 14px;
  width: 33%;
  
  input {
    display: none;
  }

  label {
    box-sizing: border-box;
    display: flex;
    gap: 0.75rem;
    padding: 1rem;
    background-color: ${(props) => props.theme.base_button};
    width: 100%;
    font-size: 14px;
    border-radius: 8px;
    cursor: pointer;
    border: 1px solid transparent;
  }

  input:checked + label {
    border: 1px solid ${(props) => props.theme.purple_300};
    background-color: ${(props) => props.theme.purple_100};
  }
`;

export const ContainerRight = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.base_card};
  border-radius: 6px 44px;
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

export const FinalizingOrderPrice = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  >div{
    display: flex;
    justify-content: space-between;
    >h4{
    font-size: 20px;
    color: ${(props) => props.theme.base_subtitle};
  }
  }
  
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.yellow_300};
  color: ${(props) => props.theme.white};
  border: none;
  border-radius: 6px;
  padding: 12px;
  font-size: 14px;
  cursor: pointer;
  transition: 0.3s;
  margin-top: 1.5rem;
  &:hover {
    background-color: ${(props) => props.theme.yellow_500};
  }
  &:disabled {
    background-color: ${(props) => props.theme.yellow_100};
    cursor: not-allowed;
  }
`;