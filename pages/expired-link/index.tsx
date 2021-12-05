import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FormEvent, ReactElement } from 'react'
import { ButtonStyled } from '../../components/buttons.style'
import { AuthContainerStyled, AuthMainContainerStyled } from '../../components/containers.style'
import { ImageStyle } from '../../components/figures.style'
import { FormContainer, InputField } from '../../components/forms.style'
import { VH } from '../../components/spacing.style'
import { AuthHeaderStyled, AuthLabelStyled, AuthSubHeaderStyled, AuthTextStyled, LinkStyled, SpanStyled } from '../../components/typographs.style'
import { AuthLayout } from '../../layouts/auth_layout'

interface Props {
    
}

const ExpiredLink : NextPage = (props: Props) => {
    const router = useRouter()
    return (
        <AuthMainContainerStyled>
            <Head>
                <title>Link expired</title>
            </Head>

                <ImageStyle width="170.97px" height="36.6px" />
                <AuthContainerStyled alignItems="center">
                    <ImageStyle  src="/054-exclamation.png"/>
                    <VH size="20px"/>
                    <AuthHeaderStyled width="356px">
                        Sorry, this link has expired, please request a new link.
                    </AuthHeaderStyled>
                    <VH size="10px"/>
                    <AuthSubHeaderStyled width="288px" lineHeight="27.2px"> 
                        Please enter your email address and we will shoot you a new link
                    </AuthSubHeaderStyled>
                    <VH size="30px"/>
                    
                    <FormContainer onSubmit={(event : FormEvent)=>{
                        event.preventDefault()
                        router.push('/verify-email')
                    }}>
                        <AuthLabelStyled>
                            Email Address
                        </AuthLabelStyled>
                        <InputField placeholder="Enter Email Address"/>
                        <VH size="20px"/>
                        <ButtonStyled>
                            SEND NEW LINK
                        </ButtonStyled>
                    </FormContainer>
                    
                    
                </AuthContainerStyled>
                

            </AuthMainContainerStyled>
    )
}
ExpiredLink.getPageLayout = (page : ReactElement)=>{
    return  <AuthLayout>
              {page}
            </AuthLayout>
  }
export default  ExpiredLink;
