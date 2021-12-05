
import styled from 'styled-components';


export const AuthHeaderStyled = styled.h4`
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    margin: 0;
    margin-bottom: 5px;
    text-align: center;
    color: #222222;  
    width: ${(props: {width?:string}) => props.width || "auto"};
`;
 
export const AuthSubHeaderStyled = styled.h5`
    font-weight: 400;
    font-size: 16px;
    line-height: 19.36px;
    margin: 0;
    text-align: center;  
    width: ${(props: {width?:string, lineHeight?:string}) => props.width || "auto"};
    line-height: ${(props) => props.lineHeight || "19.36px"};

    @media (max-width: 600px) {
        & {
            text-align: left;  
        }
    }
    
`;

export const AuthTextStyled = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 27.2px;
    color: #666666;
    margin: 0;
    text-align: left;  
`;

export const AuthLabelStyled  = styled.label`
    font-weight: 500;
    font-size: 14px;
    line-height: 17px; 
    color: #777777;
    margin: 10px 0;
`;

export const SpanStyled  = styled.span`
    font-weight: 400;
    font-size: 14px;
    line-height: 16.94px; 
    color: #444444;
    margin: 10px 0;
    align-self: center;
`;

export const PasswordToggle  = styled.span`
    font-weight: bolder;
    font-size: 14px;
    line-height: 19px; 
    color: #777;
    margin: 3% 10px;
    align-self: center;
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
    margin-top: 14px;
    &:hover{
        color: #000;
    }
`;

export const LinkStyled  = styled.a`
    display: inline;
    color: #5A11EE!important;
    cursor: pointer;
`;

export const AuthSpanStyled  = styled.span`
    font-weight: 500;
    font-size: 14px;
    line-height: 20px; 
    color: #666666;
    text-align: right;
    margin: 10px 0;
    padding: 0 5px;
`;