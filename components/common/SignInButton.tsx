import React from "react";

import { IconButton } from "@chakra-ui/react";
import { useSession, signIn, signOut } from "next-auth/react";

import { AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";

export default function SignInButton() {
  const { data: session } = useSession();
  return <IconButton
    aria-label="Sign In"
    variant="ghost"
    onClick={() => {
      if (session) {
        signOut();
      } else {
        signIn();
      }
    }}>
    {session ? <AiOutlineLogout size={20} /> : <AiOutlineLogin size={20} />}
  </IconButton>;
}
