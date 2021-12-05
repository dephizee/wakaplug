// import styles from '../styles/AuthLayout.module.css'
import { GlobalStyle } from '../styles/globals.style';
import { AuthLayoutStyled } from '../components/auth_layout.style';
import { setEmail, setToken, setVerifcationCode } from '../redux/actions';
import { connect } from 'react-redux'
import { useEffect } from 'react';
import { useStateWithLocalStorage, useStateWithLocalStorageToken } from '../hooks/local_storage';

const mapStateToProps = (state:any) => {
    return {
        authData: state.authData
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        setStoreToken: (token:string) => dispatch(setToken(token)),
        setStoreEmail: (email:string) => dispatch(setEmail(email)),
        setStoreVerificationCode: (v_code:string) => dispatch(setVerifcationCode(v_code)),
    }
}

export const AuthMainLayout = ({children, setStoreEmail, setStoreToken, setStoreVerificationCode}:any) => {
    const [token,setLocalToken] = useStateWithLocalStorageToken();
    const [localEmail,setLocalEmail] = useStateWithLocalStorage('tmp_email');
    const [localVerificationCode,setVerificationCode] = useStateWithLocalStorage('tmp_verification_code');
    useEffect(() => {
        if(!token) return;
        setStoreToken(token)
    }, [setStoreToken, token]);
    useEffect(() => {
        if(!localEmail) return;
        setStoreEmail(localEmail)
    }, [setStoreEmail, localEmail]);
    useEffect(() => {
        if(!localVerificationCode) return;
        setStoreVerificationCode(localVerificationCode)
    }, [setStoreVerificationCode, localVerificationCode]);
    return ( 
        <AuthLayoutStyled>
            <GlobalStyle />
            {children}
        </AuthLayoutStyled>
     );
}

export const AuthLayout = connect(mapStateToProps, mapDispatchToProps)(AuthMainLayout)
