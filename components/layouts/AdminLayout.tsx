
import Head from "next/head";
import React from "react";

import styled from "@emotion/styled";

interface Props {
  sidebar: React.ReactNode;
  children: React.ReactNode;
  title: string;
  description: string;
}

const StyledDiv = styled.div`
 width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    > div:nth-child(1) {
      width: 200px;
    }
    
    background-color: red;
`

export default function AdminLayout({
  sidebar,
  children,
  title,
  description
}: Props) {
  return (
    <>
      <Head >
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <StyledDiv>
        {sidebar}
        {children}
      </StyledDiv></>
  );
}
