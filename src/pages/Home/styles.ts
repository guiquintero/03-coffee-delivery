import { styled } from "styled-components";
import background from "../../assets/BackgroundBanner.png";

export const BannerContainer = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  display: flex;
  justify-content: center;
  margin: 0 auto;
  gap: 6.125rem;
  align-items: center;
  height: 70vh;
  width: 100%;
  padding: 0 160px;
`;

export const BannerContent = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  max-width: 588px;

  h1 {
    font-size: 3rem;
    color: ${(props) => props.theme.base_title};
    font-family: ${(props) => props.theme.title};
    font-weight: 700;
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme.base_subtitle};
  }

  li {
    list-style: none;
  }

  div {
    margin-top: 4rem;
    display: flex;
    color: ${(props) => props.theme.base_text};
    gap: 2.5rem;
  }



  svg {
    width: 16px;
    height: 16px;
    color: ${props => props.theme.background};
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
  li {
    display: flex;
    gap: 0.75rem;
    align-items: center;
  }
`;

export type IconColor = "yellow_500" | "yellow_300" | "base_text" | "purple_500";

interface IconProps {
  color: IconColor;
}

const COLORS = {
  yellow_500: 'yellow_500',
  yellow_300: 'yellow_300',
  base_text: 'base_text',
  purple_500: 'purple_500',
} as const;

interface IconProps{
  color: keyof typeof COLORS;
}


export const Icon = styled.span<IconProps>`
    padding: 8px;
    border-radius: 50%;
    width: 32px;
    height: 32px;

    background-color: ${props=>props.theme[COLORS[props.color]]};
`;
