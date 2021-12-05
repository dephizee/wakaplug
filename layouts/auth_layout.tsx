// import styles from '../styles/AuthLayout.module.css'
import { GlobalStyle } from '../styles/globals.style';
import { AuthLayoutStyled } from '../components/auth_layout.style';
export const AuthLayout = ({children}:any) => {
    return ( 
        <AuthLayoutStyled>
            <GlobalStyle />
            {children}
        </AuthLayoutStyled>
     );
}
 
