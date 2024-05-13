import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  padding: 32px 160px;
  width: 100%;
  border: 1px solid red;

  justify-content: space-between;
  align-items: center;
`;

export const DivLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Local = styled.span`
  display: flex;
  height: 38px;
  gap: 4px;
  background-color: ${(props) => props.theme.purple_100};
  color: ${(props) => props.theme.purple_500};
  padding: 8px;
  border-radius: 6px;

  svg {
    color: ${(props) => props.theme.purple_300};
  }
`;

export const Cart = styled.button`
  width: 38px;
  height: 38px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  border: none;
  background-color: ${(props) => props.theme.yellow_100};

  svg {
    width: 22px;
    height: 22px;
    margin: 8px;
    color: ${(props) => props.theme.yellow_500};
  }
`;
