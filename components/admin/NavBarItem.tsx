import React from 'react'
import Link from "next/link";
import styled from "@emotion/styled";

interface ItemProps {
    href?: string;
    label: string;
    icon: React.ReactNode;
    isActive?: boolean;
    isLast?: boolean;
    onClick?: () => void;
}


const StyledItem = styled.div`
    display: flex;
    text-align: start;
    margin: 0.4rem 0;
    width: 100%;
    height: 1.6rem;
    background-color: #fafafa;
    padding: 0.3em;
    justify-content: end;
    align-items: center;
    cursor: pointer;

    svg {
        margin-inline: 0.5rem;
    }
    color: #5e5e5e;
    :hover {
        background-color: #e6e6e6;
        box-shadow: 0px 0px 0px 5px #e6e6e6;
    }
    :active {
        background-color: #a7a7a7;
        box-shadow: 0px 0px 4px 5px #a7a7a7;
    }

`

const ActiveStyledItem = styled(StyledItem)`
border-inline-end: 4px solid #e78c47;
transform: translateX(4px);
color: black;
font-weight: 500;
`

export default function NavbarItem({ href, label, icon, isActive = false, isLast = false, onClick }: ItemProps) {

    let Item = isActive ? ActiveStyledItem : StyledItem;
    Item = isLast ? styled(Item)`
    margin-block-end: 2rem;
    ` : Item;

    let Wrapper = ({ href, children }: { href?: string, children: React.ReactNode }) => !!href ? <Link href={href} >{children}</Link> : <>{children}</>

    return (
        <Wrapper href={href}>
            <Item onClick={onClick} >
                {label}
                {icon}
            </Item>
        </Wrapper>
    )
}