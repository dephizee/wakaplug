import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
// import styles from '../../styles/Home.module.css'
import { FormEvent, ReactElement, useEffect, useState } from 'react'
import { AuthLayout } from '../../layouts/auth_layout'
import { AuthContainerStyled, AuthMainContainerStyled, CustomRow, FlexRow,  } from '../../components/containers.style'
import { AuthHeaderStyled, AuthLabelStyled, AuthSubHeaderStyled, SpanStyled, LinkStyled, AuthSpanStyled } from '../../components/typographs.style'

import { FormContainer, InputField } from '../../components/forms.style'
import { ButtonStyled } from '../../components/buttons.style'
import { VH } from '../../components/spacing.style'
import { ImageStyle, RotatingImage } from '../../components/figures.style'
import { useRouter } from 'next/router'
import { PasswordToggler } from '../../components/passwords'
import Link from 'next/link'
import { basicNetwokCall, handleResponse } from '../../network/cb'
import { AuthEndPoint } from '../../network/endpoints'
import { useStateWithLocalStorage, useStateWithLocalStorageToken } from '../../hooks/local_storage'
import { connect } from 'react-redux'
import { setToken } from '../../redux/actions'





const Login: NextPage = ({authData, setStoreToken}:any) => {
    const router = useRouter()
    const [loading, setLoading] = useState(false);
    const [token,setLocalToken] = useStateWithLocalStorageToken();
    const [localEmail,setLocalEmail] = useStateWithLocalStorage('tmp_email');

    useEffect(() => {
        console.log('authData', authData)
    }, [authData]);

    const handleSubmit = (event: any)=>{
        event.preventDefault();
        if(loading) return;
        setLoading(true);
        const formData = new FormData(event.target);
        basicNetwokCall(AuthEndPoint.login, formData).then(response=>{
            setLoading(false);
            return response.json()
        }).then((jsonResponse)=>{
            console.log('jsonResponse', jsonResponse)
            handleResponse(jsonResponse)
            if(jsonResponse.meta.status_code === 200){
                setLocalToken(jsonResponse.meta.token)
                setLocalEmail(jsonResponse.data.email)

                router.push('/dashboard')
                
            }    
        })
        
        
    } 



    return (
    <AuthMainContainerStyled>
      <Head>
        <title>Login Page</title>
        <meta name="description" content="Login Page" />
      </Head>

        <ImageStyle width="170.97px" height="36.6px"/>
        <AuthContainerStyled>
            <AuthHeaderStyled>
                LogIn
            </AuthHeaderStyled>
            <AuthSubHeaderStyled>
                Welcome, login to your account
            </AuthSubHeaderStyled>
            <VH size="15px"/>
            <FormContainer onSubmit={handleSubmit}>
                <AuthLabelStyled>
                    Email Address
                </AuthLabelStyled>
                <InputField type="email" name="email" placeholder="Enter email address" required/>
                <AuthLabelStyled>
                    Password
                </AuthLabelStyled>
                <PasswordToggler label = "Password" name="password"  />
                
                <FlexRow alignItems="center">
                    <CustomRow>
                        <InputField type="checkbox" width="16px" height="16px" />
                        <AuthSpanStyled>
                            Remember me
                        </AuthSpanStyled>
                    </CustomRow>
                    <AuthSpanStyled>
                        <Link href="/reset-password" passHref={true}><LinkStyled>Forgot password?</LinkStyled></Link>
                    </AuthSpanStyled>
                </FlexRow>
                <VH size="20px"/>
                {
                    loading?
                    <RotatingImage src="/icon.png"/>:
                    <ButtonStyled>
                        LOGIN
                    </ButtonStyled>
                }
                
                
                
            </FormContainer>
            
            <SpanStyled>
                New to Wakaplug?  <Link href="/register" passHref={true}><LinkStyled>Signup</LinkStyled></Link>
            </SpanStyled>
        </AuthContainerStyled>
        

    </AuthMainContainerStyled>
  )
}

Login.getPageLayout = (page : ReactElement)=>{
    return  <AuthLayout>
              {page}
            </AuthLayout>
}

const mapStateToProps = (state:any) => {
    return {
        authData: state.authData
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        setStoreToken: (token:string) => dispatch(setToken(token))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)
