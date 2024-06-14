import { styled } from "styled-components";

export const DisplayCards = styled.ul`
  display: grid;
  column-gap: 32px;
  row-gap: 40px;
  width: 100%;
  grid-template-columns: auto auto auto auto;
`;

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  width: 256px;
  height: 310px;
  border-radius: 6px 36px 6px 36px;
  background-color: ${({ theme }) => theme.base_card};
  justify-content: center;
  align-items: center;
 

  p {
    text-align: center;
  }

  img {
    width: 120px;
    height: 120px;
    margin-top: -40px;
  }
  div{
    display: flex;
    gap: 0.25rem;
    align-items: end;
  }
`;

export const Tag = styled.p`
  text-transform: uppercase;
  width: fit-content;
  padding:  0.25rem 0.5rem;
  margin: 0.75rem 0 1rem;
  border-radius: 20px;
  
  background-color: ${({ theme }) => theme.yellow_100};
  color: ${({ theme }) => theme.yellow_500};

  font-size: 0.70rem;
  font-weight: 700;
`;

export const Title = styled.p`
  font-family: ${({ theme }) => theme.title};
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.base_subtitle};
`;

export const Description = styled.p`
  font-size: 0.85rem;
  font-weight: 400;
  color: ${({ theme }) => theme.base_label};
  padding: 0 1.25rem;
  margin:0.5rem 0 2rem;
`;

export const Real = styled.span`
  font-size: 0.85rem;
  font-weight: 400;
  color: ${({ theme }) => theme.base_text};
  padding-bottom: 0.25rem;
`;

export const Valor = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  font-family: ${({ theme }) => theme.title};
  color: ${({ theme }) => theme.base_text};
`;

export const ShoppingCartButton = styled.button`
  width: 38px;
  height: 38px;
  border-radius: 6px;
  border: none;
  background-color: ${({ theme }) => theme.purple_500};
  display: flex;
  justify-content: center;
  align-items: center;

  svg{
    color: ${({ theme }) => theme.white}; 
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem !important;
  align-items: center;
`;

export const BottomArea = styled.div`
width: fit-content;
  display: flex;
  flex-direction: row;
  gap: 24px !important; 

`;