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
import { AuthHeaderStyled, AuthSubHeaderStyled, AuthTextStyled, LinkStyled, SpanStyled } from '../../components/typographs.style'
import { AuthLayout } from '../../layouts/auth_layout'

interface Props {
    
}

const VerificationSuccessful : NextPage = (props: Props) => {
    const router = useRouter()
    return (
        <AuthMainContainerStyled>
            <Head>
                <title>Verification was successful</title>
            </Head>

                <ImageStyle width="170.97px" height="36.6px" />
                <AuthContainerStyled alignItems="center">
                    <ImageStyle  src="/verification-success.png"/>
                    <AuthHeaderStyled width="216px">
                        Weldon, your email is verified
                    </AuthHeaderStyled>
                    <AuthSubHeaderStyled width="216px" lineHeight="170%"> 
                        You wll be redirected to log into your account shortly
                    </AuthSubHeaderStyled>
                    <VH size="50px"/>
                    <Link href="/login" passHref={true}>
                        <ButtonStyled>
                            CAN’T WAIT, LOGIN NOW
                        </ButtonStyled>
                    </Link>
                    
                    
                </AuthContainerStyled>
                

            </AuthMainContainerStyled>
    )
}
VerificationSuccessful.getPageLayout = (page : ReactElement)=>{
    return  <AuthLayout>
              {page}
            </AuthLayout>
  }
export default  VerificationSuccessful;
