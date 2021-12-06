import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
// import styles from '../../styles/Home.module.css'
import { FormEvent, ReactElement, useState } from 'react'
import { AuthLayout } from '../../layouts/auth_layout'
import { AuthContainerStyled, AuthMainContainerStyled,  } from '../../components/containers.style'
import { AuthHeaderStyled, AuthLabelStyled, AuthSubHeaderStyled, SpanStyled, LinkStyled } from '../../components/typographs.style'

import { FormContainer, InputField } from '../../components/forms.style'
import { ButtonStyled } from '../../components/buttons.style'
import { VH } from '../../components/spacing.style'
import { ImageStyle, RotatingImage } from '../../components/figures.style'
import { useRouter } from 'next/router'
import { PasswordToggler } from '../../components/passwords'
import Link from 'next/link'
import { AuthEndPoint } from '../../network/endpoints'
import { basicNetwokCall, handleResponse } from '../../network/cb'
import { useStateWithLocalStorageToken } from '../../hooks/local_storage'

const Register: NextPage = () => {
    const router = useRouter()
    const [loading, setLoading] = useState(false);
    const [token,setToken] = useStateWithLocalStorageToken();


    const handleSubmit = (event: any)=>{
        event.preventDefault();
        if(loading) return;
        setLoading(true);
        const formData = new FormData(event.target);
        if(typeof window !== 'undefined'){
            formData.append('verifyRedirectUrl', `${window.location.origin}/verify-email`)
          }
        
        formData.append('displayName', ( new Date() ).getTime().toString());
        basicNetwokCall(AuthEndPoint.register, formData).then(response=>{
            setLoading(false);
            return response.json()
        }).then((jsonResponse)=>{
            console.log('jsonResponse', jsonResponse)
            
            if(jsonResponse.meta.status_code === 200){
                handleResponse(jsonResponse, "Please visit your email to complete registration")
                setToken(jsonResponse.meta.token)
                router.push('/login')
            }else{
                handleResponse(jsonResponse)
            }   
        })
        
        
    } 

    return (
    <AuthMainContainerStyled>
      <Head>
        <title>Registration Page</title>
        <meta name="description" content="Registration Page" />
      </Head>

        <ImageStyle width="170.97px" height="36.6px"/>
        <AuthContainerStyled>
            <AuthHeaderStyled>
                Create Account
            </AuthHeaderStyled>
            <AuthSubHeaderStyled>
                Host and manage events in minutes 
            </AuthSubHeaderStyled>
            <VH size="15px"/>
            <FormContainer onSubmit={handleSubmit}>
                <AuthLabelStyled>
                    Brand or Event Organizer
                </AuthLabelStyled>
                <InputField name="username" required placeholder="Enter brand or event organizer name"/>
                <AuthLabelStyled>
                    Email Address
                </AuthLabelStyled>
                <InputField name="email" required type="email" placeholder="Enter email address"/>
                <AuthLabelStyled>
                    Create Password
                </AuthLabelStyled>
                <PasswordToggler name="password" label = "Create password"/>
                <AuthLabelStyled>
                    Confirm Password
                </AuthLabelStyled>
                <PasswordToggler name="password-confirmation" label = "Confirm Password"/>
                <VH size="20px"/>
                {
                    loading?
                    <RotatingImage src="/icon.png"/>:
                    <ButtonStyled>
                        CREATE ACCOUNT
                    </ButtonStyled>
                }
                
            </FormContainer>
            
            <SpanStyled>
                Already have an account?  <Link href="/login" passHref={true}><LinkStyled>LogIn</LinkStyled></Link>
            </SpanStyled>
        </AuthContainerStyled>
        

    </AuthMainContainerStyled>
  )
}

Register.getPageLayout = (page : ReactElement)=>{
    return  <AuthLayout>
              {page}
            </AuthLayout>
  }

export default Register
