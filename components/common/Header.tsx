import React from 'react'

import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import SignInButton from './SignInButton'
import LangSwitcher from './LangSwitcher'
import { useTranslation } from 'react-i18next'

const StyledHeader = styled.div`
width: 100%;
max-width: 1200px;
height: 3.5rem;
margin: 0 auto;
padding: 10px;
border-bottom: #839cb3 1px solid;
display: flex;
justify-content: space-between;
align-items: center;
`

const StyledNav = styled.span`
> a , span , svg {
    display: inline;
    vertical-align: middle;
    margin: 0 15px;
}
`

export default function Header() {

    const { t } = useTranslation()

    return (
        <StyledHeader>

            <Image
                src='/SHOPPE.svg'
                width={80}
                height={30}
                alt="Shoppe"
                style={{
                    margin: '10px',
                }}
            />
            <StyledNav>
                <Link href="/about">
                    {t('about')}
                </Link>
                <Link href="/contact">{t('contact')}</Link>
                <span>|</span>
                <Link href="/cart">
                    <AiOutlineShoppingCart size={20} />
                </Link>
                <SignInButton />
                <LangSwitcher />
            </StyledNav>
        </StyledHeader>
    )
}
