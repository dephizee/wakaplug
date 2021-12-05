import styled from 'styled-components';

export const VH = styled.label`
    font-weight: 500;
    height: ${(props: {size:string}) => props.size || "10px"};
`;