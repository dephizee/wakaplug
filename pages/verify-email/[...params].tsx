import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FormEvent, ReactElement, useEffect, useState } from 'react'
import { ButtonStyled } from '../../components/buttons.style'
import { AuthContainerStyled, AuthMainContainerStyled } from '../../components/containers.style'
import { ImageStyle, RotatingImage } from '../../components/figures.style'
import { FormContainer, InputField } from '../../components/forms.style'
import { VH } from '../../components/spacing.style'
import { AuthHeaderStyled, AuthTextStyled, LinkStyled, SpanStyled } from '../../components/typographs.style'
import { useStateWithLocalStorageToken } from '../../hooks/local_storage'
import { AuthLayout } from '../../layouts/auth_layout'
import { basicNetwokCall, handleResponse } from '../../network/cb'
import { AuthEndPoint } from '../../network/endpoints'

interface Props {
    
}

const VerifyEmail : NextPage = (props: Props) => {
    const router = useRouter()
    const [loading, setLoading] = useState(false);
    const [token,setToken] = useStateWithLocalStorageToken();

    const {params} = router.query;
    
    
    useEffect(() => {
        if( typeof window !== 'undefined' ){
            if(params && params.length !== 2){
                router.push('/');
            }
            
        }
    }, [params, router]);

    const handleSubmit = (event: any)=>{
        event.preventDefault();
        if(loading) return;
        setLoading(true);
        const token_obj = {'x-access-token' : token}
        const formData = new FormData(event.target);
        basicNetwokCall(AuthEndPoint.verifyCode, formData, token_obj).then(response=>{
            setLoading(false);
            return response.json()
        }).then((jsonResponse)=>{
            console.log('jsonResponse', jsonResponse)
            handleResponse(jsonResponse)
            if(jsonResponse.meta.status_code === 200){
                router.push('/verification-successful')
            }    
        })
        
        
    }
    const resendCode = (event: any)=>{
        event.preventDefault();
        if(loading) return;
        setLoading(true);
        const token_obj = {'x-access-token' : token}
        const formData = new FormData();
        formData.append('verifyRedirectUrl', '/verifcation')
        basicNetwokCall(AuthEndPoint.sendVerification, formData, token_obj).then(response=>{
            setLoading(false);
            return response.json()
        }).then((jsonResponse)=>{
            console.log('jsonResponse', jsonResponse)
            handleResponse(jsonResponse)  
        })
        
        
    }

    return (
        <AuthMainContainerStyled>
            <Head>
                <title>Verify Email</title>
            </Head>

                <ImageStyle width="170.97px" height="36.6px"/>
                <AuthContainerStyled>
                    <AuthHeaderStyled>
                        Verify Email
                    </AuthHeaderStyled>
                    <AuthTextStyled>
                        We have sent a verification link and code to your email address, please click on the link or enter the code into the field below to verify your email.
                    </AuthTextStyled>
                    <VH size="20px"/>
                    <FormContainer onSubmit={handleSubmit}>
                        <InputField name="verificationCode" placeholder="Enter verification code" required/>
                        <VH size="20px"/>
                        {
                            loading?
                            <RotatingImage src="/icon.png"/>:
                            <ButtonStyled>
                                VERIFY EMAIL ADDRESS
                            </ButtonStyled>
                        }
                        
                    </FormContainer>
                    
                    <SpanStyled>
                        Didin’t receive code?  <LinkStyled onClick={resendCode}>Resend</LinkStyled>
                    </SpanStyled>
                </AuthContainerStyled>
                

            </AuthMainContainerStyled>
    )
}
VerifyEmail.getPageLayout = (page : ReactElement)=>{
    return  <AuthLayout>
              {page}
            </AuthLayout>
  }
export default  VerifyEmail;
