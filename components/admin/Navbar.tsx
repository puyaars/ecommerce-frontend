import React from 'react'

import Image from "next/image";
import styled from "@emotion/styled";
import NavbarItem from "./NavBarItem";

const StyledImage = styled.div`
    width: 100%;
    position: relative;
    height: 1.6rem;
    justify-self: start;
    margin-top: 3rem;
`

const StyledSidbarDiv = styled.div`
box-sizing: content-box;
    height: 100%;
    width: 100%;
    background-color: #fafaf3;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
`

const Spacer = styled.div`
flex: 10;
`

interface NavbarItem {
    href?: string;
    label: string;
    icon: React.ReactNode;
    isActive?: boolean;
    onClick?: () => void;
}

interface NavbarProps {
    items: NavbarItem[];
    bottomItems?: NavbarItem[];
}

export default function Navbar({ items, bottomItems }: NavbarProps) {
    return (
        <StyledSidbarDiv
        >

            <StyledImage  >
                <Image src="/SHOPPE.svg" alt="" layout='fill' />
            </StyledImage>
            <Spacer />

            {items.map((item, index) => (
                <NavbarItem
                    key={index}
                    {...item}
                />
            ))}

            <Spacer />
            {bottomItems && bottomItems.map((item, index) => (
                <NavbarItem
                    key={index}
                    {...item}
                    isLast={index === bottomItems.length - 1}
                />
            ))}

        </StyledSidbarDiv>
    )
}
