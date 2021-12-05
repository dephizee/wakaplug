import React, { ReactElement, useState } from 'react'
import { InputField } from './forms.style'
import { PasswordToggle } from './typographs.style'


interface Props {
    label :string,   
    name? :string,   
}

export const PasswordToggler = ({label, name}: Props): ReactElement => {
    const [openPassword, setOpenPassword] = useState(false);
    return (
        <span className="w-100 p-relative">
            <PasswordToggle onClick={()=>{setOpenPassword(old => !old)}}>{openPassword?'hide':'show'}</PasswordToggle>
            <InputField name={name} minLength="6" type={openPassword?'text':'password'} placeholder={label} required/>
            
        </span>
    )
}
