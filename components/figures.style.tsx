import styled, { keyframes } from 'styled-components';

export const ImageStyle = styled.img.attrs(( props : {src : string, alt: string} ) => (
    { 
        src: props.src||"/logo.png",
        alt: props.alt||"...",
     }
    ))`
    
    width: ${props => props.width || "auto"};
    height: ${props => props.height || "auto"};
    
`;
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const RotatingImage = styled(ImageStyle)`
  animation: ${rotate} 2s linear infinite;
  padding: 5px;
  font-size: 1.2rem;
  align-self: center;
`;
