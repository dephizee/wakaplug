import type { NextPage } from 'next'
import Head from 'next/head'


import { AuthContainerStyled, AuthMainContainerStyled,  } from '../../components/containers.style'
import { AuthHeaderStyled } from '../../components/typographs.style'

import { VH } from '../../components/spacing.style'
import { ImageStyle } from '../../components/figures.style'
import { useRouter } from 'next/router'
import { ButtonStyled } from '../../components/buttons.style'


const Dashbaord: NextPage = () => {
    const router = useRouter()
    return (
    <AuthMainContainerStyled>
      <Head>
        <title>Dashboard</title>
      </Head>

        <ImageStyle width="170.97px" height="36.6px"/>
        <AuthContainerStyled>
            <AuthHeaderStyled>
                Welcome to the Dashboard
            </AuthHeaderStyled>
            <VH size="15px"/>
            <VH size="20px"/>
            <ButtonStyled>
                Logout
            </ButtonStyled>

        </AuthContainerStyled>
        

    </AuthMainContainerStyled>
  )
}



export default Dashbaord
