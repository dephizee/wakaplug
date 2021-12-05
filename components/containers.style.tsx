import styled from 'styled-components';

export const AuthContainerStyled = styled.div`
    padding: 1.5rem;
    padding-top: 3rem;
    padding-bottom: 1rem;
    display: flex;
    /* text-align: center; */
    flex-direction: column;
    justify-content: center;
    align-items: ${(props: {alignItems?:string}) => props.alignItems || "flex-start"};
    min-width: 100%;
    background-color: #FFFFFF;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06);
    border-radius: 3px;
    @media (max-width: 600px) {
        & {
            width: 100%;
        }
    }
`;


export const AuthMainContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 426px;
    row-gap: 30px;
    @media (max-width: 600px) {
        & {
            padding: 0 10%;
        }
    }
    
    
`;
 
export const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: ${(props: {alignItems?:string, justifyContent?:string, width?:string}) => props.alignItems || "flex-start"};;
    justify-content: ${(props) => props.justifyContent || "space-between"};
    width: ${(props) => props.width || "100%"};
`;
export const CustomRow = styled.div`
    
    
    
    width: ${(props:{display?:string, height?:string, width?:string}) => props.width || "auto"};
    height: ${(props) => props.height || "auto"};
    display: ${(props) => props.display || "block"};
`;