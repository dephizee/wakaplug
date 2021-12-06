import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
// import styles from '../../styles/Home.module.css'
import { FormEvent, ReactElement, useEffect, useState } from 'react'
import { AuthLayout } from '../../../layouts/auth_layout'
import { AuthContainerStyled, AuthMainContainerStyled,  } from '../../../components/containers.style'
import { AuthHeaderStyled, AuthLabelStyled, AuthSubHeaderStyled, SpanStyled, LinkStyled } from '../../../components/typographs.style'

import { FormContainer, InputField } from '../../../components/forms.style'
import { ButtonStyled } from '../../../components/buttons.style'
import { VH } from '../../../components/spacing.style'
import { ImageStyle, RotatingImage } from '../../../components/figures.style'
import { useRouter } from 'next/router'
import { PasswordToggler } from '../../../components/passwords'
import Link from 'next/link'
import { AuthEndPoint } from '../../../network/endpoints'
import { basicNetwokCall, handleResponse } from '../../../network/cb'
import { useStateWithLocalStorage, useStateWithLocalStorageToken } from '../../../hooks/local_storage'

const ResetPasswordNew: NextPage = () => {
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
        formData.append('email', params[0]);
        formData.append('hash', params[1]);
        basicNetwokCall(AuthEndPoint.resetPasswordUsingLink, formData, token_obj).then(response=>{
            setLoading(false);
            return response.json()
        }).then((jsonResponse)=>{
            console.log('jsonResponse', jsonResponse)
            handleResponse(jsonResponse)
            if(jsonResponse.meta.status_code === 200){
                router.push('/login')
            }    
        })
    }
    return (
    <AuthMainContainerStyled>
      <Head>
        <title>Reset Password</title>
      </Head>

        <ImageStyle width="170.97px" height="36.6px"/>
        <AuthContainerStyled>
            <AuthHeaderStyled>
                Reset password
            </AuthHeaderStyled>
            <VH size="15px"/>
            <FormContainer onSubmit={handleSubmit}>
                <AuthLabelStyled>
                    Create Password
                </AuthLabelStyled>
                <PasswordToggler name="password" label = "Create password"/>
                <AuthLabelStyled>
                    Confirm Password
                </AuthLabelStyled>
                <PasswordToggler label = "Confirm Password"/>
                <VH size="20px"/>
                {
                    loading?
                    <RotatingImage src="/icon.png"/>:
                    <ButtonStyled>
                        RESET PASSWORD
                    </ButtonStyled>
                }
                
            </FormContainer>

        </AuthContainerStyled>
        

    </AuthMainContainerStyled>
  )
}

ResetPasswordNew.getPageLayout = (page : ReactElement)=>{
    return  <AuthLayout>
              {page}
            </AuthLayout>
  }

export default ResetPasswordNew;
