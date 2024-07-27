import { styled } from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8px 8px 32px;
  margin-bottom: 32px;
  border-bottom: 1px solid ${(props) => props.theme.base_button};
  width: 368px;
  gap: 20px !important;


  > img {
    width: 64px;
  }

  > div {
    display: grid;
    grid-template-columns: 72px 91px;
    column-gap: 0.5rem;
    row-gap: 0.5rem;

    button {
      display: flex;
      align-items: center;
      justify-content: center;

      background-color: ${(props) => props.theme.base_button};
      border: none;
      border-radius: 6px;
      color: ${(props) => props.theme.base_text};
      gap: 4px;
      &:hover {
        background-color: ${(props) => props.theme.base_hover};
      }
      
      > svg {
        color: ${(props) => props.theme.purple_300};
      }
    }
    

    #name {
      font-size: 1rem;
      grid-column: 1/3;
    }
    #quantity {
      grid-column: 1/2;
    }
    #button {
      grid-column: 2/3;
    }
  }
`;
