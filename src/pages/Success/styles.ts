import { styled } from "styled-components";

export const DisplaySuccess = styled.section`
  margin-top: 120px;
  display: flex;
  flex-direction: row;
  padding: 0 auto;
  align-items: flex-end;
  gap: 200px;
`;

export const ContainerLeft = styled.section`
  width: 552px;
  > h2 {
    color: ${(props) => props.theme.yellow_500};
    font-size: 2rem;
    margin-bottom: 4px;
  }
  > p {
    font-size: 1.25rem;
    margin-bottom: 2.5rem;
  }

  > div {
    display: flex;
    flex-direction: column;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  list-style: none;
  position: relative;
  padding: 40px;
  border-radius: 6px 36px;
  background: white; /* Cor de fundo do conteúdo */

  &::before {
    content: "";
    position: absolute;
    top: -1px;
    right: -1px;
    bottom: -1px;
    left: -1px;
    border-radius: 6px 36px;

    background: linear-gradient(
      to left,
      ${(props) => props.theme.purple_300},
      ${(props) => props.theme.yellow_300}
    );
    z-index: -1; /* Coloca o pseudo-elemento atrás do conteúdo */
  }
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    p {
      width: 100%;
    }
  }
`;

export type IconColor = "yellow_500" | "yellow_300" | "purple_300";

interface IconProps {
  color: IconColor;
}

const COLORS = {
  yellow_500: "yellow_500",
  yellow_300: "yellow_300",
  purple_300: "purple_300",
} as const;

interface IconProps {
  color: keyof typeof COLORS;
}

export const Icon = styled.span<IconProps>`
  padding: 8px;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  color: ${(props) => props.theme.white};

  background-color: ${(props) => props.theme[COLORS[props.color]]};
`;

export const ContainerRight = styled.section`
  display: flex;
  align-items: flex-end;
`;
