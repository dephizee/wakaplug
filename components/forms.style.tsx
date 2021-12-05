import styled from 'styled-components';

export const InputField = styled.input.attrs(( props ) => (
    { 
        minLength: props.minLength||'1',
        // placeholder: props.placeholder||"write here..",
    }
    ))`
    font-weight: 500;
    width: ${(props: {width?:string, height?:string, minLength?:string}) => props.width || "100%"};
    height: ${(props) => props.height || "50px"};
    background: #FFFFFF;
    border: 1px solid #EAEAEA;
    box-sizing: border-box;
    border-radius: 3px;
    padding: 0 20px;
    color: #ACACAC;
    margin-bottom: 10px;
    
`;

export const FormContainer = styled.form.attrs(( props ) => (
        { 
            // type: props.type||"text",
            // placeholder: props.placeholder||"write here..",
        }
        ))`
    margin: 20px 0;
    width: 100%;
    align-items: flex-start;
    display: flex;
    flex-direction: column;
`;