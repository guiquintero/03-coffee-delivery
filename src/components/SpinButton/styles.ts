import { styled } from "styled-components";

export const SpinButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.theme.base_button};
  width: 72px;
  padding: 8.61px 0;
  justify-content: center;
  align-items: baseline;

  border-radius: 6px;
`;

export const Button = styled.button`
  align-items: baseline;
  color: ${(props) => props.theme.purple_300};
  border: none;
  background-color: transparent;
  align-items: center;

  &:hover {
    color: ${(props) => props.theme.purple_500};
  }
`;

export const Input = styled.input`
  font-size: 1rem;
  align-items: baseline;
  text-align: center;
  border: none;
  background-color: transparent;
  width: 20px;
`;


